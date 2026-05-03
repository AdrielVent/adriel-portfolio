const counters = document.querySelectorAll("[data-count]");

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
