# Jose Rivera Tech — Isla Tienda Jose Alfredo Rivera

Single Page Application (SPA) ultrarrápida, modular y orientada a conversión para la isla comercial y tienda de tecnología de **Jose Alfredo Rivera**.

- **WhatsApp Oficial:** `+57 301 476 8000` (`301 4768000`)
- **Estética de Marca:** Dorado y Negro Cyber Luxury (Oro Metálico `#D4AF37` y Negro Obsidian `#050507`).
- **Colección de Isla:** Smartwatches AMOLED, Power Banks MagSafe, Cargadores GaN 65W, Audio Hi-Fi, Controles Smart TV y Gadgets para Creadores.

## Buenas Prácticas de Programación Aplicadas

1. **Modularidad y Separación de Responsabilidades:**
   - `js/products.js`: Catálogo de datos inmutable, estructurado y validado con 24 productos de alta demanda y soporte para variantes.
   - `js/filters.js`: Motor de búsqueda en tiempo real, filtrado multidimensional facetado (categoría, compatibilidad, ordenamiento) y control de la vitrina del menú.
   - `js/cart.js`: Carrito de compras reactivo con persistencia en `localStorage`, cálculo en tiempo real y contador animado.
   - `js/whatsapp.js`: Generador de pedidos estructurados para conversión directa en WhatsApp (+57 301 476 8000).
   - `css/styles.css`: Estilos desacoplados de alta gama con micro-interacciones, efectos glassmorphism y shimmer dorado.

2. **Rendimiento y Calidad Fotográfica (Primera Muestra HD):**
   - Fotografías seleccionadas en alta definición (resolución optimizada `800px`, `q=85`).
   - Carga diferida (`loading="lazy"` y `decoding="async"`).
   - Manejo defensivo contra fallos de red con fallback automático de marca (`handleImageError`).
   - Modal de visualización HD (Lightbox Zoom) para inspeccionar los detalles de cada producto en pantalla completa.

3. **Menú de Productos y Vitrina Interactiva:**
   - Barra de navegación en el encabezado con accesos directos por categoría.
   - Desplegable interactivo **"✨ Vitrina Isla (Primera Muestra)"** con productos insignia destacados para exhibición inmediata.
   - Sincronización bidireccional entre el menú superior y las píldoras de filtrado facetado.
   - Menú móvil optimizado con apertura y cierre fluidos.
