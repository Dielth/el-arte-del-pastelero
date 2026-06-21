# el-arte-del-pastelero
## version 2

# Implementación de Búsqueda de Recetas

Este documento describe los cambios realizados para implementar la funcionalidad de búsqueda de recetas en el sitio web "El Arte del Panadero y Pastelero".

## Resumen de Cambios

Se implementó un sistema de búsqueda que permite a los usuarios buscar tanto por categorías existentes como por recetas individuales, con un selector de modo para alternar entre ambos tipos de búsqueda.

## Archivos Modificados/Creados

### 1. `js/recetas-index.js` (NUEVO)
**Descripción:** Archivo JavaScript estático que contiene un índice de todas las recetas para búsqueda.

**Estructura del índice:**
- Cada receta es un objeto con las siguientes propiedades:
  - `nombre`: Nombre de la receta
  - `categoria`: Categoría a la que pertenece
  - `urlCategoria`: URL de la página de categoría
  - `ingredientes`: Array de ingredientes
  - `tecnica`: Array de pasos de preparación
  - `recomendaciones`: Array de recomendaciones
  - `keywords`: Array de palabras clave para búsqueda
  - `contenido`: String concatenado con todos los términos de búsqueda

**Contenido:** Más de 200 recetas extraídas de los archivos HTML de categorías.

### 2. `index.html`
**Cambios realizados:**

- **Línea 28:** Cambio de título de sección
  - Antes: `<h4>Categorías</h4>`
  - Después: `<h4>Seleccione un modo de búsqueda</h4>`

- **Líneas 30-32:** Selector de modo de búsqueda
  - Agregado `<div class="search-mode-selector">` con dos botones
  - Botón "Por categorías" (data-mode="categorias")
  - Botón "Por recetas" (data-mode="recetas")

- **Línea 286:** Contenedor de resultados de recetas
  - Agregado `<div class="recetas-resultados-grid" id="recetas-resultados" style="display: none;"></div>`

- **Líneas 292-294:** Carga de scripts
  - `<script src="js/recetas-index.js"></script>` (nuevo)
  - `<script src="js/main.js"></script>` (existente)
  - `<script src="js/recetas-search.js"></script>` (nuevo)

### 3. `css/styles.css`
**Cambios realizados:**

- **`.search-mode-selector`:** Estilos para el contenedor del selector de modo
  - Flexbox con max-width de 500px
  - Borde y fondo con colores del tema

- **`.mode-btn`:** Estilos para los botones del selector
  - Flex: 1 para que ocupen espacio igual
  - Transiciones suaves
  - Estado `.active` con color de acento

- **`.recetas-resultados-grid`:** Grid para resultados de recetas
  - Grid responsive con minmax(300px, 1fr)
  - Gap de 2rem

- **`.resultado-receta-card`:** Estilos para tarjetas de resultado
  - Fondo, bordes, sombras
  - Efecto hover con transformación
  - Cursor pointer

- **`.category-badge`:** Badge de categoría
  - Fondo con color secundario
  - Texto blanco, borde redondeado

- **`.ver-mas`:** Estilos para snippets de contenido
  - Resaltado de términos de búsqueda con `<strong>`

### 4. `js/recetas-search.js` (NUEVO)
**Descripción:** Archivo JavaScript que maneja la lógica de búsqueda de recetas y el cambio de modo.

**Funcionalidades implementadas:**

1. **Normalización de texto:** Función `normalizeText()` para eliminar acentos y convertir a minúsculas.

2. **Generación de snippets:** Función `createSnippet()` que crea fragmentos de contenido con resaltado del término de búsqueda.

3. **Búsqueda de recetas:** Función `searchRecetas()` que filtra el índice de recetas por:
   - Nombre de la receta
   - Categoría
   - Contenido (ingredientes y técnica)

4. **Redirección automática:** Función `navigateToSingleRecipeMatch()` que redirige automáticamente si hay una sola coincidencia.

5. **Cambio de modo:** Event listeners en los botones del selector que:
   - Actualizan el estado activo
   - Cambian el placeholder del input
   - Muestran/ocultan los grids correspondientes
   - Ejecutan la búsqueda correspondiente

6. **Reimplementación de búsqueda de categorías:** Funciones `filterCategories()` y `navigateToSingleMatch()` independientes de main.js.

7. **Gestión de event listeners:** Clonado y reemplazo de elementos input y button para evitar conflictos con main.js.

**Placeholder del input:**
- Modo Categorías: "Buscar categoría..."
- Modo Recetas: "Buscar recetas..."

**Inicialización:** El placeholder se inicializa al cargar la página como "Buscar categoría...".

### 5. `js/main.js`
**Cambios:** Ninguno. Este archivo permanece sin modificaciones. La lógica de búsqueda de categorías fue reimplementada en `recetas-search.js` para evitar conflictos.

## Funcionalidad Implementada

### Selector de Modo
- Permite alternar entre búsqueda de categorías y búsqueda de recetas
- Indicador visual del modo activo
- Cambio dinámico del placeholder del input

### Búsqueda de Categorías
- Filtra las tarjetas de categoría por nombre
- Muestra mensaje de "sin resultados" cuando no hay coincidencias
- Redirección automática si hay una sola coincidencia

### Búsqueda de Recetas
- Busca por nombre, categoría o ingredientes
- Muestra resultados en tarjetas interactivas
- Genera snippets con resaltado del término de búsqueda
- Redirección automática si hay una sola coincidencia
- Badge de categoría en cada resultado

## Compatibilidad

El nuevo sistema es completamente compatible con el código existente:
- `recetas-index.js` define la variable global `RECETAS_INDEX`
- `main.js` no usa `RECETAS_INDEX` y no se ve afectado
- `recetas-search.js` usa `RECETAS_INDEX` y reimplementa la lógica de categorías
- El orden de carga de scripts es correcto
- No hay conflictos de nombres de variables globales

## Estructura de Datos

### Objeto de Receta (RECETAS_INDEX)
```javascript
{
  nombre: "Nombre de la receta",
  categoria: "Nombre de la categoría",
  urlCategoria: "categorias/categoria.html",
  ingredientes: ["Ingrediente 1", "Ingrediente 2"],
  tecnica: ["Paso 1", "Paso 2"],
  recomendaciones: ["Recomendación 1"],
  keywords: ["keyword1", "keyword2"],
  contenido: "Texto concatenado para búsqueda"
}
```

## Notas Técnicas

- El sistema usa `cloneNode()` y `replaceChild()` para evitar conflictos de event listeners con main.js
- La normalización de texto usa `normalize("NFD")` y `replace(/[\u0300-\u036f]/g, "")` para eliminar acentos
- Los snippets generan contexto alrededor del término de búsqueda (50 caracteres antes y después)
- El sistema es completamente responsive gracias al uso de CSS Grid
