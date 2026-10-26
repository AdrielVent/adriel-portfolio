/**
 * Adriel Ventura, engineering portfolio
 * Everything on the page works without this file. It only:
 * - gives wide tables a keyboard stop when they scroll sideways
 * - loads the 3D viewer (assets/js/viewer.js) when someone asks for it
 */

(function () {
  "use strict";

  // 1. Wide tables scroll inside their wrapper on small screens. A scrolling
  // region must be reachable by keyboard, so it gets a tab stop only then.
  var scrollers = Array.from(document.querySelectorAll(".table-scroll"));
  function markScrollers() {
    scrollers.forEach(function (el) {
      if (el.scrollWidth > el.clientWidth + 1) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "region");
        var cap = el.querySelector("caption");
        el.setAttribute("aria-label", cap ? cap.textContent : "Table");
      } else {
        el.removeAttribute("tabindex");
        el.removeAttribute("role");
        el.removeAttribute("aria-label");
      }
    });
  }
  markScrollers();
  window.addEventListener("resize", markScrollers);

  // 2. 3D model, on request only. three.js (about 670 KB) and the STL load
  // only after a click; the static render stays if WebGL fails.
  var openBtn = document.getElementById("open-3d");
  if (openBtn) {
    openBtn.hidden = false;
    openBtn.addEventListener("click", function () {
      var stage = document.getElementById("model-stage");
      var controls = document.getElementById("viewer-controls");
      var status = document.getElementById("viewer-status");
      openBtn.disabled = true;
      openBtn.hidden = true;
      import("./viewer.js")
        .then(function (m) {
          m.mountViewer(stage, controls, status);
        })
        .catch(function () {
          status.textContent = "The 3D model didn't load. The render above shows the same part.";
          status.tabIndex = -1;
          status.focus();
        });
    });
  }
})();
