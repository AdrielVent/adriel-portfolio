/**
 * Adriel Ventura Engineering Portfolio
 * Script: main.js
 * Features:
 * - Theme Toggle (Light / Dark) with ZERO localStorage
 * - Active Navigation Spy via IntersectionObserver
 * - Dynamic On-Demand 3D STL Model Loader (Preserves initial load budget < 800 KB)
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

  // 4. Hero 3D model
  // The bundle (three.js + STLLoader) scans for [data-stl-viewer] when it
  // runs, so mark the stage first. It loads after the page so text and
  // images are never blocked; the static render stays if WebGL fails.
  var heroStage = document.getElementById("hero-stage");

  if (heroStage) {
    var loadViewer = function () {
      heroStage.setAttribute("data-stl-viewer", "");
      heroStage.setAttribute("data-stl-view", "hero");
      var script = document.createElement("script");
      script.src = "assets/js/main.bundle.js";
      script.onerror = function () {
        heroStage.removeAttribute("data-stl-viewer");
      };
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadViewer();
    } else {
      window.addEventListener("load", loadViewer);
    }
  }
})();
