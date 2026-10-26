/**
 * Adriel Ventura Engineering Portfolio
 * Script: main.js
 * Features:
 * - Theme Toggle (Light / Dark) with ZERO localStorage
 * - Active Navigation Spy via IntersectionObserver
 * - 3D STL viewer loaded only on request (assets/js/viewer.js)
 */

(function () {
  "use strict";

  // 1. Current Year in Footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Accessible Theme Toggle (Light / Dark) - NO localStorage
  var themeToggleBtn = document.getElementById("theme-toggle");
  var themeToggleText = document.getElementById("theme-toggle-text");
  var htmlEl = document.documentElement;

  // Detect system preference or URL query param (?theme=light or ?theme=dark)
  var urlParams = new URLSearchParams(window.location.search);
  var themeParam = urlParams.get("theme");
  // Dark is the default look; ?theme=light or the toggle switches it.
  var currentTheme = themeParam === "light" ? "light" : "dark";
  
  function updateThemeUI(theme) {
    if (theme === "dark") {
      htmlEl.setAttribute("data-theme", "dark");
      if (themeToggleText) themeToggleText.textContent = "Light";
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to light theme");
        themeToggleBtn.setAttribute("title", "Switch to light theme");
      }
    } else {
      htmlEl.setAttribute("data-theme", "light");
      if (themeToggleText) themeToggleText.textContent = "Dark";
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to dark theme");
        themeToggleBtn.setAttribute("title", "Switch to dark theme");
      }
    }
  }

  // Initialize theme based on preference
  updateThemeUI(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      updateThemeUI(currentTheme);
    });
  }

  // 3. Navigation Highlighting via IntersectionObserver
  var navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (link) {
      var href = link.getAttribute("href");
      return href && href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var activeId = "#" + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("href") === activeId);
            });
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(function (sec) {
      navObserver.observe(sec);
    });
  }

  // 4. Wide tables scroll inside their wrapper on small screens. A scrolling
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

  // 5. 3D model, on request only
  // The page shows a static render. three.js (about 670 KB) and the STL load
  // only when the visitor presses "Open 3D model"; the render stays if WebGL fails.
  var openBtn = document.getElementById("open-3d");

  if (openBtn) {
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
        });
    });
  }
})();
