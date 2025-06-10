document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const root = document.documentElement;

  const updateHeaderHeight = () => {
    const headerHeight = header.offsetHeight;
    root.style.setProperty("--header-height", `${headerHeight}px`);
    document.body.style.paddingTop = `${headerHeight}px`; // Aplicar el padding al body
    root.style.scrollPaddingTop = `${headerHeight}px`;
  };

  // Llama a la función al cargar la página y al redimensionar
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only prevent default and handle smooth scrolling for hash links
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Usa la altura calculada dinámicamente para el desplazamiento
          const offset = header.offsetHeight;
          window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add active class to current section in viewport (mainly for index.html)
  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px", // Ajustar para que se active cuando el centro de la sección está en el viewport
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        if (id) {
          // Solo si el elemento observado tiene un ID
          document.querySelectorAll("nav a").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      }
    });
  }, observerOptions);

  // Observar solo la sección de categorías en el index.html
  const categoriasSection = document.querySelector("#categorias");
  if (categoriasSection) {
    observer.observe(categoriasSection);
  }

  // Add hover effect to recipe cards
  document.querySelectorAll(".receta").forEach((receta) => {
    receta.addEventListener("mouseenter", () => {
      receta.style.transform = "translateY(-5px)";
    });

    receta.addEventListener("mouseleave", () => {
      receta.style.transform = "translateY(0)";
    });
  });

  // Animación para ingredientes (dentro de .receta)
  document
    .querySelectorAll(".receta .ingredientes li")
    .forEach((ingrediente) => {
      ingrediente.addEventListener("mouseenter", () => {
        ingrediente.style.transform = "translateX(5px)";
        ingrediente.style.color = "var(--accent-color)";
      });

      ingrediente.addEventListener("mouseleave", () => {
        ingrediente.style.transform = "translateX(0)";
        ingrediente.style.color = "var(--text-color)";
      });
    });

  // Animación para secciones de receta (si existen en el futuro)
  // Actualmente no se usan en las páginas de categorías, pero se mantiene la lógica si se añaden detalles de receta individuales.
  document.querySelectorAll(".receta-detalle section").forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.transform = "translateY(-5px)";
      section.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    section.addEventListener("mouseleave", () => {
      section.style.transform = "translateY(0)";
      section.style.boxShadow = "none";
    });
  });

  // Botón de volver al inicio (si existe en la página)
  const btnVolver = document.querySelector(".btn-volver");
  if (btnVolver) {
    btnVolver.addEventListener("mouseenter", () => {
      btnVolver.style.transform = "translateY(-2px)";
    });

    btnVolver.addEventListener("mouseleave", () => {
      btnVolver.style.transform = "translateY(0)";
    });
  }

  // Animación para recetas relacionadas (si existen en el futuro)
  document.querySelectorAll(".recetas-relacionadas a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });

  // Efecto de aparición gradual para las tarjetas de receta
  const fadeInOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeInObserver.unobserve(entry.target); // Dejar de observar una vez que ha aparecido
      }
    });
  }, fadeInOptions);

  document.querySelectorAll(".receta").forEach((receta) => {
    receta.style.opacity = "0";
    receta.style.transform = "translateY(20px)";
    receta.style.transition = "all 0.5s ease-out";
    fadeInObserver.observe(receta);
  });

  let lastScrollTop = 0;
  const scrollThreshold = 50; // Minimum scroll amount before header starts hiding

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Only trigger if we've scrolled more than the threshold
    if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down & past header
        header.classList.add("hidden");
      } else {
        // Scrolling up
        header.classList.remove("hidden");
      }
      lastScrollTop = currentScroll;
    }
  });
});
