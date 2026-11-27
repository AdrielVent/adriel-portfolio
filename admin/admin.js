/**
 * Owner-only /admin/ SPA + pure schema, lint, glTF2 inspection, and serial GitHub Contents API logic.
 * Pure functions are exported for Node unit testing; browser DOM initialization is guarded by
 * `typeof document !== "undefined"`.
 */

const DATA_KINDS = ["site", "projects", "models", "experience", "press"];
const DATA_FILES = {
  site: "assets/data/site.json",
  projects: "assets/data/projects.json",
  models: "assets/data/models.json",
  experience: "assets/data/experience.json",
  press: "assets/data/press.json",
};

const OAUTH_STATE_KEY = "admin_oauth_state";
const OAUTH_TOKEN_KEY = "admin_gh_token";
const MOCK_STORE_KEY = "admin_mock_store_v1";
const MOCK_SIGNED_OUT_KEY = "admin_mock_signed_out";

// ---------------------------------------------------------------------------
// 1. Pure Helpers: Loopback, URLs, Base64, Ordering
// ---------------------------------------------------------------------------

export function isLoopbackHostname(hostname) {
  const h = String(hostname || "").trim().toLowerCase();
  return h === "localhost" || h === "127.0.0.1" || h === "::1" || h === "[::1]";
}

export function isPlainObject(val) {
  return Boolean(val) && typeof val === "object" && !Array.isArray(val);
}

export function isNonEmptyString(val) {
  return typeof val === "string" && val.trim().length > 0;
}

export function isSafeUrl(value, { allowEmpty = false, allowHash = true } = {}) {
  if (value === undefined || value === null) return allowEmpty;
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return allowEmpty;

  // Strip control characters before scheme checks
  const normalized = trimmed.replace(/[\u0000-\u001f\u007f]/g, "");
  if (/^(?:javascript|data|vbscript|file):/i.test(normalized)) {
    return false;
  }
  if (normalized.startsWith("//")) {
    return false;
  }
  if (allowHash && /^#[A-Za-z0-9_.:-]+$/.test(normalized)) {
    return true;
  }
  if (/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(normalized)) {
    return true;
  }
  if (/^https:\/\//i.test(normalized)) {
    try {
      const u = new URL(normalized);
      return u.protocol === "https:";
    } catch {
      return false;
    }
  }
  if (/^http:\/\//i.test(normalized)) {
    try {
      const u = new URL(normalized);
      return u.protocol === "http:" && isLoopbackHostname(u.hostname);
    } catch {
      return false;
    }
  }
  // Safe relative paths inside portfolio (no dot-segment traversal)
  if (normalized.includes("..")) return false;
  return /^(?:\.\/)?(?:assets\/[A-Za-z0-9_./-]+|[a-z0-9_-]+\.html(?:#[A-Za-z0-9_.-]*)?)$/.test(
    normalized,
  );
}

export function encodeUtf8Base64(input) {
  const bytes =
    input instanceof Uint8Array
      ? input
      : new TextEncoder().encode(typeof input === "string" ? input : String(input ?? ""));
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const slice = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...slice);
  }
  return btoa(binary);
}

export function normalizeOrders(items) {
  if (!Array.isArray(items)) return [];
  return items.map((item, idx) => ({
    ...item,
    order: idx + 1,
  }));
}

export function moveItem(items, index, direction) {
  if (!Array.isArray(items)) return [];
  const nextIndex = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || index >= items.length || nextIndex < 0 || nextIndex >= items.length) {
    return normalizeOrders(items);
  }
  const copy = items.slice();
  const [moved] = copy.splice(index, 1);
  copy.splice(nextIndex, 0, moved);
  return normalizeOrders(copy);
}

// ---------------------------------------------------------------------------
// 2. Pre-Save Safety, Privacy & Truth Lint Rules
// ---------------------------------------------------------------------------

// Rule Group 1: Stellant internal codes, McMaster SKUs, and unpublished internal docs.
// Applied to ALL JSON payloads AND binary .glb/.stl chunk names & filenames.
const RULE_GROUP_1 = [
  { rule: "stellant-ml-code", re: /\bML\s*\d+[A-Z0-9-]*\b/i, message: "Internal Stellant ML* part/program code is forbidden." },
  { rule: "stellant-m2-code", re: /\bM\s*2\d{2,}[A-Z0-9-]*\b|\bM2\d+[A-Z0-9-]*\b/i, message: "Internal Stellant M2* part code is forbidden." },
  { rule: "stellant-09p-code", re: /\b0\d[A-Z]\d{3,}[A-Z0-9-]*\b|\b09P[A-Z0-9-]*\b/i, message: "Internal Stellant 09P*/0x part code is forbidden." },
  { rule: "stellant-hh-code", re: /\bHH\d+[A-Z0-9-]*\b/i, message: "Internal Stellant HH* part code is forbidden." },
  { rule: "stellant-hm-code", re: /\bHM\d+[A-Z0-9-]*\b/i, message: "Internal Stellant HM* part code is forbidden." },
  { rule: "stellant-ps2010", re: /\bPS\s*2010\b/i, message: "Internal Stellant PS 2010 reference is forbidden." },
  { rule: "stellant-pfc", re: /\bPFC\b/, message: "Internal Stellant PFC reference is forbidden." },
  { rule: "stellant-n9", re: /\bN9\b/, message: "Internal Stellant N9 program reference is forbidden." },
  { rule: "internal-part-no", re: /\b(?:drawing\s*no\.?|part\s*no\.?|P\/N)\b/i, message: "Internal drawing/part number reference is forbidden." },
  { rule: "internal-ecn-code", re: /\bECN-\d{3,}\b/i, message: "Internal ECN number (ECN-xxx) is forbidden." },
  { rule: "mcmaster-sku-a", re: /\b9\d{3,4}A\d{2,4}\b/i, message: "McMaster-Carr style SKU (9xxxAxxx) is forbidden." },
  { rule: "mcmaster-sku-kt", re: /\b\d{4,5}[KT]\d{2,4}\b/i, message: "McMaster-Carr style SKU (*K/*T) is forbidden." },
  { rule: "mcmaster-vendor", re: /\bmcmaster\b/i, message: "McMaster vendor SKU/reference is forbidden." },
  { rule: "unpublished-summary", re: /Technical_Summary_2027/i, message: "Unpublished Technical_Summary_2027 reference is forbidden." },
];

// Rule Group 2: RESUME_MASTER.md §9 stale/banned claims & removed AI credit.
// Carefully preserves: "Lean Six Sigma White Belt", "not validation", "not a validation",
// "experimental validation pending", "semifinalist", "in shop-floor use", "gdt-c-frame-drawing.jpg".
const RULE_GROUP_2 = [
  {
    rule: "stale-136-to-60",
    re: /136\s*(?:->|→|–|—|-|to)\s*60|\b136\s*°?\s*C\b/i,
    message: "Stale 136->60 C junction temperature claim (use verified 122.5 to 64.9 C).",
  },
  {
    rule: "heatsink-false-validation",
    re: /\b0\.1[15]\s*%|\b0\.11\b|\bvalidated\b|\bcorrelat[a-z]*\b/i,
    message: "Heat sink models measure different things (do not claim 0.11%/0.15%/validated/correlated).",
  },
  {
    rule: "stale-travel-award",
    re: /\$1,?350\b|\btravel\s+(?:award|funding)\b/i,
    message: "Unverified $1,350 / travel award claim is forbidden.",
  },
  {
    rule: "stale-first-siemens",
    re: /\bfirst\s+Hofstra\s+Siemens\b/i,
    message: "Unverified 'First Hofstra Siemens' claim is forbidden.",
  },
  {
    rule: "stale-finalist-overclaim",
    re: /\bNational\s+Finalist\b|\bFinalist\b/i,
    message: "Overstated 'Finalist' / 'National Finalist' claim (use 'semifinalist').",
  },
  {
    rule: "stale-lspace-role",
    re: /\b(?:Thermal\s+Engineer|Thermal\s+Lead|led\s+Team\s+6)\b/i,
    message: "Overstated L'SPACE role (use 'Thermal Subsystem').",
  },
  {
    rule: "stale-lspace-sys10",
    re: /(?:^|[^\d])-133(?:\s*°?\s*C)?\b|\+121(?:\s*°?\s*C)?\b|\bSYS-10\b/i,
    message: "Superseded L'SPACE -133/+121 C or SYS-10 requirement is forbidden.",
  },
  {
    rule: "stale-lspace-straps",
    re: /coatings,?\s+and\s+(?:conductive|thermal)\s+straps|\bMLI\b.*\btrade\b/i,
    message: "Unverified L'SPACE thermal strap / MLI trade claim is forbidden.",
  },
  {
    rule: "stale-stellant-shop",
    re: /\bdaily\s+(?:shop-floor\s+)?use\b|\breleased\s+(?:to\s+(?:the\s+)?shop|via\s+ECN)\b|\bled\s+(?:a\s+)?design\s+review\b|\b5\s+revisions\b/i,
    message: "Stale Stellant claim (use 'in shop-floor use' / 3 versions).",
  },
  {
    rule: "open3-blade-deflection",
    re: /\bblade[- ]deflection\b/i,
    message: "Unconfirmed blade-deflection claim (OPEN-3) is forbidden.",
  },
  {
    rule: "stale-asme-amounts",
    re: /\$(?:6,?055|1,?000)\b/i,
    message: "Superseded ASME funding figure ($6,055 / $1,000) is forbidden.",
  },
  {
    rule: "stale-cstep-figures",
    re: /\b30-person\b|\b40%(?!\w)|\b20\+\s+students\s+with\s+industry\s+mentors\b/i,
    message: "Superseded CSTEP/SHPE headcount or 40% figure is forbidden.",
  },
  {
    rule: "stale-shpe-dormancy",
    re: /inactive\s+(?:since\s+200[78]|for\s+a\s+decade)/i,
    message: "Superseded SHPE dormancy phrasing (use 'dormant 18+ years').",
  },
  {
    rule: "open7-c-frame-fea",
    re: /fea-c-frame-displacement|\b45\s*(?:kN|,?000\s*N)\b|\b1\.41\b/i,
    message: "Held C-frame FEA study (OPEN-7: fea-c-frame-displacement / 45 kN / 1.41) is forbidden.",
  },
  {
    rule: "removed-claude-credit",
    re: /Claude\s*\(\s*Anthropic\s*\)|\bAnthropic\b/i,
    message: "Removed Claude (Anthropic) attribution is forbidden.",
  },
  {
    rule: "banned-bakehouse-or-70",
    re: /\bBakehouse\s*360\b|\bFounding\s+President\b|\b70\+\s+members\b|\bSelected\s+from\s+54\s+teams\b/i,
    message: "Banned claim (Bakehouse 360 / Founding President / 70+ members / Selected from 54 teams) is forbidden.",
  },
  {
    rule: "banned-gpa-297",
    re: /\b2\.97\b/,
    message: "Banned/unverified GPA figure (2.97) is forbidden.",
  },
  {
    rule: "unresolved-todo",
    re: /\[?\bTODO\b/i,
    message: "Unresolved TODO placeholder is forbidden.",
  },
];

// Additional hygiene checks for .glb/.stl filenames, titles/IDs, and binary glTF Chunk 0 strings
const GLB_HYGIENE_RULES = [
  {
    rule: "glb-fastener-callout",
    re: /\b(?:#?\d{1,2}-\d{2}|M\d+(?:\.\d+)?x\d+)\b/i,
    message: "Fastener callout (#x-xx / Mx*y) must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-fastener-thread",
    re: /\b\d+-\d+\s*(?:UNC|UNF|SHCS|BHCS|FHCS|screw|bolt)\b/i,
    message: "Fastener thread/hardware specification must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-fastener-type",
    re: /\b(?:SHCS|BHCS|FHCS|PHMS)\b/,
    message: "Fastener head/type code (SHCS/BHCS/FHCS/PHMS) must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-fastener-desc",
    re: /\b(?:socket\s*head|hex\s*cap|washer|locknut|set\s*screw|dowel\s*pin)\b/i,
    message: "Generic hardware/fastener part name must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-customer-program",
    re: /\b(?:stellant|comtech)\b/i,
    message: "Customer/company identifier (Stellant/Comtech) must be scrubbed from 3D model metadata and filenames.",
  },
  {
    rule: "glb-emi-ref",
    re: /\bEMI\b/i,
    message: "Internal EMI reference must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-initials-av",
    re: /(?:^|[-_ ])AV(?=$|[-_ .])|[-_]AV\b/i,
    message: "Designer initials (-AV) must be scrubbed from 3D model metadata.",
  },
  {
    rule: "glb-rough-cad-name",
    re: /\b(?:assemgtably\d*|cup-test|test[- _]drive|3d[- _]print[- _]testing|calmp|limitless|the-syringe|full-v-5)\b/i,
    message: "Rough/typo CAD mesh or node name must be scrubbed before publishing.",
  },
  {
    rule: "glb-version-suffix",
    re: /[-_ ]v-?\d+\b/i,
    message: "Version suffix (-v2 / -v-5) must be scrubbed from 3D model names.",
  },
];

const UNCLEAN_TITLE_RE = /\.(?:glb|stl|gltf)\b|_|\bv\d+\b|\bfull-v-5\b|\bassm\b|\bcup-test\b/i;

function checkStringAgainstRules(str, rules, path, errors) {
  for (const r of rules) {
    if (r.re.test(str)) {
      errors.push({
        path,
        rule: r.rule,
        message: r.message,
      });
    }
  }
}

function checkCFrameOutsideGdt(str, path, errors) {
  const scrubbed = str.replace(/gdt-c-frame-drawing\.jpg/gi, "");
  if (/\bC-?frame\b/i.test(scrubbed)) {
    errors.push({
      path,
      rule: "open7-c-frame-reference",
      message: "C-frame reference outside gdt-c-frame-drawing.jpg is blocked (OPEN-7 hold).",
    });
  }
}

export function lintPortfolioPayload(kind, data) {
  const errors = [];

  function walk(node, path) {
    if (typeof node === "string") {
      checkStringAgainstRules(node, RULE_GROUP_1, path, errors);
      checkStringAgainstRules(node, RULE_GROUP_2, path, errors);
      checkCFrameOutsideGdt(node, path, errors);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((item, idx) => walk(item, `${path}[${idx}]`));
      return;
    }
    if (isPlainObject(node)) {
      // Contextual L'SPACE + internship check within any single object record
      const recordText = collectStrings(node).join(" ");
      if (/L['’]?SPACE/i.test(recordText) && /\binternship\b/i.test(recordText)) {
        errors.push({
          path,
          rule: "stale-lspace-internship",
          message: "L'SPACE must not be described as an internship.",
        });
      }
      for (const [k, v] of Object.entries(node)) {
        walk(v, path ? `${path}.${k}` : k);
      }
    }
  }

  walk(data, kind);

  if (kind === "models" && isPlainObject(data) && Array.isArray(data.models)) {
    data.models.forEach((m, idx) => {
      if (!isPlainObject(m)) return;
      for (const field of ["title", "id"]) {
        if (typeof m[field] === "string" && m[field].trim()) {
          const p = `models.models[${idx}].${field}`;
          checkStringAgainstRules(m[field], GLB_HYGIENE_RULES, p, errors);
          if (UNCLEAN_TITLE_RE.test(m[field])) {
            errors.push({
              path: p,
              rule: "unclean-model-title",
              message: `Model ${field} contains unclean CAD/file artifact (.glb/.stl/underscore/v2/assm/cup-test).`,
            });
          }
        }
      }
      if (typeof m.file === "string" && m.file.trim()) {
        const basename = m.file.split("/").pop() || "";
        checkStringAgainstRules(basename, GLB_HYGIENE_RULES, `models.models[${idx}].file`, errors);
      }
    });
  }

  return { ok: errors.length === 0, errors };
}

export function lintCommitMessage(message) {
  const errors = [];
  const text = String(message || "");
  if (text.trim()) {
    checkStringAgainstRules(text, RULE_GROUP_1, "commitMessage", errors);
    checkStringAgainstRules(text, RULE_GROUP_2, "commitMessage", errors);
    checkCFrameOutsideGdt(text, "commitMessage", errors);
    if (/L['’]?SPACE/i.test(text) && /\binternship\b/i.test(text)) {
      errors.push({
        path: "commitMessage",
        rule: "stale-lspace-internship",
        message: "L'SPACE must not be described as an internship.",
      });
    }
  }
  return { ok: errors.length === 0, errors };
}

function collectStrings(node, out = []) {
  if (typeof node === "string") {
    out.push(node);
  } else if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out);
  } else if (isPlainObject(node)) {
    for (const v of Object.values(node)) collectStrings(v, out);
  }
  return out;
}

// ---------------------------------------------------------------------------
// 3. Binary .glb (glTF 2.0) & .stl Upload Inspection
// ---------------------------------------------------------------------------

function extractExtrasStrings(val, path, out) {
  if (typeof val === "string") {
    out.push({ path, value: val });
  } else if (Array.isArray(val)) {
    val.forEach((item, idx) => extractExtrasStrings(item, `${path}[${idx}]`, out));
  } else if (isPlainObject(val)) {
    for (const [k, v] of Object.entries(val)) {
      extractExtrasStrings(v, `${path}.${k}`, out);
    }
  }
}

export function inspectGlbArrayBuffer(filename, arrayBuffer) {
  const errors = [];
  const rawName = String(filename || "");
  const basename = rawName.split("/").pop() || "";
  const slugValid = /^[a-z0-9][a-z0-9-]*\.(?:glb|stl)$/.test(basename);

  if (!slugValid) {
    errors.push({
      path: "filename",
      rule: "invalid-model-slug",
      message:
        'Model filename must be lowercase kebab-case matching ^[a-z0-9][a-z0-9-]*\\.(glb|stl)$ (received "' +
        basename +
        '").',
    });
  } else {
    checkStringAgainstRules(basename, RULE_GROUP_1, "filename", errors);
    checkStringAgainstRules(basename, GLB_HYGIENE_RULES, "filename", errors);
  }

  const ext = basename.toLowerCase().endsWith(".stl") ? "stl" : "glb";
  const bytes =
    arrayBuffer instanceof Uint8Array
      ? arrayBuffer
      : new Uint8Array(arrayBuffer instanceof ArrayBuffer ? arrayBuffer : 0);

  if (ext === "stl") {
    if (bytes.byteLength < 84) {
      errors.push({
        path: "stl",
        rule: "invalid-stl-size",
        message: "STL file is truncated (< 84 bytes).",
      });
      return { ok: false, format: "stl", slugValid, header: null, chunkNames: [], errors };
    }
    const headerText = new TextDecoder("utf-8", { fatal: false })
      .decode(bytes.subarray(0, 80))
      .replace(/\0+$/g, "")
      .trim();
    const chunkNames = [];
    if (headerText) {
      chunkNames.push({ path: "stl.header", value: headerText });
      checkStringAgainstRules(headerText, RULE_GROUP_1, "stl.header", errors);
      checkStringAgainstRules(headerText, GLB_HYGIENE_RULES, "stl.header", errors);
    }
    if (headerText.toLowerCase().startsWith("solid")) {
      const sampleText = new TextDecoder("utf-8", { fatal: false }).decode(
        bytes.subarray(0, Math.min(bytes.byteLength, 65536)),
      );
      for (const line of sampleText.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (/^(?:solid|endsolid)\b/i.test(trimmed)) {
          chunkNames.push({ path: "stl.solid", value: trimmed });
          checkStringAgainstRules(trimmed, RULE_GROUP_1, "stl.solid", errors);
          checkStringAgainstRules(trimmed, GLB_HYGIENE_RULES, "stl.solid", errors);
        }
      }
    }
    return {
      ok: errors.length === 0,
      format: "stl",
      slugValid,
      header: { byteLength: bytes.byteLength, headerText },
      chunkNames,
      errors,
    };
  }

  // Binary glTF 2.0 inspection
  if (bytes.byteLength < 20) {
    errors.push({
      path: "glb.header",
      rule: "invalid-glb-header",
      message: "Binary glTF (.glb) file is smaller than the 20-byte header + chunk 0 prefix.",
    });
    return { ok: false, format: "glb", slugValid, header: null, chunkNames: [], errors };
  }

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const magic = view.getUint32(0, true);
  const version = view.getUint32(4, true);
  const totalLength = view.getUint32(8, true);
  const chunkLength = view.getUint32(12, true);
  const chunkType = view.getUint32(16, true);

  if (magic !== 0x46546c67) {
    errors.push({
      path: "glb.header.magic",
      rule: "invalid-glb-magic",
      message: `Invalid glTF magic 0x${magic.toString(16)}; expected 0x46546c67 ("glTF").`,
    });
  }
  if (version !== 2) {
    errors.push({
      path: "glb.header.version",
      rule: "invalid-glb-version",
      message: `Unsupported glTF version ${version}; expected version 2.`,
    });
  }
  if (totalLength > bytes.byteLength || totalLength < 20) {
    errors.push({
      path: "glb.header.length",
      rule: "invalid-glb-length",
      message: `glTF header length ${totalLength} does not fit buffer size ${bytes.byteLength}.`,
    });
  }
  if (chunkType !== 0x4e4f534a) {
    errors.push({
      path: "glb.chunk0.type",
      rule: "invalid-glb-chunk0",
      message: `Chunk 0 type 0x${chunkType.toString(16)} is not JSON (0x4e4f534a).`,
    });
  }
  if (20 + chunkLength > bytes.byteLength) {
    errors.push({
      path: "glb.chunk0.length",
      rule: "truncated-glb-chunk0",
      message: `Chunk 0 JSON extends beyond file end (${20 + chunkLength} > ${bytes.byteLength}).`,
    });
  }

  if (errors.some((e) => e.path.startsWith("glb."))) {
    return {
      ok: false,
      format: "glb",
      slugValid,
      header: { magic, version, totalLength, chunkLength, chunkType },
      chunkNames: [],
      errors,
    };
  }

  let gltfJson;
  try {
    const jsonBytes = bytes.subarray(20, 20 + chunkLength);
    const jsonText = new TextDecoder("utf-8", { fatal: true }).decode(jsonBytes);
    gltfJson = JSON.parse(jsonText);
  } catch (err) {
    errors.push({
      path: "glb.chunk0.json",
      rule: "invalid-glb-json",
      message: `Failed to decode/parse glTF Chunk 0 JSON: ${err.message}`,
    });
    return {
      ok: false,
      format: "glb",
      slugValid,
      header: { magic, version, totalLength, chunkLength, chunkType },
      chunkNames: [],
      errors,
    };
  }

  const chunkNames = [];
  const namedSections = [
    "nodes",
    "meshes",
    "materials",
    "scenes",
    "animations",
    "skins",
    "cameras",
    "images",
    "textures",
    "buffers",
  ];

  for (const section of namedSections) {
    const arr = gltfJson?.[section];
    if (!Array.isArray(arr)) continue;
    arr.forEach((entry, idx) => {
      if (isPlainObject(entry)) {
        if (typeof entry.name === "string" && entry.name.trim()) {
          chunkNames.push({ path: `${section}[${idx}].name`, value: entry.name });
        }
        if (typeof entry.uri === "string" && !entry.uri.startsWith("data:")) {
          chunkNames.push({ path: `${section}[${idx}].uri`, value: entry.uri });
        }
        if (entry.extras !== undefined) {
          extractExtrasStrings(entry.extras, `${section}[${idx}].extras`, chunkNames);
        }
      }
    });
  }

  if (gltfJson?.extras !== undefined) {
    extractExtrasStrings(gltfJson.extras, "extras", chunkNames);
  }
  if (gltfJson?.asset?.extras !== undefined) {
    extractExtrasStrings(gltfJson.asset.extras, "asset.extras", chunkNames);
  }

  for (const item of chunkNames) {
    checkStringAgainstRules(item.value, RULE_GROUP_1, `glb.${item.path}`, errors);
    checkStringAgainstRules(item.value, GLB_HYGIENE_RULES, `glb.${item.path}`, errors);
  }

  return {
    ok: errors.length === 0,
    format: "glb",
    slugValid,
    header: { magic, version, totalLength, chunkLength, chunkType },
    chunkNames,
    errors,
  };
}

// ---------------------------------------------------------------------------
// 4. JSON Schema Validation (`PROJECT.md § Interface Contracts 1`)
// ---------------------------------------------------------------------------

function checkUniqueOrderedArray(arr, path, errors, itemValidator) {
  if (!Array.isArray(arr)) {
    errors.push({ path, message: `${path} must be an array.` });
    return;
  }
  const seenIds = new Set();
  arr.forEach((item, idx) => {
    const itemPath = `${path}[${idx}]`;
    if (!isPlainObject(item)) {
      errors.push({ path: itemPath, message: `${itemPath} must be an object.` });
      return;
    }
    if (!isNonEmptyString(item.id)) {
      errors.push({ path: `${itemPath}.id`, message: "id must be a non-empty string." });
    } else if (seenIds.has(item.id)) {
      errors.push({ path: `${itemPath}.id`, message: `Duplicate id "${item.id}".` });
    } else {
      seenIds.add(item.id);
    }
    if (!Number.isInteger(item.order) || item.order < 1) {
      errors.push({ path: `${itemPath}.order`, message: "order must be an integer >= 1." });
    }
    itemValidator(item, itemPath);
  });
}

export function validateSchema(kind, data) {
  const errors = [];
  if (!isPlainObject(data)) {
    errors.push({ path: kind, message: `${kind}.json root must be a plain JSON object.` });
    return { valid: false, errors };
  }

  if (kind === "site") {
    if (!isPlainObject(data.owner)) {
      errors.push({ path: "site.owner", message: "owner must be an object." });
    } else {
      for (const f of ["name", "location", "citizenship", "availability", "bio"]) {
        if (!isNonEmptyString(data.owner[f])) {
          errors.push({ path: `site.owner.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
    }

    if (!Array.isArray(data.nav)) {
      errors.push({ path: "site.nav", message: "nav must be an array." });
    } else {
      data.nav.forEach((n, idx) => {
        if (!isPlainObject(n) || !isNonEmptyString(n.label)) {
          errors.push({ path: `site.nav[${idx}].label`, message: "label must be a non-empty string." });
        }
        if (!isPlainObject(n) || !isSafeUrl(n.href)) {
          errors.push({ path: `site.nav[${idx}].href`, message: "href must be a safe URL or local link." });
        }
      });
    }

    if (!isPlainObject(data.resume)) {
      errors.push({ path: "site.resume", message: "resume must be an object." });
    } else {
      if (!isSafeUrl(data.resume.pdf)) {
        errors.push({ path: "site.resume.pdf", message: "resume.pdf must be a safe URL." });
      }
      if (!isNonEmptyString(data.resume.updated)) {
        errors.push({ path: "site.resume.updated", message: "resume.updated must be a non-empty string." });
      }
    }

    if (!Array.isArray(data.contacts)) {
      errors.push({ path: "site.contacts", message: "contacts must be an array." });
    } else {
      data.contacts.forEach((c, idx) => {
        if (!isPlainObject(c) || !isNonEmptyString(c.label)) {
          errors.push({ path: `site.contacts[${idx}].label`, message: "label must be non-empty." });
        }
        if (!isPlainObject(c) || !isNonEmptyString(c.value)) {
          errors.push({ path: `site.contacts[${idx}].value`, message: "value must be non-empty." });
        }
        if (!isPlainObject(c) || !isSafeUrl(c.href)) {
          errors.push({ path: `site.contacts[${idx}].href`, message: "href must be a safe URL." });
        }
      });
    }

    if (!isPlainObject(data.oauth)) {
      errors.push({ path: "site.oauth", message: "oauth must be an object." });
    } else {
      for (const f of ["githubOwner", "githubRepo", "branch", "allowedLogin"]) {
        if (!isNonEmptyString(data.oauth[f])) {
          errors.push({ path: `site.oauth.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (typeof data.oauth.clientId !== "string") {
        errors.push({ path: "site.oauth.clientId", message: "clientId must be a string." });
      }
      if (typeof data.oauth.proxyUrl !== "string" || !isSafeUrl(data.oauth.proxyUrl, { allowEmpty: true, allowHash: false })) {
        errors.push({ path: "site.oauth.proxyUrl", message: "proxyUrl must be empty or a valid https/loopback URL." });
      }
    }
  } else if (kind === "models") {
    checkUniqueOrderedArray(data.models, "models.models", errors, (m, p) => {
      for (const f of ["title", "category", "summary"]) {
        if (!isNonEmptyString(m[f])) {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!isSafeUrl(m.file)) {
        errors.push({ path: `${p}.file`, message: "file must be a safe relative asset path." });
      }
      if (!["stl", "glb", "gltf"].includes(m.format)) {
        errors.push({ path: `${p}.format`, message: 'format must be "stl", "glb", or "gltf".' });
      }
      if (!isNonEmptyString(m.date)) {
        errors.push({ path: `${p}.date`, message: "date must be a non-empty string." });
      }
      if (!Array.isArray(m.specs) || m.specs.length === 0) {
        errors.push({ path: `${p}.specs`, message: "specs must be a non-empty array." });
      } else {
        m.specs.forEach((s, sIdx) => {
          if (!isPlainObject(s) || !isNonEmptyString(s.label) || !isNonEmptyString(s.value)) {
            errors.push({ path: `${p}.specs[${sIdx}]`, message: "each spec needs non-empty label and value." });
          }
        });
      }
      if (m.caseStudyHref !== null && m.caseStudyHref !== undefined) {
        if (!isNonEmptyString(m.caseStudyHref) || !isSafeUrl(m.caseStudyHref, { allowEmpty: false })) {
          errors.push({ path: `${p}.caseStudyHref`, message: "caseStudyHref must be null or a non-empty safe URL." });
        }
      }
      if (typeof m.sourceNote !== "string") {
        errors.push({ path: `${p}.sourceNote`, message: "sourceNote must be a string." });
      }
    });
  } else if (kind === "projects") {
    if (!isPlainObject(data.featured)) {
      errors.push({ path: "projects.featured", message: "featured must be an object." });
    } else {
      for (const f of ["id", "title", "eyebrow", "summary"]) {
        if (!isNonEmptyString(data.featured[f])) {
          errors.push({ path: `projects.featured.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!Array.isArray(data.featured.metrics)) {
        errors.push({ path: "projects.featured.metrics", message: "metrics must be an array." });
      }
      if (!isSafeUrl(data.featured.href)) {
        errors.push({ path: "projects.featured.href", message: "featured.href must be a safe URL." });
      }
      if (typeof data.featured.modelId !== "string") {
        errors.push({ path: "projects.featured.modelId", message: "featured.modelId must be a string." });
      }
    }

    checkUniqueOrderedArray(data.projects, "projects.projects", errors, (proj, p) => {
      if (!["thermal", "mechanical", "software"].includes(proj.group)) {
        errors.push({ path: `${p}.group`, message: 'group must be "thermal", "mechanical", or "software".' });
      }
      for (const f of ["title", "summary"]) {
        if (!isNonEmptyString(proj[f])) {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      for (const f of ["dates", "context"]) {
        if (typeof proj[f] !== "string") {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a string.` });
        }
      }
      if (!isSafeUrl(proj.image, { allowEmpty: true })) {
        errors.push({ path: `${p}.image`, message: "image must be empty or a safe URL." });
      }
      if (isNonEmptyString(proj.image)) {
        if (!isNonEmptyString(proj.imageAlt)) {
          errors.push({ path: `${p}.imageAlt`, message: "imageAlt must be a non-empty string when image is set." });
        }
      } else if (proj.imageAlt !== null && typeof proj.imageAlt !== "string") {
        errors.push({ path: `${p}.imageAlt`, message: "imageAlt must be a string or null." });
      }
      if (!isSafeUrl(proj.href, { allowEmpty: true })) {
        errors.push({ path: `${p}.href`, message: "href must be empty or a safe URL." });
      }
      if (!Array.isArray(proj.tags) || proj.tags.some((t) => typeof t !== "string")) {
        errors.push({ path: `${p}.tags`, message: "tags must be an array of strings." });
      }
    });
  } else if (kind === "experience") {
    checkUniqueOrderedArray(data.experience, "experience.experience", errors, (exp, p) => {
      for (const f of ["org", "role", "location", "dates"]) {
        if (!isNonEmptyString(exp[f])) {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!Array.isArray(exp.bullets) || exp.bullets.some((b) => !isNonEmptyString(b))) {
        errors.push({ path: `${p}.bullets`, message: "bullets must be an array of non-empty strings." });
      }
    });

    checkUniqueOrderedArray(data.leadership, "experience.leadership", errors, (lead, p) => {
      for (const f of ["org", "role", "dates"]) {
        if (!isNonEmptyString(lead[f])) {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!Array.isArray(lead.bullets) || lead.bullets.some((b) => !isNonEmptyString(b))) {
        errors.push({ path: `${p}.bullets`, message: "bullets must be an array of non-empty strings." });
      }
    });

    if (!isPlainObject(data.education)) {
      errors.push({ path: "experience.education", message: "education must be an object." });
    } else {
      for (const f of ["school", "degree", "expected"]) {
        if (!isNonEmptyString(data.education[f])) {
          errors.push({ path: `experience.education.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!Array.isArray(data.education.honors) || data.education.honors.some((h) => !isNonEmptyString(h))) {
        errors.push({ path: "experience.education.honors", message: "honors must be an array of non-empty strings." });
      }
    }
  } else if (kind === "press") {
    checkUniqueOrderedArray(data.items, "press.items", errors, (item, p) => {
      for (const f of ["date", "title", "org", "summary"]) {
        if (!isNonEmptyString(item[f])) {
          errors.push({ path: `${p}.${f}`, message: `${f} must be a non-empty string.` });
        }
      }
      if (!isSafeUrl(item.href, { allowEmpty: true })) {
        errors.push({ path: `${p}.href`, message: "href must be empty or a safe URL." });
      }
    });
  } else {
    errors.push({ path: kind, message: `Unknown schema kind "${kind}".` });
  }

  return { valid: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// 5. Serial GitHub Contents API Commit Pipeline
// ---------------------------------------------------------------------------

export function buildCommitOperations({
  original = {},
  current = {},
  stagedFiles = new Map(),
  deletedFiles = new Set(),
} = {}) {
  const ops = [];

  // 1. Staged binary uploads (assets/models/<slug>.<ext>) before JSON updates
  for (const [path, bytes] of stagedFiles.entries()) {
    ops.push({
      action: "upsert",
      path,
      kind: "binary",
      contentBase64: encodeUtf8Base64(bytes),
      allowMissingSha: true,
    });
  }

  // 2. Modified JSON files (pretty-printed 2 spaces + trailing newline)
  for (const kind of DATA_KINDS) {
    if (!current[kind]) continue;
    const prevStr = original[kind] ? JSON.stringify(original[kind], null, 2) + "\n" : "";
    const nextStr = JSON.stringify(current[kind], null, 2) + "\n";
    if (prevStr !== nextStr) {
      ops.push({
        action: "upsert",
        path: DATA_FILES[kind],
        kind: "json",
        dataKind: kind,
        contentBase64: encodeUtf8Base64(nextStr),
        allowMissingSha: true,
      });
    }
  }

  // 3. Explicit deletions after JSON references are removed
  for (const path of deletedFiles.values()) {
    if (!stagedFiles.has(path)) {
      ops.push({
        action: "delete",
        path,
        kind: "binary",
      });
    }
  }

  return ops;
}

export async function commitOperationsSerially(ops, transport) {
  const trace = [];
  const committed = [];

  for (const op of ops) {
    // Step 1: sequential GET for current sha
    const existing = await transport.getFileSha(op.path);
    trace.push({ step: "GET", path: op.path, sha: existing?.sha || null });

    if (op.action === "delete") {
      if (!existing?.sha) {
        trace.push({ step: "SKIP_DELETE_MISSING", path: op.path });
        continue;
      }
      const res = await transport.deleteFile(op.path, existing.sha);
      trace.push({ step: "DELETE", path: op.path, commitSha: res?.commit?.sha || null });
      committed.push({ action: "delete", path: op.path, commitSha: res?.commit?.sha || null });
    } else {
      if (!existing?.sha && !op.allowMissingSha) {
        throw new Error(`Missing existing sha for ${op.path}`);
      }
      const res = await transport.putFile(op.path, op.contentBase64, existing?.sha || undefined);
      trace.push({ step: "PUT", path: op.path, commitSha: res?.commit?.sha || null });
      committed.push({ action: "put", path: op.path, commitSha: res?.commit?.sha || null });
    }
  }

  return { committed, trace };
}

// ---------------------------------------------------------------------------
// 6. Browser SPA Controller (Guarded for Node Unit Tests)
// ---------------------------------------------------------------------------

function createEmptyDefaults() {
  return {
    site: {
      owner: {
        name: "Adriel Ventura",
        location: "Long Island, NY",
        citizenship: "U.S. Citizen",
        availability: "Summer 2027",
        bio: "",
      },
      nav: [
        { label: "Work", href: "index.html#work" },
        { label: "Models", href: "models.html" },
        { label: "Experience", href: "index.html#experience" },
        { label: "Contact", href: "index.html#contact" },
      ],
      resume: { pdf: "assets/resume/Adriel_Ventura_Resume.pdf", updated: "Nov. 2026" },
      contacts: [],
      oauth: {
        githubOwner: "AdrielVent",
        githubRepo: "adriel-portfolio",
        branch: "main",
        clientId: "",
        proxyUrl: "",
        allowedLogin: "AdrielVent",
      },
    },
    projects: {
      featured: {
        id: "featured",
        title: "",
        eyebrow: "",
        summary: "",
        metrics: [],
        href: "heat-sink.html",
        modelId: "",
      },
      projects: [],
    },
    models: { models: [] },
    experience: {
      experience: [],
      leadership: [],
      education: { school: "Hofstra University", degree: "", expected: "Dec. 2027", honors: [] },
    },
    press: { items: [] },
  };
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === "textContent") node.textContent = v;
    else if (k === "className") node.className = v;
    else if (k === "disabled") node.disabled = Boolean(v);
    else if (k === "readOnly") node.readOnly = Boolean(v);
    else if (k === "checked") node.checked = Boolean(v);
    else if (k === "value") node.value = String(v);
    else if (k.startsWith("on") && typeof v === "function") {
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else {
      node.setAttribute(k, String(v));
    }
  }
  const list = Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child === undefined || child === null || child === false) continue;
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  initAdminApp().catch((err) => {
    const statusEl = document.getElementById("auth-status");
    if (statusEl) {
      statusEl.textContent = `Initialization error: ${err.message}`;
    }
  });
}

async function initAdminApp() {
  const params = new URLSearchParams(window.location.search);
  const isMockMode =
    params.get("mock") === "1" && isLoopbackHostname(window.location.hostname);
  const mockRole = params.get("mockRole") === "nonowner" ? "nonowner" : "owner";

  const state = {
    isMockMode,
    mockRole,
    activeTab: "projects",
    missingFiles: [],
    original: createEmptyDefaults(),
    current: createEmptyDefaults(),
    stagedFiles: new Map(),
    deletedFiles: new Set(),
    orphanCandidateFiles: new Set(),
    lastUploadReport: null,
    commitMessage: "chore(portfolio): update site content via /admin",
    commitLog: [],
    auth: {
      status: "loading", // loading | unconfigured | signed_out | authorized | denied | error
      login: null,
      detail: "",
      token: null,
    },
  };

  // Load initial JSON data
  const defaults = createEmptyDefaults();
  for (const kind of DATA_KINDS) {
    try {
      const res = await fetch(`../${DATA_FILES[kind]}`, { cache: "no-store" });
      if (!res.ok) {
        state.missingFiles.push(DATA_FILES[kind]);
        state.original[kind] = deepClone(defaults[kind]);
        state.current[kind] = deepClone(defaults[kind]);
        continue;
      }
      const parsed = await res.json();
      state.original[kind] = deepClone(parsed);
      state.current[kind] = deepClone(parsed);
    } catch {
      state.missingFiles.push(DATA_FILES[kind]);
      state.original[kind] = deepClone(defaults[kind]);
      state.current[kind] = deepClone(defaults[kind]);
    }
  }

  // Overlay persisted mock store if in loopback ?mock=1 mode
  if (isMockMode) {
    try {
      const saved = window.sessionStorage.getItem(MOCK_STORE_KEY);
      if (saved) {
        const parsedMock = JSON.parse(saved);
        if (parsedMock && isPlainObject(parsedMock.data)) {
          for (const kind of DATA_KINDS) {
            if (parsedMock.data[kind]) {
              state.original[kind] = deepClone(parsedMock.data[kind]);
              state.current[kind] = deepClone(parsedMock.data[kind]);
            }
          }
        }
        if (Array.isArray(parsedMock.commitLog)) {
          state.commitLog = parsedMock.commitLog;
        }
      }
    } catch {
      // Ignore corrupt session mock data
    }
  }

  const els = {
    authStatus: document.getElementById("auth-status"),
    authDetail: document.getElementById("auth-detail"),
    tbcNotice: document.getElementById("tbc-notice"),
    lockNotice: document.getElementById("lock-notice"),
    lintSummary: document.getElementById("lint-summary"),
    btnSignIn: document.getElementById("btn-signin"),
    btnSignOut: document.getElementById("btn-signout"),
    btnMockReset: document.getElementById("btn-mock-reset"),
    btnQuickCommit: document.getElementById("btn-quick-commit"),
    quickCommitStatus: document.getElementById("quick-commit-status"),
    tabs: Array.from(document.querySelectorAll(".admin-tab")),
    tabCommit: document.getElementById("tab-commit"),
    editorMount: document.getElementById("editor-mount"),
  };

  function isEditingAllowed() {
    return state.auth.status === "authorized";
  }

  function getAllDiagnostics() {
    const schemaErrors = [];
    const lintErrors = [];
    for (const kind of DATA_KINDS) {
      const s = validateSchema(kind, state.current[kind]);
      if (!s.valid) schemaErrors.push(...s.errors);
      const l = lintPortfolioPayload(kind, state.current[kind]);
      if (!l.ok) lintErrors.push(...l.errors);
    }
    const msgLint = lintCommitMessage(state.commitMessage);
    if (!msgLint.ok) lintErrors.push(...msgLint.errors);
    return { schemaErrors, lintErrors, total: schemaErrors.length + lintErrors.length };
  }

  function getPendingOps() {
    return buildCommitOperations({
      original: state.original,
      current: state.current,
      stagedFiles: state.stagedFiles,
      deletedFiles: state.deletedFiles,
    });
  }

  function renderAuthPanel() {
    const oauth = state.current.site.oauth || {};
    const configComplete = Boolean(
      isNonEmptyString(oauth.clientId) && isNonEmptyString(oauth.proxyUrl),
    );
    const editable = isEditingAllowed();
    document.body.dataset.adminAuthenticated = editable ? "true" : "false";
    if (els.btnQuickCommit) {
      els.btnQuickCommit.disabled = !editable || getAllDiagnostics().total > 0;
    }

    els.tbcNotice.hidden = true;
    els.tbcNotice.textContent = "";
    els.lockNotice.hidden = true;
    els.lockNotice.textContent = "";
    els.lockNotice.classList.remove("admin-notice--denied");
    els.btnMockReset.hidden = !state.isMockMode;

    if (state.auth.status === "authorized") {
      els.authStatus.textContent = state.isMockMode
        ? `Mock Local Session: ${state.auth.login}`
        : `Authorized: ${state.auth.login}`;
      els.authDetail.textContent = state.auth.detail;
      els.btnSignIn.hidden = true;
      els.btnSignIn.disabled = true;
      els.btnSignOut.hidden = false;
      els.btnSignOut.disabled = false;
    } else if (state.auth.status === "denied") {
      els.authStatus.textContent = "Access Denied (403)";
      els.authDetail.textContent = state.auth.detail;
      els.btnSignIn.hidden = false;
      els.btnSignIn.disabled = !state.isMockMode && !configComplete;
      els.btnSignOut.hidden = true;
      els.lockNotice.hidden = false;
      els.lockNotice.classList.add("admin-notice--denied");
      els.lockNotice.textContent =
        "403 Access Denied: " + state.auth.detail + " All editing and committing controls are locked.";
    } else if (state.auth.status === "unconfigured") {
      els.authStatus.textContent = "OAuth Setup Pending [TBC]";
      els.authDetail.textContent = `Target repo: ${oauth.githubOwner || "AdrielVent"}/${oauth.githubRepo || "adriel-portfolio"} (${oauth.branch || "main"})`;
      els.btnSignIn.hidden = false;
      els.btnSignIn.disabled = true;
      els.btnSignOut.hidden = true;
      els.tbcNotice.hidden = false;
      els.tbcNotice.append(
        document.createTextNode(
          "[TBC] site.json oauth.clientId and/or oauth.proxyUrl are not configured yet. Follow ",
        ),
        el("a", { href: "../docs/ADMIN_OAUTH_SETUP.md", textContent: "docs/ADMIN_OAUTH_SETUP.md" }),
        document.createTextNode(" to register your GitHub OAuth App and deploy oauth-proxy/."),
      );
      els.lockNotice.hidden = false;
      els.lockNotice.textContent =
        "Editing and committing are locked until owner authorization completes.";
    } else {
      els.authStatus.textContent = state.isMockMode
        ? "Signed Out (Loopback Mock Adapter Ready)"
        : "Signed Out";
      els.authDetail.textContent =
        state.auth.detail ||
        `Owner gate requires GitHub login "${oauth.allowedLogin || "AdrielVent"}" with push/admin permission.`;
      els.btnSignIn.hidden = false;
      els.btnSignIn.disabled = !state.isMockMode && !configComplete;
      els.btnSignOut.hidden = true;
      els.lockNotice.hidden = false;
      els.lockNotice.textContent =
        "Sign in as the repository owner to unlock editing and GitHub commits.";
    }

    if (state.missingFiles.length > 0) {
      els.tbcNotice.hidden = false;
      if (els.tbcNotice.textContent) {
        els.tbcNotice.append(document.createElement("br"));
      }
      els.tbcNotice.append(
        document.createTextNode(
          `[TBC] Missing data file(s) not yet created on disk: ${state.missingFiles.join(", ")}. Using empty schema scaffold in memory.`,
        ),
      );
    }
  }

  function renderLintAndCounts() {
    const ops = getPendingOps();
    els.tabCommit.textContent = `Review Queue (${ops.length})`;

    const { schemaErrors, lintErrors, total } = getAllDiagnostics();
    if (els.btnQuickCommit) {
      els.btnQuickCommit.disabled = !isEditingAllowed() || total > 0;
    }
    els.lintSummary.replaceChildren();
    if (total === 0) {
      els.lintSummary.hidden = true;
      return;
    }

    els.lintSummary.hidden = false;
    els.lintSummary.tabIndex = -1;
    els.lintSummary.append(
      el("strong", {
        textContent: `Pre-save check blocked (${schemaErrors.length} schema, ${lintErrors.length} safety/truth lint):`,
      }),
    );
    const list = el("ul");
    for (const err of [...schemaErrors, ...lintErrors].slice(0, 12)) {
      list.append(
        el("li", {
          textContent: `${err.path}: ${err.message}${err.rule ? ` [${err.rule}]` : ""}`,
        }),
      );
    }
    if (total > 12) {
      list.append(el("li", { textContent: `...and ${total - 12} more diagnostic(s).` }));
    }
    els.lintSummary.append(list);
  }

  function updateStatusAndCommitControls() {
    renderLintAndCounts();
    if (state.activeTab === "commit") {
      renderCurrentTab();
    }
  }

  function makeField(labelText, control, fullWidth = false) {
    const fieldId = `f-${Math.random().toString(36).slice(2, 9)}`;
    control.id = fieldId;
    return el("div", { className: `admin-field${fullWidth ? " admin-field--full" : ""}` }, [
      el("label", { for: fieldId, textContent: labelText }),
      control,
    ]);
  }

  function makeInput(value, onInput, { readOnly = false, placeholder = "", type = "text" } = {}) {
    const editable = isEditingAllowed();
    return el("input", {
      type,
      className: "admin-input",
      value: value ?? "",
      placeholder,
      readOnly,
      disabled: !editable,
      onInput: (e) => {
        onInput(e.target.value);
        updateStatusAndCommitControls();
      },
    });
  }

  function makeTextarea(value, onInput, { placeholder = "" } = {}) {
    const editable = isEditingAllowed();
    const ta = el("textarea", {
      className: "admin-textarea",
      placeholder,
      disabled: !editable,
      onInput: (e) => {
        onInput(e.target.value);
        updateStatusAndCommitControls();
      },
    });
    ta.value = value ?? "";
    return ta;
  }

  function makeOrderButtons(arr, idx, onUpdate) {
    const editable = isEditingAllowed();
    return el("div", { className: "admin-row-actions" }, [
      el("button", {
        type: "button",
        className: "button",
        textContent: "Move up",
        disabled: !editable || idx === 0,
        onClick: () => {
          onUpdate(moveItem(arr, idx, "up"));
          renderAll();
        },
      }),
      el("button", {
        type: "button",
        className: "button",
        textContent: "Move down",
        disabled: !editable || idx === arr.length - 1,
        onClick: () => {
          onUpdate(moveItem(arr, idx, "down"));
          renderAll();
        },
      }),
      el("button", {
        type: "button",
        className: "button",
        textContent: "Delete",
        disabled: !editable,
        onClick: () => {
          const next = arr.filter((_, i) => i !== idx);
          onUpdate(normalizeOrders(next));
          renderAll();
        },
      }),
    ]);
  }

  function renderProjectsTab(mount) {
    const data = state.current.projects;
    const editable = isEditingAllowed();

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Projects" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add project",
          disabled: !editable,
          onClick: () => {
            data.projects.push({
              id: `project-${Date.now()}`,
              order: data.projects.length + 1,
              group: "mechanical",
              title: "New project",
              dates: "2026",
              context: "",
              summary: "",
              image: "",
              imageAlt: "",
              href: "",
              tags: [],
            });
            data.projects = normalizeOrders(data.projects);
            renderAll();
          },
        }),
      ]),
    );

    // Projects list (rendered first so reorder controls align with primary project entries)
    data.projects.forEach((proj, idx) => {
      const groupSelect = el(
        "select",
        {
          className: "admin-select",
          disabled: !editable,
          onChange: (e) => {
            proj.group = e.target.value;
            updateStatusAndCommitControls();
          },
        },
        ["thermal", "mechanical", "software"].map((opt) =>
          el("option", {
            value: opt,
            textContent: opt,
            selected: proj.group === opt ? "selected" : null,
          }),
        ),
      );
      groupSelect.value = proj.group || "mechanical";

      mount.append(
        el("div", { className: "admin-block", "data-item-id": proj.id }, [
          el("div", { className: "admin-block-head" }, [
            el("h3", {
              className: "admin-block-title",
              textContent: `#${proj.order} — ${proj.title || proj.id}`,
            }),
            makeOrderButtons(data.projects, idx, (next) => {
              data.projects = next;
            }),
          ]),
          el("div", { className: "admin-grid" }, [
            makeField("ID", makeInput(proj.id, (v) => (proj.id = v))),
            makeField("Order", makeInput(String(proj.order), () => {}, { readOnly: true })),
            makeField("Title", makeInput(proj.title, (v) => (proj.title = v))),
            makeField("Group", groupSelect),
            makeField("Dates", makeInput(proj.dates, (v) => (proj.dates = v))),
            makeField("Context", makeInput(proj.context, (v) => (proj.context = v))),
            makeField("Case Study / Link (href)", makeInput(proj.href, (v) => (proj.href = v))),
            makeField(
              "Tags (comma-separated)",
              makeInput((proj.tags || []).join(", "), (v) => {
                proj.tags = v
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean);
              }),
            ),
            makeField("Image Path", makeInput(proj.image, (v) => (proj.image = v))),
            makeField("Image Alt", makeInput(proj.imageAlt ?? "", (v) => (proj.imageAlt = v.trim() ? v : ""))),
            makeField("Summary", makeTextarea(proj.summary, (v) => (proj.summary = v)), true),
          ]),
        ]),
      );
    });

    // Featured project block
    const f = data.featured;
    const featBlock = el("div", { className: "admin-block" }, [
      el("div", { className: "admin-block-head" }, [
        el("h3", { className: "admin-block-title", textContent: "Featured Project" }),
      ]),
      el("div", { className: "admin-grid" }, [
        makeField("ID", makeInput(f.id, (v) => (f.id = v))),
        makeField("Eyebrow", makeInput(f.eyebrow, (v) => (f.eyebrow = v))),
        makeField("Title", makeInput(f.title, (v) => (f.title = v)), true),
        makeField("Case Study Link (href)", makeInput(f.href, (v) => (f.href = v))),
        makeField("Linked Model ID (modelId)", makeInput(f.modelId, (v) => (f.modelId = v))),
        makeField("Summary", makeTextarea(f.summary, (v) => (f.summary = v)), true),
      ]),
    ]);

    const metricsWrap = el("div", { className: "admin-sublist" }, [
      el("div", { className: "admin-sublist-head" }, [
        el("h4", { textContent: "Featured Metrics" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add metric",
          disabled: !editable,
          onClick: () => {
            f.metrics.push({ label: "", value: "" });
            renderAll();
          },
        }),
      ]),
    ]);

    (f.metrics || []).forEach((m, mIdx) => {
      if (isPlainObject(m)) {
        metricsWrap.append(
          el("div", { className: "admin-subrow" }, [
            makeInput(m.label, (v) => (m.label = v), { placeholder: "Label" }),
            makeInput(m.value, (v) => (m.value = v), { placeholder: "Value" }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Remove",
              disabled: !editable,
              onClick: () => {
                f.metrics.splice(mIdx, 1);
                renderAll();
              },
            }),
          ]),
        );
      } else {
        metricsWrap.append(
          el("div", { className: "admin-subrow admin-subrow--single" }, [
            makeInput(String(m), (v) => (f.metrics[mIdx] = v), { placeholder: "Metric" }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Remove",
              disabled: !editable,
              onClick: () => {
                f.metrics.splice(mIdx, 1);
                renderAll();
              },
            }),
          ]),
        );
      }
    });
    featBlock.append(metricsWrap);
    mount.append(featBlock);
  }

  function renderModelsTab(mount) {
    const data = state.current.models;
    const editable = isEditingAllowed();

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "3D Models" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add model entry",
          disabled: !editable,
          onClick: () => {
            data.models.push({
              id: `model-${Date.now()}`,
              order: data.models.length + 1,
              title: "New 3D model",
              category: "Mechanical Design",
              file: "assets/models/new-model.glb",
              format: "glb",
              date: "2026",
              summary: "Engineering 3D model entry.",
              specs: [{ label: "Format", value: "GLB" }],
              caseStudyHref: null,
              sourceNote: "",
            });
            data.models = normalizeOrders(data.models);
            renderAll();
          },
        }),
      ]),
    );

    // .glb / .stl upload & Chunk 0 inspection box
    const fileInput = el("input", {
      type: "file",
      id: "model-file-input",
      accept: ".glb,.stl",
      className: "admin-file-input",
      disabled: !editable,
      onChange: async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const buf = await file.arrayBuffer();
        const report = inspectGlbArrayBuffer(file.name, buf);
        state.lastUploadReport = {
          filename: file.name,
          byteLength: buf.byteLength,
          ...report,
        };
        if (report.ok) {
          const targetPath = `assets/models/${file.name}`;
          state.stagedFiles.set(targetPath, new Uint8Array(buf));
          state.deletedFiles.delete(targetPath);
          const alreadyLinked = data.models.some((m) => m.file === targetPath);
          if (!alreadyLinked) {
            const baseId = file.name.replace(/\.(glb|stl)$/i, "");
            data.models.push({
              id: baseId,
              order: data.models.length + 1,
              title: baseId
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
              category: "Mechanical Design",
              file: targetPath,
              format: report.format,
              date: "2026",
              summary: "Sanitized 3D CAD model uploaded via /admin/.",
              specs: [{ label: "Format", value: report.format.toUpperCase() }],
              caseStudyHref: null,
              sourceNote: "Uploaded via /admin/",
            });
            data.models = normalizeOrders(data.models);
          }
        }
        renderAll();
      },
    });

    const uploadBox = el("div", { className: "admin-upload-box" }, [
      el("h3", { textContent: "Upload & Inspect .glb / .stl Model" }),
      el("p", {
        className: "meta",
        textContent:
          "Enforces lowercase kebab-case slug, glTF 2.0 header (0x46546c67) + Chunk 0 JSON (0x4e4f534a), and zero internal part codes, SKUs, fastener sizes, EMI refs, initials, or rough CAD names.",
      }),
      makeField("Select .glb or .stl file", fileInput, true),
    ]);

    if (state.lastUploadReport) {
      const rep = state.lastUploadReport;
      const diag = el("div", { className: "admin-diagnostics", id: "glb-upload-report" });
      if (rep.ok) {
        diag.append(
          el("strong", {
            textContent: `Staged "${rep.filename}" (${rep.byteLength} bytes, ${rep.format.toUpperCase()}): Chunk 0 / header clean.`,
          }),
        );
      } else {
        diag.append(
          el("strong", {
            textContent: `Rejected "${rep.filename}": ${rep.errors.length} error(s) found.`,
          }),
        );
        const errList = el("ul");
        for (const err of rep.errors) {
          errList.append(el("li", { textContent: `${err.path}: ${err.message} [${err.rule}]` }));
        }
        diag.append(errList);
      }
      if (rep.chunkNames.length > 0) {
        diag.append(
          el("p", {
            className: "meta",
            textContent: `Inspected ${rep.chunkNames.length} embedded metadata string(s): ${rep.chunkNames
              .slice(0, 8)
              .map((c) => `${c.path}="${c.value}"`)
              .join("; ")}`,
          }),
        );
      }
      uploadBox.append(diag);
    }

    if (state.stagedFiles.size > 0) {
      uploadBox.append(
        el("p", {
          className: "meta",
          textContent: `Staged binary upload(s): ${Array.from(state.stagedFiles.keys()).join(", ")}`,
        }),
      );
    }

    const activeModelFiles = new Set(data.models.map((m) => m.file).filter(Boolean));
    for (const origModel of state.original.models?.models || []) {
      if (
        origModel?.file &&
        origModel.file.startsWith("assets/models/") &&
        !activeModelFiles.has(origModel.file) &&
        !state.stagedFiles.has(origModel.file)
      ) {
        state.orphanCandidateFiles.add(origModel.file);
      }
    }
    for (const cand of Array.from(state.orphanCandidateFiles)) {
      if (activeModelFiles.has(cand) || state.stagedFiles.has(cand)) {
        state.orphanCandidateFiles.delete(cand);
        state.deletedFiles.delete(cand);
      }
    }

    if (state.orphanCandidateFiles.size > 0) {
      const cleanupWrap = el("div", { className: "admin-sublist", id: "orphan-file-cleanup" }, [
        el("div", { className: "admin-sublist-head" }, [
          el("h4", { textContent: "Delete orphaned file(s) from assets/models/ on commit" }),
        ]),
      ]);
      for (const orphanPath of state.orphanCandidateFiles) {
        cleanupWrap.append(
          el("label", { className: "admin-check-label" }, [
            el("input", {
              type: "checkbox",
              checked: state.deletedFiles.has(orphanPath),
              disabled: !editable,
              onChange: (e) => {
                if (e.target.checked) {
                  state.deletedFiles.add(orphanPath);
                } else {
                  state.deletedFiles.delete(orphanPath);
                }
                updateStatusAndCommitControls();
              },
            }),
            document.createTextNode(`Delete orphaned file ${orphanPath} from assets/models/ on commit`),
          ]),
        );
      }
      uploadBox.append(cleanupWrap);
    }

    mount.append(uploadBox);

    data.models.forEach((model, idx) => {
      const formatSelect = el(
        "select",
        {
          className: "admin-select",
          disabled: !editable,
          onChange: (e) => {
            model.format = e.target.value;
            updateStatusAndCommitControls();
          },
        },
        ["glb", "stl", "gltf"].map((fmt) =>
          el("option", {
            value: fmt,
            textContent: fmt,
            selected: model.format === fmt ? "selected" : null,
          }),
        ),
      );
      formatSelect.value = model.format || "glb";

      const deleteBtn = el("button", {
        type: "button",
        className: "button",
        textContent: "Delete",
        disabled: !editable,
        onClick: () => {
          const removedFile = model.file;
          data.models.splice(idx, 1);
          data.models = normalizeOrders(data.models);
          if (removedFile && state.stagedFiles.has(removedFile)) {
            state.stagedFiles.delete(removedFile);
          } else if (
            removedFile &&
            removedFile.startsWith("assets/models/") &&
            !data.models.some((m) => m.file === removedFile)
          ) {
            state.orphanCandidateFiles.add(removedFile);
          }
          renderAll();
        },
      });

      const block = el("div", { className: "admin-block", "data-item-id": model.id }, [
        el("div", { className: "admin-block-head" }, [
          el("h3", {
            className: "admin-block-title",
            textContent: `#${model.order} — ${model.title || model.id}`,
          }),
          el("div", { className: "admin-row-actions" }, [
            el("button", {
              type: "button",
              className: "button",
              textContent: "Move up",
              disabled: !editable || idx === 0,
              onClick: () => {
                data.models = moveItem(data.models, idx, "up");
                renderAll();
              },
            }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Move down",
              disabled: !editable || idx === data.models.length - 1,
              onClick: () => {
                data.models = moveItem(data.models, idx, "down");
                renderAll();
              },
            }),
            deleteBtn,
          ]),
        ]),
        el("div", { className: "admin-grid" }, [
          makeField("ID", makeInput(model.id, (v) => (model.id = v))),
          makeField("Order", makeInput(String(model.order), () => {}, { readOnly: true })),
          makeField("Title", makeInput(model.title, (v) => (model.title = v))),
          makeField("Category", makeInput(model.category, (v) => (model.category = v))),
          makeField("File Path", makeInput(model.file, (v) => (model.file = v))),
          makeField("Format", formatSelect),
          makeField("Date", makeInput(model.date, (v) => (model.date = v))),
          makeField(
            "Case Study Link",
            makeInput(model.caseStudyHref ?? "", (v) => {
              const trimmed = v.trim();
              model.caseStudyHref = trimmed ? trimmed : null;
            }),
          ),
          makeField("Source Note", makeInput(model.sourceNote, (v) => (model.sourceNote = v)), true),
          makeField("Summary", makeTextarea(model.summary, (v) => (model.summary = v)), true),
        ]),
      ]);

      const specsWrap = el("div", { className: "admin-sublist" }, [
        el("div", { className: "admin-sublist-head" }, [
          el("h4", { textContent: "Model Specs" }),
          el("button", {
            type: "button",
            className: "button",
            textContent: "Add spec",
            disabled: !editable,
            onClick: () => {
              model.specs.push({ label: "", value: "" });
              renderAll();
            },
          }),
        ]),
      ]);

      (model.specs || []).forEach((spec, sIdx) => {
        specsWrap.append(
          el("div", { className: "admin-subrow" }, [
            makeInput(spec.label, (v) => (spec.label = v), { placeholder: "Label" }),
            makeInput(spec.value, (v) => (spec.value = v), { placeholder: "Value" }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Remove",
              disabled: !editable,
              onClick: () => {
                model.specs.splice(sIdx, 1);
                renderAll();
              },
            }),
          ]),
        );
      });
      block.append(specsWrap);
      mount.append(block);
    });
  }

  function renderExperienceTab(mount) {
    const data = state.current.experience;
    const editable = isEditingAllowed();

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Experience & Leadership" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add experience",
          disabled: !editable,
          onClick: () => {
            data.experience.push({
              id: `exp-${Date.now()}`,
              order: data.experience.length + 1,
              org: "Organization",
              role: "Role",
              location: "Location",
              dates: "2026",
              bullets: ["Key contribution"],
            });
            data.experience = normalizeOrders(data.experience);
            renderAll();
          },
        }),
      ]),
    );

    data.experience.forEach((exp, idx) => {
      const block = el("div", { className: "admin-block", "data-item-id": exp.id }, [
        el("div", { className: "admin-block-head" }, [
          el("h3", {
            className: "admin-block-title",
            textContent: `#${exp.order} — ${exp.org} (${exp.role})`,
          }),
          makeOrderButtons(data.experience, idx, (next) => {
            data.experience = next;
          }),
        ]),
        el("div", { className: "admin-grid" }, [
          makeField("ID", makeInput(exp.id, (v) => (exp.id = v))),
          makeField("Order", makeInput(String(exp.order), () => {}, { readOnly: true })),
          makeField("Organization", makeInput(exp.org, (v) => (exp.org = v))),
          makeField("Role", makeInput(exp.role, (v) => (exp.role = v))),
          makeField("Location", makeInput(exp.location, (v) => (exp.location = v))),
          makeField("Dates", makeInput(exp.dates, (v) => (exp.dates = v))),
        ]),
      ]);

      const bulletsWrap = el("div", { className: "admin-sublist" }, [
        el("div", { className: "admin-sublist-head" }, [
          el("h4", { textContent: "Bullets" }),
          el("button", {
            type: "button",
            className: "button",
            textContent: "Add bullet",
            disabled: !editable,
            onClick: () => {
              exp.bullets.push("");
              renderAll();
            },
          }),
        ]),
      ]);
      (exp.bullets || []).forEach((b, bIdx) => {
        bulletsWrap.append(
          el("div", { className: "admin-subrow admin-subrow--single" }, [
            makeInput(b, (v) => (exp.bullets[bIdx] = v), { placeholder: "Bullet point" }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Remove",
              disabled: !editable,
              onClick: () => {
                exp.bullets.splice(bIdx, 1);
                renderAll();
              },
            }),
          ]),
        );
      });
      block.append(bulletsWrap);
      mount.append(block);
    });

    // Leadership section
    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Leadership" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add leadership",
          disabled: !editable,
          onClick: () => {
            data.leadership.push({
              id: `lead-${Date.now()}`,
              order: data.leadership.length + 1,
              org: "Organization",
              role: "Role",
              dates: "2026",
              bullets: ["Key contribution"],
            });
            data.leadership = normalizeOrders(data.leadership);
            renderAll();
          },
        }),
      ]),
    );

    data.leadership.forEach((lead, idx) => {
      const block = el("div", { className: "admin-block", "data-item-id": lead.id }, [
        el("div", { className: "admin-block-head" }, [
          el("h3", {
            className: "admin-block-title",
            textContent: `#${lead.order} — ${lead.org} (${lead.role})`,
          }),
          makeOrderButtons(data.leadership, idx, (next) => {
            data.leadership = next;
          }),
        ]),
        el("div", { className: "admin-grid" }, [
          makeField("ID", makeInput(lead.id, (v) => (lead.id = v))),
          makeField("Order", makeInput(String(lead.order), () => {}, { readOnly: true })),
          makeField("Organization", makeInput(lead.org, (v) => (lead.org = v))),
          makeField("Role", makeInput(lead.role, (v) => (lead.role = v))),
          makeField("Dates", makeInput(lead.dates, (v) => (lead.dates = v)), true),
        ]),
      ]);

      const bulletsWrap = el("div", { className: "admin-sublist" }, [
        el("div", { className: "admin-sublist-head" }, [
          el("h4", { textContent: "Bullets" }),
          el("button", {
            type: "button",
            className: "button",
            textContent: "Add bullet",
            disabled: !editable,
            onClick: () => {
              lead.bullets.push("");
              renderAll();
            },
          }),
        ]),
      ]);
      (lead.bullets || []).forEach((b, bIdx) => {
        bulletsWrap.append(
          el("div", { className: "admin-subrow admin-subrow--single" }, [
            makeInput(b, (v) => (lead.bullets[bIdx] = v), { placeholder: "Bullet point" }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Remove",
              disabled: !editable,
              onClick: () => {
                lead.bullets.splice(bIdx, 1);
                renderAll();
              },
            }),
          ]),
        );
      });
      block.append(bulletsWrap);
      mount.append(block);
    });

    // Education & Honors
    const edu = data.education;
    const eduBlock = el("div", { className: "admin-block" }, [
      el("div", { className: "admin-block-head" }, [
        el("h3", { className: "admin-block-title", textContent: "Education & Honors" }),
      ]),
      el("div", { className: "admin-grid" }, [
        makeField("School", makeInput(edu.school, (v) => (edu.school = v))),
        makeField("Expected Graduation", makeInput(edu.expected, (v) => (edu.expected = v))),
        makeField("Degree", makeInput(edu.degree, (v) => (edu.degree = v)), true),
      ]),
    ]);

    const honorsWrap = el("div", { className: "admin-sublist" }, [
      el("div", { className: "admin-sublist-head" }, [
        el("h4", { textContent: "Honors & Certifications" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add honor",
          disabled: !editable,
          onClick: () => {
            edu.honors.push("");
            renderAll();
          },
        }),
      ]),
    ]);
    (edu.honors || []).forEach((h, hIdx) => {
      honorsWrap.append(
        el("div", { className: "admin-subrow admin-subrow--single" }, [
          makeInput(h, (v) => (edu.honors[hIdx] = v), { placeholder: "Honor or certification" }),
          el("button", {
            type: "button",
            className: "button",
            textContent: "Remove",
            disabled: !editable,
            onClick: () => {
              edu.honors.splice(hIdx, 1);
              renderAll();
            },
          }),
        ]),
      );
    });
    eduBlock.append(honorsWrap);
    mount.append(eduBlock);
  }

  function renderPressTab(mount) {
    const data = state.current.press;
    const editable = isEditingAllowed();

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Press & Articles" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add press item",
          disabled: !editable,
          onClick: () => {
            data.items.push({
              id: `press-${Date.now()}`,
              order: data.items.length + 1,
              date: "2026",
              title: "New press item",
              org: "Publication",
              summary: "Summary of coverage.",
              href: "",
            });
            data.items = normalizeOrders(data.items);
            renderAll();
          },
        }),
      ]),
    );

    data.items.forEach((item, idx) => {
      mount.append(
        el("div", { className: "admin-block", "data-item-id": item.id }, [
          el("div", { className: "admin-block-head" }, [
            el("h3", {
              className: "admin-block-title",
              textContent: `#${item.order} — ${item.title || item.id}`,
            }),
            makeOrderButtons(data.items, idx, (next) => {
              data.items = next;
            }),
          ]),
          el("div", { className: "admin-grid" }, [
            makeField("ID", makeInput(item.id, (v) => (item.id = v))),
            makeField("Order", makeInput(String(item.order), () => {}, { readOnly: true, type: "number" })),
            makeField("Organization", makeInput(item.org, (v) => (item.org = v))),
            makeField("Date", makeInput(item.date, (v) => (item.date = v))),
            makeField("Link (href)", makeInput(item.href, (v) => (item.href = v), { type: "url" }), true),
            makeField("Title", makeInput(item.title, (v) => (item.title = v)), true),
            makeField("Summary", makeTextarea(item.summary, (v) => (item.summary = v)), true),
          ]),
        ]),
      );
    });
  }

  function renderSiteTab(mount) {
    const site = state.current.site;
    const editable = isEditingAllowed();

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Site, Links & OAuth Config" }),
      ]),
    );

    // Owner & Resume
    mount.append(
      el("div", { className: "admin-block" }, [
        el("div", { className: "admin-block-head" }, [
          el("h3", { className: "admin-block-title", textContent: "Owner & Resume" }),
        ]),
        el("div", { className: "admin-grid" }, [
          makeField("Name", makeInput(site.owner.name, (v) => (site.owner.name = v))),
          makeField("Location", makeInput(site.owner.location, (v) => (site.owner.location = v))),
          makeField("Citizenship", makeInput(site.owner.citizenship, (v) => (site.owner.citizenship = v))),
          makeField("Availability", makeInput(site.owner.availability, (v) => (site.owner.availability = v))),
          makeField("Resume PDF Path", makeInput(site.resume.pdf, (v) => (site.resume.pdf = v))),
          makeField("Resume Updated", makeInput(site.resume.updated, (v) => (site.resume.updated = v))),
          makeField("Bio", makeTextarea(site.owner.bio, (v) => (site.owner.bio = v)), true),
        ]),
      ]),
    );

    // Contacts
    const contactsBlock = el("div", { className: "admin-block" }, [
      el("div", { className: "admin-block-head" }, [
        el("h3", { className: "admin-block-title", textContent: "Contacts" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add contact",
          disabled: !editable,
          onClick: () => {
            site.contacts.push({ label: "Link", value: "Display", href: "https://" });
            renderAll();
          },
        }),
      ]),
    ]);
    site.contacts.forEach((c, idx) => {
      contactsBlock.append(
        el("div", { className: "admin-block" }, [
          el("div", { className: "admin-block-head" }, [
            el("span", { className: "meta", textContent: `Contact #${idx + 1}` }),
            el("div", { className: "admin-row-actions" }, [
              el("button", {
                type: "button",
                className: "button",
                textContent: "Move up",
                disabled: !editable || idx === 0,
                onClick: () => {
                  const [m] = site.contacts.splice(idx, 1);
                  site.contacts.splice(idx - 1, 0, m);
                  renderAll();
                },
              }),
              el("button", {
                type: "button",
                className: "button",
                textContent: "Move down",
                disabled: !editable || idx === site.contacts.length - 1,
                onClick: () => {
                  const [m] = site.contacts.splice(idx, 1);
                  site.contacts.splice(idx + 1, 0, m);
                  renderAll();
                },
              }),
              el("button", {
                type: "button",
                className: "button",
                textContent: "Delete",
                disabled: !editable,
                onClick: () => {
                  site.contacts.splice(idx, 1);
                  renderAll();
                },
              }),
            ]),
          ]),
          el("div", { className: "admin-grid" }, [
            makeField("Label", makeInput(c.label, (v) => (c.label = v))),
            makeField("Display Value", makeInput(c.value, (v) => (c.value = v))),
            makeField("URL / mailto (href)", makeInput(c.href, (v) => (c.href = v)), true),
          ]),
        ]),
      );
    });
    mount.append(contactsBlock);

    // Nav
    const navBlock = el("div", { className: "admin-block" }, [
      el("div", { className: "admin-block-head" }, [
        el("h3", { className: "admin-block-title", textContent: "Primary Navigation" }),
        el("button", {
          type: "button",
          className: "button",
          textContent: "Add nav link",
          disabled: !editable,
          onClick: () => {
            site.nav.push({ label: "New", href: "index.html" });
            renderAll();
          },
        }),
      ]),
    ]);
    site.nav.forEach((n, idx) => {
      navBlock.append(
        el("div", { className: "admin-subrow" }, [
          makeInput(n.label, (v) => (n.label = v), { placeholder: "Label" }),
          makeInput(n.href, (v) => (n.href = v), { placeholder: "href" }),
          el("div", { className: "admin-row-actions" }, [
            el("button", {
              type: "button",
              className: "button",
              textContent: "Move up",
              disabled: !editable || idx === 0,
              onClick: () => {
                const [m] = site.nav.splice(idx, 1);
                site.nav.splice(idx - 1, 0, m);
                renderAll();
              },
            }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Move down",
              disabled: !editable || idx === site.nav.length - 1,
              onClick: () => {
                const [m] = site.nav.splice(idx, 1);
                site.nav.splice(idx + 1, 0, m);
                renderAll();
              },
            }),
            el("button", {
              type: "button",
              className: "button",
              textContent: "Delete",
              disabled: !editable,
              onClick: () => {
                site.nav.splice(idx, 1);
                renderAll();
              },
            }),
          ]),
        ]),
      );
    });
    mount.append(navBlock);

    // OAuth config
    mount.append(
      el("div", { className: "admin-block" }, [
        el("div", { className: "admin-block-head" }, [
          el("h3", { className: "admin-block-title", textContent: "OAuth & Repository Target" }),
        ]),
        el("div", { className: "admin-grid" }, [
          makeField("GitHub Owner", makeInput(site.oauth.githubOwner, (v) => (site.oauth.githubOwner = v))),
          makeField("GitHub Repo", makeInput(site.oauth.githubRepo, (v) => (site.oauth.githubRepo = v))),
          makeField("Branch", makeInput(site.oauth.branch, (v) => (site.oauth.branch = v))),
          makeField("Allowed Login", makeInput(site.oauth.allowedLogin, (v) => (site.oauth.allowedLogin = v))),
          makeField("OAuth Client ID", makeInput(site.oauth.clientId, (v) => (site.oauth.clientId = v))),
          makeField("OAuth Proxy URL", makeInput(site.oauth.proxyUrl, (v) => (site.oauth.proxyUrl = v))),
        ]),
      ]),
    );
  }

  function renderCommitTab(mount) {
    const ops = getPendingOps();
    const diag = getAllDiagnostics();
    const editable = isEditingAllowed();
    const canCommit = editable && ops.length > 0 && diag.total === 0;

    mount.append(
      el("div", { className: "admin-section-bar" }, [
        el("h2", { textContent: "Review Queue & Serial Commit" }),
      ]),
    );

    const queueBox = el("div", { className: "admin-block" }, [
      el("h3", { className: "admin-block-title", textContent: `Pending Operations (${ops.length})` }),
    ]);

    if (ops.length === 0) {
      queueBox.append(el("p", { className: "meta", textContent: "No pending edits or staged uploads." }));
    } else {
      const list = el("ul");
      ops.forEach((op, idx) => {
        list.append(
          el("li", {
            textContent: `${idx + 1}. ${op.action.toUpperCase()} (${op.kind}) -> ${op.path}`,
          }),
        );
      });
      queueBox.append(list);
    }

    const commitMessageInput = makeInput(
      state.commitMessage || "chore(portfolio): update site content via /admin",
      (v) => {
        state.commitMessage = v;
      },
    );
    queueBox.append(makeField("Commit message", commitMessageInput, true));

    const commitBtn = el("button", {
      type: "button",
      className: "button",
      id: "btn-commit",
      textContent: state.isMockMode
        ? "Commit changes (Mock Serial API)"
        : "Commit changes to GitHub",
      disabled: !canCommit,
      onClick: async () => {
        commitBtn.disabled = true;
        await executeCommit(commitMessageInput.value.trim() || "chore(portfolio): update via /admin", {
          allowActiveTabFallback: false,
        });
      },
    });

    const snapshotBtn = el("button", {
      type: "button",
      className: "button",
      id: "btn-snapshot",
      textContent: "Download JSON snapshot",
      onClick: () => {
        const snapshot = {
          generatedAt: new Date().toISOString(),
          files: Object.fromEntries(DATA_KINDS.map((k) => [DATA_FILES[k], state.current[k]])),
        };
        const blob = new Blob([JSON.stringify(snapshot, null, 2) + "\n"], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = el("a", { href: url, download: "portfolio-snapshot.json" });
        document.body.append(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      },
    });

    queueBox.append(el("div", { className: "admin-actions-bar" }, [commitBtn, snapshotBtn]));
    mount.append(queueBox);

    if (state.commitLog.length > 0) {
      const logBox = el("div", { className: "admin-block" }, [
        el("h3", { className: "admin-block-title", textContent: "Serial Commit Log" }),
      ]);
      const ol = el("ol", { className: "admin-log", id: "commit-log" });
      for (const entry of state.commitLog) {
        ol.append(el("li", { textContent: entry }));
      }
      logBox.append(ol);
      mount.append(logBox);
    }
  }

  function renderCurrentTab() {
    const mount = els.editorMount;
    mount.replaceChildren();
    mount.setAttribute("aria-labelledby", `tab-${state.activeTab}`);

    if (state.activeTab === "projects") renderProjectsTab(mount);
    else if (state.activeTab === "models") renderModelsTab(mount);
    else if (state.activeTab === "experience") renderExperienceTab(mount);
    else if (state.activeTab === "press") renderPressTab(mount);
    else if (state.activeTab === "site") renderSiteTab(mount);
    else if (state.activeTab === "commit") renderCommitTab(mount);
  }

  function renderAll() {
    for (const tab of els.tabs) {
      const selected = tab.dataset.tab === state.activeTab;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
    }
    renderAuthPanel();
    renderLintAndCounts();
    renderCurrentTab();
  }

  async function executeCommit(commitMessage, { allowActiveTabFallback = false } = {}) {
    if (!isEditingAllowed()) return;
    const diag = getAllDiagnostics();
    if (diag.total > 0) {
      renderLintAndCounts();
      if (state.activeTab === "commit") {
        renderCurrentTab();
      }
      if (els.quickCommitStatus) {
        els.quickCommitStatus.textContent = `Blocked: ${diag.total} diagnostic(s).`;
      }
      if (els.lintSummary && !els.lintSummary.hidden) {
        els.lintSummary.focus({ preventScroll: false });
      }
      return;
    }

    let ops = getPendingOps();
    if (ops.length === 0 && allowActiveTabFallback && DATA_KINDS.includes(state.activeTab)) {
      const activeKind = state.activeTab;
      const nextStr = JSON.stringify(state.current[activeKind], null, 2) + "\n";
      ops = [
        {
          action: "upsert",
          path: DATA_FILES[activeKind],
          kind: "json",
          dataKind: activeKind,
          contentBase64: encodeUtf8Base64(nextStr),
          allowMissingSha: true,
        },
      ];
    }
    if (ops.length === 0) {
      if (els.quickCommitStatus) {
        els.quickCommitStatus.textContent = "No pending edits to commit.";
      }
      return;
    }

    const oauth = state.current.site.oauth;
    const branch = oauth.branch || "main";

    try {
      let transport;
      if (state.isMockMode) {
        transport = {
          async getFileSha(path) {
            return { sha: `mock-sha-${path.replace(/[^a-z0-9]/gi, "-")}` };
          },
          async putFile(path) {
            return { commit: { sha: `mock-commit-${Date.now().toString(16)}` } };
          },
          async deleteFile(path) {
            return { commit: { sha: `mock-delete-${Date.now().toString(16)}` } };
          },
        };
      } else {
        const token = state.auth.token;
        const headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2026-03-10",
          "Content-Type": "application/json",
        };
        const baseApi = `https://api.github.com/repos/${encodeURIComponent(oauth.githubOwner)}/${encodeURIComponent(oauth.githubRepo)}/contents`;

        transport = {
          async getFileSha(path) {
            const url = `${baseApi}/${path.split("/").map(encodeURIComponent).join("/")}?ref=${encodeURIComponent(branch)}`;
            const res = await fetch(url, { headers, cache: "no-store" });
            if (res.status === 404) return null;
            if (!res.ok) {
              throw new Error(`GET ${path} failed (${res.status})`);
            }
            return res.json();
          },
          async putFile(path, contentBase64, sha) {
            const url = `${baseApi}/${path.split("/").map(encodeURIComponent).join("/")}`;
            const payload = { message: commitMessage, content: contentBase64, branch };
            if (sha) payload.sha = sha;
            const res = await fetch(url, {
              method: "PUT",
              headers,
              body: JSON.stringify(payload),
            });
            if (!res.ok) {
              const errBody = await res.text();
              throw new Error(`PUT ${path} failed (${res.status}): ${errBody.slice(0, 200)}`);
            }
            return res.json();
          },
          async deleteFile(path, sha) {
            const url = `${baseApi}/${path.split("/").map(encodeURIComponent).join("/")}`;
            const res = await fetch(url, {
              method: "DELETE",
              headers,
              body: JSON.stringify({ message: commitMessage, sha, branch }),
            });
            if (!res.ok) {
              const errBody = await res.text();
              throw new Error(`DELETE ${path} failed (${res.status}): ${errBody.slice(0, 200)}`);
            }
            return res.json();
          },
        };
      }

      const { trace } = await commitOperationsSerially(ops, transport);
      for (const t of trace) {
        state.commitLog.push(
          `${new Date().toISOString()} | ${t.step} ${t.path}${t.sha ? ` (sha=${t.sha})` : ""}${t.commitSha ? ` -> commit ${t.commitSha}` : ""}`,
        );
      }
      for (const kind of DATA_KINDS) {
        state.original[kind] = deepClone(state.current[kind]);
      }
      state.stagedFiles.clear();
      state.deletedFiles.clear();
      state.orphanCandidateFiles.clear();

      if (state.isMockMode) {
        window.sessionStorage.setItem(
          MOCK_STORE_KEY,
          JSON.stringify({ data: state.current, commitLog: state.commitLog }),
        );
      }
      if (els.quickCommitStatus) {
        els.quickCommitStatus.textContent = `Committed ${ops.length} file(s).`;
      }
    } catch (err) {
      state.commitLog.push(`${new Date().toISOString()} | ERROR: ${err.message}`);
      if (els.quickCommitStatus) {
        els.quickCommitStatus.textContent = `Commit error: ${err.message}`;
      }
    }

    renderAll();
  }

  async function verifyGitHubAccess(token) {
    const oauth = state.current.site.oauth || {};
    const owner = oauth.githubOwner || "AdrielVent";
    const repo = oauth.githubRepo || "adriel-portfolio";
    const allowedLogin = oauth.allowedLogin || owner;

    let user;
    let repoMeta;

    if (state.isMockMode) {
      if (state.mockRole === "nonowner") {
        user = { login: "unauthorized-visitor" };
        repoMeta = { permissions: { pull: true, push: false, admin: false } };
      } else {
        user = { login: allowedLogin };
        repoMeta = { permissions: { pull: true, push: true, admin: true } };
      }
    } else {
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2026-03-10",
      };
      const [userRes, repoRes] = await Promise.all([
        fetch("https://api.github.com/user", { headers, cache: "no-store" }),
        fetch(
          `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
          { headers, cache: "no-store" },
        ),
      ]);
      if (!userRes.ok || !repoRes.ok) {
        window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
        state.auth = {
          status: "denied",
          login: null,
          token: null,
          detail: `GitHub verification returned HTTP ${userRes.status}/${repoRes.status}. Token purged.`,
        };
        renderAll();
        return;
      }
      user = await userRes.json();
      repoMeta = await repoRes.json();
    }

    const canPush = Boolean(repoMeta?.permissions?.push || repoMeta?.permissions?.admin);
    if (user?.login === allowedLogin && canPush) {
      state.auth = {
        status: "authorized",
        login: user.login,
        token,
        detail: `Verified push/admin permission on ${owner}/${repo}.`,
      };
    } else {
      window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
      state.auth = {
        status: "denied",
        login: user?.login || null,
        token: null,
        detail: `Authenticated user "${user?.login || "unknown"}" does not match allowedLogin "${allowedLogin}" or lacks push/admin permission on ${owner}/${repo}.`,
      };
    }
    renderAll();
  }

  async function initAuth() {
    const oauth = state.current.site.oauth || {};
    const configComplete = Boolean(
      isNonEmptyString(oauth.clientId) && isNonEmptyString(oauth.proxyUrl),
    );

    if (state.isMockMode) {
      if (state.mockRole === "nonowner") {
        await verifyGitHubAccess("mock-nonowner-token");
        return;
      }
      const mockAutoDisabled = params.get("mockAuto") === "0";
      const signedOutInSession = window.sessionStorage.getItem(MOCK_SIGNED_OUT_KEY) === "1";
      const existingMockToken = window.sessionStorage.getItem(OAUTH_TOKEN_KEY);
      if (existingMockToken || (!mockAutoDisabled && !signedOutInSession)) {
        const tok = existingMockToken || "mock-owner-token";
        window.sessionStorage.setItem(OAUTH_TOKEN_KEY, tok);
        await verifyGitHubAccess(tok);
        return;
      }
      state.auth = {
        status: "signed_out",
        login: null,
        token: null,
        detail: "Loopback ?mock=1 test mode active. Click [Sign in with GitHub] to simulate owner sign-in.",
      };
      renderAll();
      return;
    }

    if (!configComplete) {
      window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
      state.auth = {
        status: "unconfigured",
        login: null,
        token: null,
        detail: "",
      };
      renderAll();
      return;
    }

    // Check OAuth callback query parameters (?code=...&state=...)
    const oauthError = params.get("error");
    const code = params.get("code");
    const returnedState = params.get("state");

    if (oauthError) {
      window.history.replaceState(null, "", window.location.pathname);
      state.auth = {
        status: "denied",
        login: null,
        token: null,
        detail: `GitHub OAuth returned error: ${oauthError}`,
      };
      renderAll();
      return;
    }

    if (code) {
      const expectedState = window.sessionStorage.getItem(OAUTH_STATE_KEY);
      window.sessionStorage.removeItem(OAUTH_STATE_KEY);
      window.history.replaceState(null, "", window.location.pathname);

      if (!expectedState || !returnedState || expectedState !== returnedState) {
        window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
        state.auth = {
          status: "denied",
          login: null,
          token: null,
          detail: "OAuth CSRF state parameter missing or mismatched. Sign-in aborted.",
        };
        renderAll();
        return;
      }

      try {
        const proxyEndpoint = `${oauth.proxyUrl.replace(/\/+$/, "")}/token`;
        const redirectUri = `${window.location.origin}${window.location.pathname}`;
        const tokenRes = await fetch(proxyEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, redirect_uri: redirectUri }),
        });
        const tokenData = await tokenRes.json();
        if (!tokenRes.ok || !tokenData.access_token) {
          state.auth = {
            status: "denied",
            login: null,
            token: null,
            detail: `OAuth proxy rejected token exchange: ${tokenData.error || tokenRes.status}`,
          };
          renderAll();
          return;
        }
        window.sessionStorage.setItem(OAUTH_TOKEN_KEY, tokenData.access_token);
        await verifyGitHubAccess(tokenData.access_token);
        return;
      } catch (err) {
        state.auth = {
          status: "denied",
          login: null,
          token: null,
          detail: `OAuth proxy request failed: ${err.message}`,
        };
        renderAll();
        return;
      }
    }

    const existingToken = window.sessionStorage.getItem(OAUTH_TOKEN_KEY);
    if (existingToken) {
      await verifyGitHubAccess(existingToken);
      return;
    }

    state.auth = {
      status: "signed_out",
      login: null,
      token: null,
      detail: `Owner gate requires GitHub login "${oauth.allowedLogin || "AdrielVent"}" with push/admin permission.`,
    };
    renderAll();
  }

  // Event listeners
  els.btnSignIn.addEventListener("click", async () => {
    if (state.isMockMode) {
      window.sessionStorage.removeItem(MOCK_SIGNED_OUT_KEY);
      window.sessionStorage.setItem(OAUTH_TOKEN_KEY, "mock-owner-token");
      await verifyGitHubAccess("mock-owner-token");
      return;
    }

    const oauth = state.current.site.oauth || {};
    if (!isNonEmptyString(oauth.clientId) || !isNonEmptyString(oauth.proxyUrl)) {
      return;
    }

    const bytes = new Uint8Array(24);
    window.crypto.getRandomValues(bytes);
    const oauthState = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    window.sessionStorage.setItem(OAUTH_STATE_KEY, oauthState);

    const redirectUri = `${window.location.origin}${window.location.pathname}`;
    const authUrl = new URL("https://github.com/login/oauth/authorize");
    authUrl.searchParams.set("client_id", oauth.clientId);
    authUrl.searchParams.set("redirect_uri", redirectUri);
    authUrl.searchParams.set("scope", "public_repo");
    authUrl.searchParams.set("state", oauthState);
    if (oauth.allowedLogin) {
      authUrl.searchParams.set("login", oauth.allowedLogin);
    }
    window.location.assign(authUrl.toString());
  });

  els.btnSignOut.addEventListener("click", () => {
    window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
    window.sessionStorage.removeItem(OAUTH_STATE_KEY);
    if (state.isMockMode) {
      window.sessionStorage.setItem(MOCK_SIGNED_OUT_KEY, "1");
    }
    state.auth = {
      status: "signed_out",
      login: null,
      token: null,
      detail: "Signed out. Re-authenticate to edit or commit.",
    };
    renderAll();
  });

  els.btnMockReset.addEventListener("click", () => {
    if (!state.isMockMode) return;
    window.sessionStorage.removeItem(MOCK_STORE_KEY);
    window.sessionStorage.removeItem(OAUTH_TOKEN_KEY);
    window.sessionStorage.removeItem(MOCK_SIGNED_OUT_KEY);
    window.location.reload();
  });

  if (els.btnQuickCommit) {
    els.btnQuickCommit.addEventListener("click", async () => {
      await executeCommit(
        (state.commitMessage || "").trim() || "chore(portfolio): update site content via /admin",
        { allowActiveTabFallback: true },
      );
    });
  }

  for (const tab of els.tabs) {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      renderAll();
    });
  }

  await initAuth();
}
