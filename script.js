const counters = document.querySelectorAll("[data-count]");
const tiltCards = document.querySelectorAll(".project-card, .competency-grid article");
const statusMetric = document.querySelector("#statusMetric");
const startupOverlay = document.querySelector("#startupOverlay");
const startupSkip = document.querySelector("#startupSkip");
const copyEmailButton = document.querySelector("#copyEmailButton");

const completeStartup = () => {
  if (!startupOverlay || startupOverlay.classList.contains("is-complete")) {
    return;
  }

  startupOverlay.classList.add("is-complete");
  document.body.classList.remove("booting");

  window.setTimeout(() => {
    startupOverlay.remove();
  }, 450);
};

if (startupOverlay) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    completeStartup();
  } else {
    window.setTimeout(completeStartup, 2100);
    startupSkip?.addEventListener("click", completeStartup);
  }
}

const fallbackCopyText = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand("copy");
  } finally {
    textArea.remove();
  }
};

if (copyEmailButton) {
  const defaultLabel = copyEmailButton.textContent;
  const email = copyEmailButton.dataset.email || "";

  copyEmailButton.addEventListener("click", async () => {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      copied = fallbackCopyText(email);
    }

    copyEmailButton.textContent = copied ? "Copied Email" : "Copy Failed";

    window.setTimeout(() => {
      copyEmailButton.textContent = defaultLabel;
    }, 1600);
  });
}

const runCounter = (entry) => {
  const target = Number(entry.target.dataset.count);
  const duration = 900;
  const started = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    entry.target.textContent = Math.round(target * eased).toString().padStart(2, "0");

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.55 }
);

counters.forEach((counter) => observer.observe(counter));

const metrics = ["ME '27", "Stellant Systems Co-op", "FEA Validated"];
let metricIndex = 0;

if (statusMetric) {
  setInterval(() => {
    metricIndex = (metricIndex + 1) % metrics.length;
    statusMetric.textContent = metrics[metricIndex];
  }, 2200);
}

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.setProperty("--card-tilt-x", `${(-y * 7).toFixed(2)}deg`);
    card.style.setProperty("--card-tilt-y", `${(x * 9).toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--card-tilt-x", "0deg");
    card.style.setProperty("--card-tilt-y", "0deg");
  });
});
