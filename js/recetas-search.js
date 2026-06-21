// Lógica del Selector de Modo y Búsqueda de Recetas
// Este archivo se carga después de main.js y maneja la búsqueda de recetas

document.addEventListener("DOMContentLoaded", () => {
  const modeButtons = document.querySelectorAll(".mode-btn");
  const categoriasGrid = document.getElementById("categorias");
  const recetasResultados = document.getElementById("recetas-resultados");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  if (!modeButtons.length || !categoriasGrid || !recetasResultados || !searchInput) {
    return; // No hacer nada si los elementos no existen
  }

  let currentMode = "categorias"; // Modo por defecto

  // Inicializar placeholder al cargar la página
  searchInput.placeholder = "Buscar categoría...";

  // Función para normalizar texto (sin acentos, minúsculas)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Función para crear snippet con resaltado
  const createSnippet = (content, query) => {
    if (!query) return content.substring(0, 150) + "...";
    
    const normalizedContent = normalizeText(content);
    const normalizedQuery = normalizeText(query);
    const index = normalizedContent.indexOf(normalizedQuery);
    
    if (index === -1) return content.substring(0, 150) + "...";
    
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + query.length + 50);
    let snippet = content.substring(start, end);
    
    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";
    
    // Resaltar el término de búsqueda
    const regex = new RegExp(`(${query})`, "gi");
    snippet = snippet.replace(regex, "<strong>$1</strong>");
    
    return snippet;
  };

  // Función para buscar recetas
  const searchRecetas = (query) => {
    if (!RECETAS_INDEX || RECETAS_INDEX.length === 0) {
      recetasResultados.innerHTML = '<div class="no-results-message">No hay recetas indexadas.</div>';
      return;
    }

    const cleanQuery = normalizeText(query);
    
    if (!cleanQuery) {
      recetasResultados.innerHTML = '';
      return;
    }

    const results = RECETAS_INDEX.filter((receta) => {
      const nombreMatch = normalizeText(receta.nombre).includes(cleanQuery);
      const categoriaMatch = normalizeText(receta.categoria).includes(cleanQuery);
      const contenidoMatch = normalizeText(receta.contenido).includes(cleanQuery);
      return nombreMatch || categoriaMatch || contenidoMatch;
    });

    if (results.length === 0) {
      recetasResultados.innerHTML = '<div class="no-results-message">No se encontraron recetas que coincidan con tu búsqueda.</div>';
      return;
    }

    // Generar tarjetas de resultados
    recetasResultados.innerHTML = results.map((receta) => `
      <div class="resultado-receta-card" data-url="${receta.urlCategoria}">
        <h3>${receta.nombre}</h3>
        <span class="category-badge">${receta.categoria}</span>
        <div class="ver-mas">${createSnippet(receta.contenido, query)}</div>
      </div>
    `).join('');

    // Agregar event listeners a las tarjetas
    document.querySelectorAll(".resultado-receta-card").forEach((card) => {
      card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        if (url) {
          window.location.href = url;
        }
      });
    });
  };

  // Función para redirigir si hay una sola coincidencia en modo Recetas
  const navigateToSingleRecipeMatch = (query) => {
    if (!query || !RECETAS_INDEX) return;

    const cleanQuery = normalizeText(query);
    const results = RECETAS_INDEX.filter((receta) => {
      const nombreMatch = normalizeText(receta.nombre).includes(cleanQuery);
      const categoriaMatch = normalizeText(receta.categoria).includes(cleanQuery);
      const contenidoMatch = normalizeText(receta.contenido).includes(cleanQuery);
      return nombreMatch || categoriaMatch || contenidoMatch;
    });

    if (results.length === 1) {
      window.location.href = results[0].urlCategoria;
    }
  };

  // Reimplementar lógica de búsqueda de categorías (independiente de main.js)
  const recetaCards = categoriasGrid.querySelectorAll(".receta");
  const categories = Array.from(recetaCards).map((card) => {
    const titleEl = card.querySelector("h3");
    const linkEl = card.querySelector("a.btn");
    const title = titleEl ? titleEl.textContent.trim() : "";
    const url = linkEl ? linkEl.getAttribute("href") : "";
    const normalizedTitle = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return { card, url, normalizedTitle };
  });

  const filterCategories = (query) => {
    const cleanQuery = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    
    let visibleCount = 0;

    categories.forEach((cat) => {
      if (cat.normalizedTitle.includes(cleanQuery)) {
        cat.card.classList.remove("hidden-category");
        visibleCount++;
      } else {
        cat.card.classList.add("hidden-category");
      }
    });

    // Mostrar/ocultar mensaje de sin resultados
    let noResultsDiv = categoriasGrid.querySelector(".no-results-message");
    if (!noResultsDiv) {
      noResultsDiv = document.createElement("div");
      noResultsDiv.className = "no-results-message";
      noResultsDiv.style.display = "none";
      noResultsDiv.textContent = "No se encontraron categorías que coincidan con tu búsqueda.";
      categoriasGrid.appendChild(noResultsDiv);
    }
    noResultsDiv.style.display = visibleCount === 0 ? "block" : "none";
  };

  const navigateToSingleMatch = () => {
    const visibleCategories = categories.filter(
      (cat) => !cat.card.classList.contains("hidden-category")
    );
    if (visibleCategories.length === 1 && visibleCategories[0].url) {
      window.location.href = visibleCategories[0].url;
    }
  };

  // Clonar y reemplazar event listeners de input
  const newInput = searchInput.cloneNode(true);
  searchInput.parentNode.replaceChild(newInput, searchInput);
  
  // Actualizar la referencia al input
  const inputElement = newInput;

  // Event listeners para los botones de modo
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-mode");
      
      // Actualizar estado activo
      modeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      
      // Actualizar modo actual
      currentMode = mode;
      
      // Cambiar placeholder
      if (mode === "categorias") {
        inputElement.placeholder = "Buscar categoría...";
        categoriasGrid.style.display = "grid";
        recetasResultados.style.display = "none";
        // Restaurar búsqueda de categorías
        filterCategories(inputElement.value);
      } else {
        inputElement.placeholder = "Buscar recetas...";
        categoriasGrid.style.display = "none";
        recetasResultados.style.display = "grid";
        // Iniciar búsqueda de recetas
        searchRecetas(inputElement.value);
      }
    });
  });
  
  inputElement.addEventListener("input", (e) => {
    if (currentMode === "categorias") {
      filterCategories(e.target.value);
    } else {
      searchRecetas(e.target.value);
    }
  });

  inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentMode === "categorias") {
        navigateToSingleMatch();
      } else {
        navigateToSingleRecipeMatch(e.target.value);
      }
    }
  });

  // Clonar y reemplazar event listener del botón de búsqueda
  if (searchButton) {
    const newButton = searchButton.cloneNode(true);
    searchButton.parentNode.replaceChild(newButton, searchButton);
    
    newButton.addEventListener("click", () => {
      if (currentMode === "categorias") {
        navigateToSingleMatch();
      } else {
        navigateToSingleRecipeMatch(inputElement.value);
      }
    });
  }
});
