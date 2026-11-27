/**
 * models.js — 3D Models Library carousel viewer
 *
 * Loads models.json, renders a lazy-loading three.js carousel:
 * - GLTFLoader for .glb, STLLoader for .stl (both from assets/vendor/)
 * - Lazy: only the active model is loaded; the previous one is disposed from GPU
 * - Prev/Next buttons, [01][02]… dial index strip, touch swipe left/right
 * - Arrow keys rotate; R resets; Pause rotation button (WCAG 2.2.2)
 * - aria-live region for model title changes
 * - Reveals #models-app only after initialization (noscript fallback stays hidden)
 */

import * as THREE from "three";
import { STLLoader } from "../vendor/STLLoader.js";
import { GLTFLoader } from "../vendor/GLTFLoader.js";

// ── State ─────────────────────────────────────────────────────────────────
let models = [];
let current = 0;
let spinning = true;
let dragStart = null;
let swipeStart = null;
let renderer = null;
let scene = null;
let camera = null;
let pivot = null;
let meshGroup = null;
let rafId = 0;
let lastTime = 0;
let pitch = 0.5;
let yaw = -0.6;
let modelRadius = 1;
let dragPitch = 0;
let dragYaw = 0;

// ── DOM refs ──────────────────────────────────────────────────────────────
const app       = document.getElementById("models-app");
const stage     = document.getElementById("model-stage");
const statusEl  = document.getElementById("viewer-status");
const liveEl    = document.getElementById("models-live");
const dialEl    = document.getElementById("models-dial");
const counter   = document.getElementById("model-counter");
const titleEl   = document.getElementById("model-title-display");
const ctxEl     = document.getElementById("model-context");
const probEl    = document.getElementById("model-problem");
const contEl    = document.getElementById("model-contribution");
const specsBody = document.getElementById("model-specs-body");
const statusTxt = document.getElementById("model-status");
const btnPrev   = document.getElementById("btn-prev");
const btnNext   = document.getElementById("btn-next");
const btnPause  = document.getElementById("btn-pause");
const btnReset  = document.getElementById("btn-reset");

// ── Boot ──────────────────────────────────────────────────────────────────
init();

async function init() {
  try {
    const res = await fetch("assets/data/models.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    models = Array.isArray(data) ? data : (data.models || []);
  } catch (e) {
    if (statusEl) statusEl.textContent = "Could not load model list.";
    return;
  }

  if (!Array.isArray(models) || models.length === 0) {
    if (statusEl) statusEl.textContent = "No models found.";
    return;
  }

  buildDial();
  initRenderer();
  bindEvents();
  if (app) app.hidden = false;
  await loadModel(0);
}

// ── Build dial index strip ────────────────────────────────────────────────
function buildDial() {
  if (!dialEl) return;
  models.forEach(function (m, i) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";

    const numSpan = document.createElement("span");
    numSpan.className = "dial-num";
    numSpan.setAttribute("aria-hidden", "true");
    numSpan.textContent = "[" + String(i + 1).padStart(2, "0") + "]";

    const labelSpan = document.createElement("span");
    // Short label: first two words of title
    labelSpan.textContent = m.title.split(" ").slice(0, 2).join(" ");

    btn.appendChild(numSpan);
    btn.appendChild(labelSpan);
    btn.setAttribute("aria-label", "Model " + (i + 1) + ": " + m.title);
    btn.addEventListener("click", function () { goTo(i); });

    li.appendChild(btn);
    dialEl.appendChild(li);
  });
}

function updateDial(idx) {
  if (!dialEl) return;
  dialEl.querySelectorAll("li").forEach(function (li, i) {
    const active = i === idx;
    li.classList.toggle("is-active", active);
    const btn = li.querySelector("button");
    if (btn) btn.setAttribute("aria-current", active ? "true" : "false");
  });
}

// ── Renderer setup ────────────────────────────────────────────────────────
function initRenderer() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("tabindex", "0");
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "3D model — drag to rotate, arrow keys to turn, R to reset");

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(30, 4 / 3, 0.1, 5000);

  // Lighting: matches viewer.js
  scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(1, 2, 1.5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.9);
  fill.position.set(0, 0, 1);
  camera.add(fill);
  scene.add(camera);

  pivot = new THREE.Group();
  scene.add(pivot);

  if (stage) stage.appendChild(canvas);

  new ResizeObserver(resize).observe(stage || document.body);
  resize();

  // Pointer drag (rotation)
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerEnd);
  canvas.addEventListener("pointercancel", onPointerEnd);

  // Keyboard rotate
  canvas.addEventListener("keydown", onKey);

  // Touch swipe on the stage for carousel navigation
  if (stage) {
    stage.addEventListener("pointerdown", onSwipeStart, { passive: true });
    stage.addEventListener("pointerup", onSwipeEnd);
  }
}

function resize() {
  if (!stage || !renderer) return;
  const w = stage.clientWidth || 400;
  const h = stage.clientHeight || Math.round(w * 0.75);
  renderer.setSize(w, h, false);
  camera.aspect = w / (h || 1);
  camera.updateProjectionMatrix();
  render();
}

// ── Rendering ─────────────────────────────────────────────────────────────
function render() {
  if (!renderer) return;
  pivot.rotation.set(pitch, yaw, 0, "XYZ");
  const d = modelRadius * 3.6;
  camera.position.set(0, 0, d);
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
}

function tick(t) {
  rafId = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!spinning || reduced || document.hidden) return;
  if (lastTime) yaw += ((t - lastTime) / 1000) * ((2 * Math.PI) / 24);
  lastTime = t;
  render();
  rafId = requestAnimationFrame(tick);
}

function startSpin() {
  if (rafId) return;
  lastTime = 0;
  rafId = requestAnimationFrame(tick);
}

function stopSpin() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  lastTime = 0;
}

function setSpin(on) {
  spinning = on;
  if (btnPause) {
    btnPause.setAttribute("aria-pressed", String(on));
    btnPause.textContent = on ? "Pause rotation" : "Resume rotation";
  }
  if (on) startSpin(); else stopSpin();
}

// ── Model loading + disposal ──────────────────────────────────────────────
function disposeGroup(grp) {
  if (!grp) return;
  grp.traverse(function (obj) {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(function (mat) { mat.dispose(); });
      } else {
        obj.material.dispose();
      }
    }
  });
  pivot.remove(grp);
}

async function loadModel(idx) {
  const m = models[idx];
  current = idx;

  updateInfo(m, idx);
  updateDial(idx);

  if (liveEl) liveEl.textContent = "Model " + (idx + 1) + " of " + models.length + ": " + m.title;

  disposeGroup(meshGroup);
  meshGroup = null;

  if (statusEl) statusEl.textContent = "Loading model\u2026";
  stopSpin();

  try {
    const fileType = m.format || m.type || (m.file && m.file.endsWith(".stl") ? "stl" : "glb");
    const group = await loadFile(m.file, fileType);
    meshGroup = group;

    // Centre and normalise
    const box = new THREE.Box3().setFromObject(group);
    const centre = box.getCenter(new THREE.Vector3());
    group.position.sub(centre);
    modelRadius = box.getSize(new THREE.Vector3()).length() / 2 || 1;

    pivot.add(group);
    resetView();
    if (statusEl) statusEl.textContent = "Drag to rotate \u00b7 arrow keys turn \u00b7 R resets view";

    setSpin(spinning);
    startSpin();
  } catch (err) {
    if (statusEl) statusEl.textContent = "Model could not be loaded.";
  }
}

function loadFile(src, type) {
  return new Promise(function (resolve, reject) {
    if (type === "stl") {
      new STLLoader().load(src, function (geometry) {
        geometry.computeVertexNormals();
        const mat = new THREE.MeshStandardMaterial({
          color: 0xc9ced6,
          metalness: 0.15,
          roughness: 0.6,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, mat);
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry, 25),
          new THREE.LineBasicMaterial({ color: 0x1c1b19 })
        );
        const grp = new THREE.Group();
        grp.add(mesh, edges);
        resolve(grp);
      }, undefined, reject);
    } else {
      // GLB
      new GLTFLoader().load(src, function (gltf) {
        resolve(gltf.scene);
      }, undefined, reject);
    }
  });
}

// ── Info panel ────────────────────────────────────────────────────────────
function updateInfo(m, idx) {
  if (counter)   counter.textContent   = (idx + 1) + " / " + models.length;
  if (titleEl)   titleEl.textContent   = m.title || "";
  if (ctxEl)     ctxEl.textContent     = m.context || (m.category ? (m.category + (m.date ? " · " + m.date : "")) : (m.date || ""));
  if (probEl)    probEl.textContent    = m.problem || m.summary || "";
  if (contEl)    contEl.textContent    = m.contribution || m.sourceNote || "";
  if (statusTxt) statusTxt.textContent = m.status || (Array.isArray(m.specs) ? (m.specs.find(function(s) { return s.label === "Status" || s.key === "Status"; })?.value || "") : "");

  if (specsBody) {
    specsBody.innerHTML = "";
    if (Array.isArray(m.specs)) {
      m.specs.forEach(function (s) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.scope = "row";
        th.textContent = s.label || s.key || "";
        const td = document.createElement("td");
        td.textContent = s.value || "";
        tr.append(th, td);
        specsBody.appendChild(tr);
      });
    }
  }
}

// ── Navigation ────────────────────────────────────────────────────────────
function goTo(idx) {
  idx = ((idx % models.length) + models.length) % models.length;
  loadModel(idx);
}

// ── View reset ────────────────────────────────────────────────────────────
function resetView() {
  pitch = 0.5;
  yaw = -0.6;
  render();
}

// ── Pointer drag (rotation) ───────────────────────────────────────────────
function onPointerDown(e) {
  dragStart = { x: e.clientX, y: e.clientY };
  dragPitch = pitch;
  dragYaw = yaw;
  e.currentTarget.setPointerCapture(e.pointerId);
  stopSpin();
}
function onPointerMove(e) {
  if (!dragStart) return;
  yaw   = dragYaw   + (e.clientX - dragStart.x) * 0.01;
  pitch = Math.max(-1.55, Math.min(1.55, dragPitch + (e.clientY - dragStart.y) * 0.01));
  render();
}
function onPointerEnd() {
  dragStart = null;
  if (spinning) startSpin();
}

// ── Touch/pointer swipe for carousel navigation ───────────────────────────
function onSwipeStart(e) {
  swipeStart = { x: e.clientX, y: e.clientY };
}
function onSwipeEnd(e) {
  if (!swipeStart) return;
  const dx = e.clientX - swipeStart.x;
  const dy = e.clientY - swipeStart.y;
  swipeStart = null;
  // Only treat as swipe if horizontal dominates and exceeds threshold
  if (Math.abs(dx) > 70 && Math.abs(dy) < 50) {
    if (dx < 0) goTo(current + 1);
    else        goTo(current - 1);
  }
}

// ── Keyboard ──────────────────────────────────────────────────────────────
function onKey(e) {
  const step = 0.15;
  switch (e.key) {
    case "ArrowLeft":  yaw   -= step; break;
    case "ArrowRight": yaw   += step; break;
    case "ArrowUp":    pitch  = Math.max(-1.55, pitch - step); break;
    case "ArrowDown":  pitch  = Math.min(1.55,  pitch + step); break;
    case "r": case "R": resetView(); return;
    default: return;
  }
  e.preventDefault();
  render();
}

// ── Button bindings ───────────────────────────────────────────────────────
function bindEvents() {
  if (btnPrev)  btnPrev.addEventListener("click",  function () { goTo(current - 1); });
  if (btnNext)  btnNext.addEventListener("click",  function () { goTo(current + 1); });
  if (btnPause) btnPause.addEventListener("click", function () { setSpin(!spinning); });
  if (btnReset) btnReset.addEventListener("click", resetView);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopSpin();
    else if (spinning) startSpin();
  });
}
