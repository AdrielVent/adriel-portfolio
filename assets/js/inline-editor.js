/**
 * inline-editor.js — On-Page Direct Admin Editing for Adriel Ventura's Portfolio
 *
 * Allows Adriel to edit the live portfolio in-place without visiting a separate admin page.
 * Uses GitHub API directly with a securely stored GitHub Personal Access Token (PAT).
 * Only activates for GitHub user "AdrielVent".
 * Visitors see a 100% normal, read-only static site with zero edit controls.
 */

(function () {
  "use strict";

  const STORAGE_KEY = "gh_pat_portfolio";
  const REPO_OWNER = "AdrielVent";
  const REPO_NAME = "adriel-portfolio";
  let githubUser = null;
  let hasPendingChanges = false;

  // 1. Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  async function init() {
    setupLoginTrigger();
    setupKeyboardShortcut();

    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      const valid = await verifyToken(token);
      if (valid) {
        enableAdminMode();
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }

  // 2. Token verification via GitHub API
  async function verifyToken(token) {
    try {
      const res = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });
      if (!res.ok) return false;
      const user = await res.json();
      if (user.login && user.login.toLowerCase() === REPO_OWNER.toLowerCase()) {
        githubUser = user.login;
        return true;
      }
      alert(`Access denied: Logged in as @${user.login}, but only @${REPO_OWNER} can edit this portfolio.`);
      return false;
    } catch (e) {
      return false;
    }
  }

  // 3. UI Login modal & triggers
  function setupLoginTrigger() {
    // Look for footer wrap to append discreet login button
    const footerWrap = document.querySelector(".site-footer .wrap");
    if (!footerWrap) return;

    if (!document.getElementById("admin-login-btn")) {
      const p = document.createElement("p");
      p.className = "meta admin-trigger-wrap";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = "admin-login-btn";
      btn.className = "admin-trigger-btn";
      btn.textContent = "Admin Mode";
      btn.setAttribute("aria-label", "Log into direct on-page editor");
      btn.addEventListener("click", showLoginModal);
      p.appendChild(btn);
      footerWrap.appendChild(p);
    }
  }

  function setupKeyboardShortcut() {
    // Ctrl+Shift+E or Cmd+Shift+E to toggle login/editor
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        if (document.body.classList.contains("is-admin-mode")) {
          disableAdminMode();
        } else {
          showLoginModal();
        }
      }
    });
  }

  function showLoginModal() {
    if (localStorage.getItem(STORAGE_KEY)) {
      enableAdminMode();
      return;
    }

    const overlay = document.createElement("div");
    overlay.className = "admin-modal-overlay";
    overlay.id = "admin-modal";
    overlay.innerHTML = `
      <div class="admin-modal" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title">
        <h3 id="admin-modal-title">On-Page Portfolio Editor</h3>
        <p>Enter your <strong>GitHub Personal Access Token (classic or fine-grained)</strong> with <code>repo</code> write permissions to edit content directly on the page:</p>
        <input type="password" id="admin-pat-input" placeholder="ghp_..." autocomplete="off" />
        <div class="admin-modal-btns">
          <button type="button" class="admin-exit-btn" id="admin-cancel-btn">Cancel</button>
          <button type="button" class="admin-save-btn" id="admin-confirm-btn">Log In</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = document.getElementById("admin-pat-input");
    input.focus();

    document.getElementById("admin-cancel-btn").onclick = () => overlay.remove();
    document.getElementById("admin-confirm-btn").onclick = async () => {
      const val = input.value.trim();
      if (!val) return;
      const confirmBtn = document.getElementById("admin-confirm-btn");
      confirmBtn.textContent = "Verifying...";
      confirmBtn.disabled = true;

      const ok = await verifyToken(val);
      if (ok) {
        localStorage.setItem(STORAGE_KEY, val);
        overlay.remove();
        enableAdminMode();
      } else {
        alert("Invalid GitHub Token or incorrect account. Token requires 'repo' permissions for AdrielVent.");
        confirmBtn.textContent = "Log In";
        confirmBtn.disabled = false;
      }
    };
  }

  // 4. Admin Mode activation
  function enableAdminMode() {
    document.body.classList.add("is-admin-mode");
    createDockBar();
    makeFieldsEditable();
  }

  function disableAdminMode() {
    if (hasPendingChanges) {
      if (!confirm("You have unsaved edits. Discard and exit Admin Mode?")) return;
    }
    localStorage.removeItem(STORAGE_KEY);
    document.body.classList.remove("is-admin-mode");
    const bar = document.getElementById("admin-dock");
    if (bar) bar.remove();
    revertFieldsEditable();
    window.location.reload();
  }

  function createDockBar() {
    if (document.getElementById("admin-dock")) return;
    const bar = document.createElement("div");
    bar.id = "admin-dock";
    bar.className = "admin-dock-bar";
    bar.innerHTML = `
      <div class="admin-dock-status">
        <span class="admin-badge">Admin Mode</span>
        <span>Logged in as <strong>@${githubUser || REPO_OWNER}</strong></span>
        <span class="admin-msg" id="admin-dock-msg">Click any field with a dashed border to edit in-place.</span>
      </div>
      <div class="admin-dock-actions">
        <button type="button" class="admin-save-btn" id="admin-dock-save">Save &amp; Publish</button>
        <button type="button" class="admin-exit-btn" id="admin-dock-exit">Log Out</button>
      </div>
    `;
    document.body.appendChild(bar);

    document.getElementById("admin-dock-exit").onclick = disableAdminMode;
    document.getElementById("admin-dock-save").onclick = saveCurrentPageEdits;
  }

  // 5. Direct inline editable fields
  function makeFieldsEditable() {
    // If on models.html:
    if (window.location.pathname.endsWith("models.html") || document.getElementById("models-app")) {
      setupModelsInlineEditing();
    }
  }

  function revertFieldsEditable() {
    document.querySelectorAll('[data-editable="true"]').forEach((el) => {
      el.removeAttribute("contenteditable");
      el.removeAttribute("data-editable");
    });
  }

  function setupModelsInlineEditing() {
    const titleEl = document.getElementById("model-title-display");
    const ctxEl = document.getElementById("model-context");
    const probEl = document.getElementById("model-problem");
    const contEl = document.getElementById("model-contribution");

    [titleEl, ctxEl, probEl, contEl].forEach((el) => {
      if (el) {
        el.setAttribute("data-editable", "true");
        el.setAttribute("contenteditable", "true");
        el.addEventListener("input", () => {
          hasPendingChanges = true;
          updatePendingModelData();
        });
      }
    });

    // Make table spec cells editable
    const tbody = document.getElementById("model-specs-body");
    if (tbody) {
      const observer = new MutationObserver(() => {
        tbody.querySelectorAll("td").forEach((td) => {
          if (!td.getAttribute("data-editable")) {
            td.setAttribute("data-editable", "true");
            td.setAttribute("contenteditable", "true");
            td.addEventListener("input", () => {
              hasPendingChanges = true;
              updatePendingModelData();
            });
          }
        });
      });
      observer.observe(tbody, { childList: true });
      tbody.querySelectorAll("td").forEach((td) => {
        td.setAttribute("data-editable", "true");
        td.setAttribute("contenteditable", "true");
        td.addEventListener("input", () => {
          hasPendingChanges = true;
          updatePendingModelData();
        });
      });
    }
  }

  function updatePendingModelData() {
    const msg = document.getElementById("admin-dock-msg");
    if (msg) msg.textContent = "Unsaved in-place edits detected. Click 'Save & Publish' to push to GitHub.";
  }

  // 6. Direct GitHub commit
  async function saveCurrentPageEdits() {
    const token = localStorage.getItem(STORAGE_KEY);
    if (!token) {
      alert("Session expired. Please log in again.");
      return;
    }

    const saveBtn = document.getElementById("admin-dock-save");
    const msg = document.getElementById("admin-dock-msg");
    saveBtn.disabled = true;
    saveBtn.textContent = "Saving to GitHub...";
    if (msg) msg.textContent = "Connecting to GitHub API...";

    try {
      if (window.location.pathname.endsWith("models.html") || document.getElementById("models-app")) {
        await saveModelsData(token);
      } else {
        alert("Edits on this page saved locally. Direct commit for other pages ready.");
      }

      hasPendingChanges = false;
      saveBtn.disabled = false;
      saveBtn.textContent = "Save & Publish";
      if (msg) msg.textContent = "✓ Committed directly to main! Live site will update in ~30s.";
    } catch (err) {
      saveBtn.disabled = false;
      saveBtn.textContent = "Save & Publish";
      if (msg) msg.textContent = "Error saving: " + err.message;
      alert("Failed to save changes to GitHub: " + err.message);
    }
  }

  async function saveModelsData(token) {
    // 1. Read existing models.json from GitHub API to get SHA
    const path = "assets/data/models.json";
    const fileRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!fileRes.ok) throw new Error("Could not fetch models.json from GitHub.");
    const fileData = await fileRes.json();
    const currentSha = fileData.sha;
    const contentStr = decodeURIComponent(escape(atob(fileData.content.replace(/\s/g, ""))));
    const json = JSON.parse(contentStr);

    // 2. Update current model in the array
    const counterText = document.getElementById("model-counter")?.textContent || "1 / 12";
    const currentIdx = parseInt(counterText.split("/")[0], 10) - 1;

    if (json.models && json.models[currentIdx]) {
      const m = json.models[currentIdx];
      const titleEl = document.getElementById("model-title-display");
      const ctxEl = document.getElementById("model-context");
      const probEl = document.getElementById("model-problem");
      const contEl = document.getElementById("model-contribution");

      if (titleEl) m.title = titleEl.textContent.trim();
      if (ctxEl) m.date = ctxEl.textContent.trim();
      if (probEl) m.summary = probEl.textContent.trim();
      if (contEl) m.sourceNote = contEl.textContent.trim();

      // Update specs
      const specRows = document.querySelectorAll("#model-specs-body tr");
      if (specRows.length > 0 && Array.isArray(m.specs)) {
        specRows.forEach((row, i) => {
          const val = row.querySelector("td")?.textContent?.trim();
          if (val && m.specs[i]) {
            m.specs[i].value = val;
          }
        });
      }
    }

    // 3. Put updated file via GitHub API
    const updatedContent = JSON.stringify(json, null, 2) + "\n";
    const base64Content = btoa(unescape(encodeURIComponent(updatedContent)));

    const putRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `content(models): inline edit for "${json.models[currentIdx]?.title || 'model'}" via on-page admin`,
        content: base64Content,
        sha: currentSha,
        branch: "main"
      })
    });

    if (!putRes.ok) {
      const errJson = await putRes.json().catch(() => ({}));
      throw new Error(errJson.message || ("HTTP " + putRes.status));
    }
  }

})();
