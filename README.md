# el-arte-del-pastelero
## version 3

# Implementación de Búsqueda de Recetas

Este documento describe los cambios realizados para implementar la funcionalidad de búsqueda de recetas en el sitio web "El Arte del Panadero y Pastelero".

## Resumen de Cambios

Se implementó un sistema de búsqueda que permite a los usuarios buscar tanto por categorías existentes como por recetas individuales, con un selector de modo para alternar entre ambos tipos de búsqueda.

## Actualizaciones Recientes (Junio 2026)

### Corrección de Búsqueda en GitHub Pages
**Problema:** La funcionalidad de búsqueda funcionaba correctamente en local pero fallaba en GitHub Pages después del despliegue.

**Diagnóstico:** Se identificó que el problema estaba en la capa de render/visibilidad, no en la lógica de búsqueda. Los console.log de diagnóstico confirmaron que:
- `filterCategories()` se ejecutaba correctamente
- `searchRecetas()` se ejecutaba correctamente
- `RECETAS_INDEX` cargaba correctamente
- El filtrado lógico funcionaba, pero no se reflejaba visualmente

**Solución aplicada:**
1. **Eliminación de `cloneNode()`/`replaceChild()`:** Se eliminó el clonado de elementos DOM en `recetas-search.js` para evitar conflictos de event listeners.
2. **Clases CSS explícitas:** Se agregaron clases `.container-visible` y `.container-hidden` con `!important` para controlar la visibilidad de contenedores en lugar de estilos inline.
3. **Inicialización con clases:** Se agregaron las clases CSS correspondientes a `#categorias` y `#recetas-resultados` en `index.html`.

### Ajustes del Header en index.html
**Problema:** El header principal en index.html tenía comportamiento fijo (`position: fixed`) que causaba superposición con el contenido.

**Solución aplicada:**
1. **Clase CSS `.header-static`:** Se agregó una clase CSS en `styles.css` que sobrescribe `position: fixed` a `position: static` para el header en index.html.
2. **Modificación de `updateHeaderHeight()`:** Se modificó la función en `main.js` para no aplicar `padding-top` y `scrollPaddingTop` cuando se detecta index.html (verificando si existe `#categorias`).
3. **Aplicación de clase:** Se agregó la clase `header-static` al elemento `<header>` en `index.html`.

**Resultado:**
- En index.html: El header permanece estático en el flujo normal del documento, no sigue al scroll y no superpone contenido.
- En categorías y demás páginas: El comportamiento reactivo del header (ocultarse al bajar, reaparecer al subir) se mantiene intacto.

### Limpieza de Código
- Se eliminaron todos los `console.log` de diagnóstico del código para dejar la consola limpia en producción.
- Se mantienen los `console.error` para detectar errores reales (falta de elementos DOM, RECETAS_INDEX no disponible).

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

- **Línea 16:** Header con clase estática
  - `<header class="header-static">` para comportamiento estático en index.html

- **Línea 28:** Cambio de título de sección
  - Antes: `<h4>Categorías</h4>`
  - Después: `<h4>Seleccione un modo de búsqueda</h4>`

- **Líneas 30-32:** Selector de modo de búsqueda
  - Agregado `<div class="search-mode-selector">` con dos botones
  - Botón "Por categorías" (data-mode="categorias")
  - Botón "Por recetas" (data-mode="recetas")

- **Línea 57:** Grid de categorías con clase visible
  - `<div class="recetas-grid container-visible" id="categorias">`

- **Línea 286:** Contenedor de resultados de recetas
  - `<div class="recetas-resultados-grid container-hidden" id="recetas-resultados">`

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

- **`.hidden-category`:** Clase para ocultar categorías filtradas
  - `display: none !important` para asegurar visibilidad

- **`.container-visible` y `.container-hidden`:** Clases para controlar visibilidad de contenedores
  - `.container-visible`: `display: grid !important`
  - `.container-hidden`: `display: none !important`
  - Reemplazan estilos inline para mayor estabilidad

- **`.header-static`:** Clase para header estático en index.html
  - `position: static !important`
  - `transform: none !important`
  - `opacity: 1 !important`

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
   - Muestran/ocultan los grids correspondientes usando clases CSS
   - Ejecutan la búsqueda correspondiente

6. **Reimplementación de búsqueda de categorías:** Funciones `filterCategories()` y `navigateToSingleMatch()` independientes de main.js.

7. **Gestión de visibilidad:** Uso de clases CSS `.container-visible` y `.container-hidden` en lugar de estilos inline para mayor estabilidad.

**Placeholder del input:**
- Modo Categorías: "Buscar categoría..."
- Modo Recetas: "Buscar recetas..."

**Inicialización:** El placeholder se inicializa al cargar la página como "Buscar categoría...".

### 5. `js/main.js`
**Cambios realizados:**

- **Desactivación de scroll ocultable en index.html:**
  - Se agregó condición en el event listener de scroll para detectar index.html
  - Si existe `#categorias` (solo en index.html), se retorna antes de aplicar lógica de ocultar header
  - El comportamiento reactivo del header se mantiene en categorías y demás páginas

- **Modificación de `updateHeaderHeight()`:**
  - Se agregó condición para no aplicar `padding-top` y `scrollPaddingTop` en index.html
  - Si existe `#categorias`, se omite la aplicación de padding dinámico
  - Esto evita superposición de contenido en index.html donde el header es estático

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

- El sistema usa clases CSS explícitas (`.container-visible`, `.container-hidden`) para controlar la visibilidad de contenedores en lugar de estilos inline
- La normalización de texto usa `normalize("NFD")` y `replace(/[\u0300-\u036f]/g, "")` para eliminar acentos
- Los snippets generan contexto alrededor del término de búsqueda (50 caracteres antes y después)
- El sistema es completamente responsive gracias al uso de CSS Grid
- El header tiene comportamiento condicional: estático en index.html, reactivo en categorías y demás páginas
- La detección de index.html se realiza verificando la existencia del elemento `#categorias`
