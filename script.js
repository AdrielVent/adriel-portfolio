const counters = document.querySelectorAll("[data-count]");
const tiltCards = document.querySelectorAll(".project-card, .competency-grid article");
const statusMetric = document.querySelector("#statusMetric");
const sequenceItems = Array.from(document.querySelectorAll(".sequence-steps li"));
const sequenceStatus = document.querySelector("#sequenceStatus");
const resetSequence = document.querySelector(".reset-sequence");

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

const metrics = ["ME '27", "CSTEP President", "FEA Validated"];
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

const sequence = ["impeller", "cover", "fasteners"];
let sequenceIndex = 0;

const updateSequence = () => {
  sequenceItems.forEach((item, index) => {
    const status = item.querySelector("span");
    const button = item.querySelector("button");

    item.classList.toggle("complete", index < sequenceIndex);
    item.classList.toggle("ready", index === sequenceIndex);
    item.classList.toggle("locked", index > sequenceIndex);

    if (index < sequenceIndex) {
      status.textContent = "Validated";
      button.disabled = true;
    } else if (index === sequenceIndex) {
      status.textContent = "Ready";
      button.disabled = false;
    } else {
      status.textContent = "Locked";
      button.disabled = true;
    }
  });

  if (sequenceStatus) {
    sequenceStatus.textContent = sequenceIndex === sequence.length ? "Validated" : "Awaiting Input";
  }
};

sequenceItems.forEach((item) => {
  item.querySelector("button")?.addEventListener("click", () => {
    if (item.dataset.step !== sequence[sequenceIndex]) return;
    sequenceIndex += 1;
    updateSequence();
  });
});

resetSequence?.addEventListener("click", () => {
  sequenceIndex = 0;
  updateSequence();
});

updateSequence();
