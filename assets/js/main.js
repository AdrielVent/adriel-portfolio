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

  // Detect system preference
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var currentTheme = prefersDark ? "dark" : "light";
  
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

  // 4. Opt-In On-Demand 3D Model Loader
  var btnLoad3D = document.getElementById("btn-load-3d");
  var staticImg = document.getElementById("heat-sink-static-img");
  var canvasEl = document.getElementById("stl-canvas");
  var stageEl = document.getElementById("heat-sink-stage");

  if (btnLoad3D && canvasEl && staticImg) {
    btnLoad3D.addEventListener("click", function () {
      btnLoad3D.disabled = true;
      btnLoad3D.textContent = "Loading WebGL 3D Model...";

      // Dynamically load main.bundle.js only upon user interaction
      var script = document.createElement("script");
      script.src = "assets/js/main.bundle.js";
      script.onload = function () {
        staticImg.style.display = "none";
        canvasEl.style.display = "block";
        if (stageEl) {
          stageEl.setAttribute("data-stl-viewer", "");
          stageEl.setAttribute("data-stl-view", "dossier");
        }
        btnLoad3D.textContent = "Interactive 3D Active";
        btnLoad3D.style.backgroundColor = "var(--bg-subtle)";
        btnLoad3D.style.color = "var(--text-muted)";
      };
      script.onerror = function () {
        btnLoad3D.disabled = false;
        btnLoad3D.textContent = "3D Preview Unavailable (Static View Active)";
      };
      document.body.appendChild(script);
    });
  }
})();
