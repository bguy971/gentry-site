const toggle = document.getElementById("mobileToggle");
const nav = document.getElementById("navLinks");
const header = document.getElementById("siteHeader");
const cursorGlow = document.getElementById("cursorGlow");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.classList.toggle("open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

const heroZoom = document.querySelector(".hero-bg-zoom");

window.addEventListener("scroll", () => {
  const y = window.pageYOffset;

  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 80);
  }

  if (heroZoom) {
    heroZoom.style.transform = `scale(1.08) translateY(${y * 0.08}px)`;
  }
});

document.querySelectorAll(".dish-card, .feature-card, .hours-panel, .premium-menu-card, .experience-card, .value-card, .visit-card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 70}ms`;
});

if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.transform = `
      translateY(-4px)
      rotateX(${(y - rect.height / 2) / 18}deg)
      rotateY(${(x - rect.width / 2) / 22}deg)
    `;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});