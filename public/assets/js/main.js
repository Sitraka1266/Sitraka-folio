document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hidden");
        document.body.style.overflow = "auto";
      }, 500);
    });
    document.body.style.overflow = "hidden";
  }

  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const applyTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const tt = document.getElementById("theme-toggle");
    if (tt) {
      setupThemeToggleElement(tt);
    }
  };

  const setupThemeToggleElement = (el) => {
    if (!el || el._theme_initialized) return;
    el._theme_initialized = true;

    const updateUI = () => {
      const currentTheme = html.getAttribute('data-theme') || localStorage.getItem('theme') || 'light';

      const label = el.querySelector('.toggle-label');
      if (label) label.textContent = currentTheme === 'dark' ? '' : '';

      const thumbIcon = el.querySelector('.toggle-thumb i');
      if (thumbIcon) {
        thumbIcon.classList.remove('fa-moon', 'fa-sun');
        thumbIcon.classList.add(currentTheme === 'dark' ? 'fa-sun' : 'fa-moon');
      }

      if (currentTheme === 'dark') {
        el.classList.remove('btn-outline-secondary');
        el.classList.add('btn-secondary');
        el.classList.add('theme-dark');
      } else {
        el.classList.remove('btn-secondary');
        el.classList.add('btn-outline-secondary');
        el.classList.remove('theme-dark');
      }
    };

    updateUI();

    el.addEventListener('click', (e) => {
      e.preventDefault();
      const cur = html.getAttribute('data-theme') || 'light';
      const next = cur === 'light' ? 'dark' : 'light';
      applyTheme(next);
      updateUI();
    });
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (themeToggle) {
    setupThemeToggleElement(themeToggle);
  }

  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        window.location.href = targetId;
      }

      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarToggler && navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const updateActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  const animateElements = () => document.querySelectorAll('[class*="animate-"]');

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observedSet = new Set();

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        const delayClass = Array.from(entry.target.classList).find((cls) =>
          cls.startsWith("delay-")
        );
        if (delayClass) {
          const delay = parseInt(delayClass.replace("delay-", "")) / 1000;
          entry.target.style.animationDelay = `${delay}s`;
        }

        if (entry.target.classList.contains("skill-item")) {
          const progressBar = entry.target.querySelector(".progress-bar");
          if (progressBar) {
            const width = progressBar.getAttribute("aria-valuenow");
            progressBar.style.width = width + "%";
          }
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeEl = (el) => {
    if (!observedSet.has(el)) {
      observer.observe(el);
      observedSet.add(el);
    }
  };

  animateElements().forEach((el) => observeEl(el));

  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.matches && node.matches('[class*="animate-"]')) {
          observeEl(node);
        }
        node.querySelectorAll && node.querySelectorAll('[class*="animate-"]').forEach((el) => observeEl(el));

        node.querySelectorAll && node.querySelectorAll('.not-online').forEach(processOfflineLink);
        if (node.classList && node.classList.contains('not-online')) processOfflineLink(node);

        if (node.id === 'theme-toggle') setupThemeToggleElement(node);
        node.querySelectorAll && node.querySelectorAll('#theme-toggle').forEach((el) => setupThemeToggleElement(el));
      });
    });
  });

  mo.observe(document.body, { childList: true, subtree: true });
  const notOnlineText = "Pas encore en ligne";

  const processOfflineLink = (projectLink) => {
    if (!projectLink || projectLink._processed_offline) return;
    projectLink._processed_offline = true;
    projectLink.classList.remove("badge");
    projectLink.classList.add("btn-secondary");
    projectLink.classList.add("disabled");

    projectLink.innerHTML = notOnlineText;

    projectLink.addEventListener("click", function (event) {
      event.preventDefault();
    });
  };

  document.querySelectorAll('.not-online').forEach(processOfflineLink);
});
