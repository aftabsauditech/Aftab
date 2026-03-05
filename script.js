document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("open");
      }
    });
  }

  // Simple scroll-based reveal animations
  const animatedSections = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window && animatedSections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } else {
    // Fallback: show everything if IntersectionObserver is not supported
    animatedSections.forEach((section) => {
      section.classList.add("revealed");
    });
  }
});

