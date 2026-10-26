/**
 * Adriel Ventura, engineering portfolio
 * Everything on the page works without this file. It only:
 * - gives wide tables a keyboard stop when they scroll sideways
 * - loads the 3D viewer (assets/js/viewer.js) when someone asks for it
 * - turns the homepage render into a slow turntable once the page has loaded
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

  // 3. Homepage turntable. Loads three.js (about 0.7 MB) only after the page
  // has finished loading and the render is near the screen. Skipped for
  // Save-Data. With reduced motion it waits for the visitor to press Rotate.
  var home = document.getElementById("home-stage");
  var spinBtn = document.getElementById("spin-toggle");
  if (home && spinBtn) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    var viewer = null;
    var spinning = false;

    function label() {
      spinBtn.textContent = spinning ? "Pause rotation" : "Rotate";
    }
    function load(spinNow) {
      if (viewer) return viewer;
      viewer = import("./viewer.js").then(function (m) {
        return m.mountViewer(home, null, document.getElementById("home-status"), {
          spin: spinNow,
          focus: false,
          zoom: 4,
          readyText: ""
        });
      });
      viewer.catch(function () {
        spinBtn.hidden = true;
      });
      return viewer;
    }

    spinBtn.hidden = false;
    spinning = !reduce && !saveData;
    label();
    spinBtn.addEventListener("click", function () {
      spinning = !spinning;
      label();
      load(spinning).then(function (v) { v.setSpin(spinning); });
    });

    if (spinning) {
      window.addEventListener("load", function () {
        var io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            io.disconnect();
            load(spinning);
          }
        }, { rootMargin: "200px" });
        io.observe(home);
      });
    }
  }
})();
