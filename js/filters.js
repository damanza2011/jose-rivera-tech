/**
 * Motor de Búsqueda en Tiempo Real, Filtrado Multidimensional y Vitrina de Menú
 * Jose Rivera Tech — Isla Comercial Jose Alfredo Rivera
 * 
 * Buenas prácticas aplicadas:
 * - Sanitización estricta de entradas (prevención XSS).
 * - Manejo defensivo de imágenes rotas con placeholder elegante y fallback.
 * - Soporte para visualización en Modal HD (lightbox para fotos en alta calidad).
 * - Sincronización bidireccional entre Menú de Navegación, Píldoras de Categoría y Grid.
 * - Inicialización modular y eventos desacoplados.
 */

const ProductFilters = {
  currentCategory: 'todos',
  currentCompatibility: 'all',
  searchQuery: '',
  sortBy: 'featured',

  init() {
    this.setupRotatingPlaceholder();
    this.setupCategoryPills();
    this.setupCompatibilityPills();
    this.setupSearchInput();
    this.setupSortSelector();
    this.setupPhotoModal();
    this.renderMenuShowcase();
    this.applyFilters();
  },

  /**
   * Sanitiza entradas de usuario para prevenir XSS
   */
  sanitize(str) {
    if (!str) return '';
    return str.replace(/[<>&"']/g, (match) => {
      const entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return entities[match];
    }).trim();
  },

  setupRotatingPlaceholder() {
    const input = document.getElementById('mainSearchInput');
    if (!input) return;

    const placeholders = [
      'Busca Smartwatch Ultra Titanium...',
      'Busca Power Bank MagSafe 10.000mAh...',
      'Busca cargador GaN 65W o cable blindado...',
      'Busca parlante bluetooth o audífonos ANC...',
      'Busca aro de luz LED o memoria USB Tipo-C...',
      'Busca control Smart TV o de Aire...'
    ];

    let index = 0;
    setInterval(() => {
      if (document.activeElement !== input && input.value === '') {
        index = (index + 1) % placeholders.length;
        input.placeholder = placeholders[index];
      }
    }, 3200);
  },

  setupCategoryPills() {
    const pills = document.querySelectorAll('.category-filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.dataset.category || 'todos';
        this.setCategory(cat);
      });
    });
  },

  setCategory(category) {
    this.currentCategory = category;
    
    // Actualizar estados visuales de las píldoras
    const pills = document.querySelectorAll('.category-filter-pill');
    pills.forEach(p => {
      const isMatch = (p.dataset.category === category);
      p.classList.toggle('active-cat-pill', isMatch);
      p.classList.toggle('bg-dorado', isMatch);
      p.classList.toggle('text-black', isMatch);
      p.classList.toggle('border-dorado', isMatch);
      p.classList.toggle('font-extrabold', isMatch);
      p.classList.toggle('bg-obsidian-card', !isMatch);
      p.classList.toggle('text-slate-300', !isMatch);
      p.classList.toggle('border-slate-800', !isMatch);
    });

    // Actualizar enlaces del menú de navegación superior si existen
    const navLinks = document.querySelectorAll('.header-nav-category-link');
    navLinks.forEach(link => {
      const isMatch = (link.dataset.category === category);
      link.classList.toggle('text-dorado', isMatch);
      link.classList.toggle('border-b-2', isMatch);
      link.classList.toggle('border-dorado', isMatch);
      link.classList.toggle('text-slate-300', !isMatch);
    });

    this.applyFilters();
  },

  filterByCategoryAndScroll(category) {
    this.setCategory(category);
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Cerrar menú móvil si está abierto
    const mobileMenu = document.getElementById('mobileNavMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  },

  setupCompatibilityPills() {
    const compatPills = document.querySelectorAll('.compat-filter-pill');
    compatPills.forEach(pill => {
      pill.addEventListener('click', () => {
        compatPills.forEach(p => {
          p.classList.remove('bg-dorado/20', 'text-dorado', 'border-dorado');
          p.classList.add('bg-black/60', 'text-slate-400', 'border-slate-800');
        });

        pill.classList.remove('bg-black/60', 'text-slate-400', 'border-slate-800');
        pill.classList.add('bg-dorado/20', 'text-dorado', 'border-dorado', 'font-semibold');

        this.currentCompatibility = pill.dataset.compat || 'all';
        this.applyFilters();
      });
    });
  },

  setupSearchInput() {
    const input = document.getElementById('mainSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (input) {
      input.addEventListener('input', (e) => {
        this.searchQuery = this.sanitize(e.target.value).toLowerCase();
        if (clearBtn) {
          clearBtn.classList.toggle('hidden', this.searchQuery === '');
        }
        this.applyFilters();
      });
    }

    if (clearBtn && input) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        this.searchQuery = '';
        clearBtn.classList.add('hidden');
        input.focus();
        this.applyFilters();
      });
    }
  },

  setupSortSelector() {
    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.applyFilters();
      });
    }
  },

  applyFilters() {
    let filtered = PRODUCTS.filter(product => {
      // 1. Filtro por Categoría
      const matchesCategory = (this.currentCategory === 'todos') || (product.category === this.currentCategory);

      // 2. Filtro por Compatibilidad
      const matchesCompat = (this.currentCompatibility === 'all') || 
        (product.compatibility && product.compatibility.includes(this.currentCompatibility));

      // 3. Filtro por Búsqueda de Texto
      const matchesSearch = !this.searchQuery || 
        product.title.toLowerCase().includes(this.searchQuery) ||
        product.specs.toLowerCase().includes(this.searchQuery) ||
        product.categoryName.toLowerCase().includes(this.searchQuery) ||
        product.compatibilityBadge.toLowerCase().includes(this.searchQuery);

      return matchesCategory && matchesCompat && matchesSearch;
    });

    // Ordenamiento
    if (this.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    this.renderCatalog(filtered);
  },

  renderCatalog(products) {
    const container = document.getElementById('productsGridContainer');
    const emptyState = document.getElementById('catalogEmptyState');
    const countBadge = document.getElementById('resultsCountBadge');

    if (countBadge) {
      countBadge.textContent = `${products.length} producto${products.length === 1 ? '' : 's'}`;
    }

    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    container.innerHTML = products.map(product => {
      const hasVariants = product.variants && product.variants.length > 1;

      return `
        <article class="glass-vip-card rounded-3xl flex flex-col justify-between overflow-hidden group shadow-lg transition-all duration-300">
          
          <div>
            <!-- Contenedor Imagen Ratio 1:1 con Zoom Sutil y Botón de Foto HD -->
            <div class="relative w-full aspect-square overflow-hidden bg-black/90 cursor-pointer" onclick="ProductFilters.openPhotoModal('${product.id}')" title="Clic para ampliar foto en Alta Resolución">
              <img src="${product.image}" 
                   alt="${product.title}" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                   loading="lazy"
                   decoding="async"
                   onerror="ProductFilters.handleImageError(this, '${product.title}')">
              
              <!-- Badge de Compatibilidad VIP -->
              <span class="absolute top-3 left-3 bg-black/90 backdrop-blur-md text-dorado text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-dorado/40 shadow-gold-sm">
                ${product.compatibilityBadge}
              </span>

              <!-- Botón flotante para ver Foto en Alta Calidad (HD) -->
              <button type="button" 
                      onclick="event.stopPropagation(); ProductFilters.openPhotoModal('${product.id}')" 
                      class="absolute top-3 right-3 bg-black/80 hover:bg-dorado hover:text-black text-dorado-champan backdrop-blur-md px-2.5 py-1 rounded-full border border-dorado/30 text-[10px] font-bold flex items-center gap-1 shadow-sm transition-all"
                      title="Ver fotografía en Alta Definición">
                <span>🔍</span>
                <span class="hidden sm:inline">Foto HD</span>
              </button>

              <!-- Badge Rating VIP -->
              <div class="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-dorado/30 flex items-center gap-1 text-[11px] text-amber-300 font-bold shadow-sm">
                <span>★</span>
                <span>${product.rating}</span>
                <span class="text-slate-400 text-[10px]">(${product.reviewsCount})</span>
              </div>

              <!-- Indicador de Isla Tech Oficial -->
              <div class="absolute bottom-3 left-3 bg-dorado/90 text-black px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-widest shadow-sm">
                Isla Tech
              </div>
            </div>

            <!-- Detalles del Producto -->
            <div class="p-4 sm:p-5 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase tracking-widest text-dorado block font-vip">${product.categoryName}</span>
                <span class="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  En Stock
                </span>
              </div>

              <h3 class="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-dorado transition-colors line-clamp-2">
                ${product.title}
              </h3>
              
              <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">
                ${product.specs}
              </p>

              <!-- Selector de Variantes (si tiene más de 1) -->
              ${hasVariants ? `
                <div class="pt-2">
                  <label class="block text-[10px] uppercase font-bold text-slate-300 mb-1">Elige Variante VIP:</label>
                  <select id="variant-select-${product.id}" class="w-full text-xs bg-black/90 border border-dorado/30 rounded-xl px-2.5 py-1.5 text-white focus:outline-none focus:border-dorado shadow-inner">
                    ${product.variants.map(v => `<option value="${v.name}">${v.name}</option>`).join('')}
                  </select>
                </div>
              ` : `
                <input type="hidden" id="variant-select-${product.id}" value="${product.variants[0].name}">
              `}
            </div>
          </div>

          <!-- Pie de Tarjeta: Precios y Acciones VIP -->
          <div class="p-4 sm:p-5 pt-0 border-t border-slate-800/80 mt-3 space-y-3">
            <div class="flex items-baseline justify-between pt-2">
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Precio Isla:</span>
              <strong class="text-lg sm:text-xl font-extrabold text-gold-gradient font-vip">
                ${formatCurrency(product.price)}
              </strong>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <!-- Botón Agregar al Carrito -->
              <button onclick="ProductFilters.handleAddToCart('${product.id}')" 
                      class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white hover:text-dorado text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 border border-slate-700 hover:border-dorado/50 shadow-sm"
                      title="Agregar al carrito">
                <span>🛒</span>
                <span>Agregar</span>
              </button>

              <!-- Botón Pedir Directo por WhatsApp VIP -->
              <button onclick="ProductFilters.handleDirectWhatsApp('${product.id}')" 
                      class="btn-gold-vip w-full py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-gold-sm"
                      title="Pedir inmediatamente por WhatsApp">
                <svg class="w-3.5 h-3.5 fill-current text-obsidian" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.661 1.442 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                <span>Pedir VIP</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');
  },

  /**
   * Renderiza los productos destacados directamente en la vitrina del menú superior
   */
  renderMenuShowcase() {
    const container = document.getElementById('menuFeaturedProductsGrid');
    if (!container) return;

    // Productos seleccionados para la primera muestra en el menú
    const menuProducts = PRODUCTS.filter(p => p.featuredInMenu).slice(0, 6);

    container.innerHTML = menuProducts.map(p => `
      <div class="flex items-center gap-3 p-2.5 rounded-2xl bg-black/70 border border-dorado/20 hover:border-dorado/60 transition-all group cursor-pointer"
           onclick="ProductFilters.openPhotoModal('${p.id}')">
        <div class="w-14 h-14 rounded-xl overflow-hidden bg-black/80 shrink-0 border border-dorado/30 relative">
          <img src="${p.image}" 
               alt="${p.title}" 
               class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
               loading="lazy"
               onerror="ProductFilters.handleImageError(this, '${p.title}')">
          <span class="absolute bottom-0 right-0 bg-black/80 text-[8px] text-amber-300 px-1 font-bold">★${p.rating}</span>
        </div>
        <div class="flex-1 min-w-0">
          <span class="text-[9px] uppercase font-bold text-dorado block truncate">${p.categoryName}</span>
          <h4 class="text-xs font-bold text-white group-hover:text-dorado transition-colors truncate">${p.title}</h4>
          <div class="flex items-center justify-between mt-0.5">
            <span class="text-xs font-extrabold text-gold-gradient font-vip">${formatCurrency(p.price)}</span>
            <span class="text-[9px] text-dorado-champan font-bold hover:underline">Ver Foto HD →</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  /**
   * Fallback defensivo para imágenes que puedan fallar por conectividad
   */
  handleImageError(imgElement, productTitle) {
    imgElement.onerror = null;
    imgElement.src = 'assets/logo-jr.jpg';
    imgElement.classList.remove('object-cover');
    imgElement.classList.add('object-contain', 'p-4', 'bg-black');
    imgElement.title = `Foto en muestra para ${productTitle}`;
  },

  /**
   * Modal de Fotografía en Alta Calidad (Lightbox VIP)
   */
  setupPhotoModal() {
    // Si no existe el contenedor del modal en el DOM, se crea dinámicamente
    if (document.getElementById('photoModalBackdrop')) return;

    const modalHTML = `
      <div id="photoModalBackdrop" 
           class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-3 sm:p-6"
           onclick="if(event.target === this) ProductFilters.closePhotoModal()">
        
        <div id="photoModalContent" 
             class="relative w-full max-w-3xl bg-obsidian-card border border-dorado/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform scale-95 transition-transform duration-300 max-h-[92vh]">
          
          <!-- Botón de Cerrar -->
          <button onclick="ProductFilters.closePhotoModal()" 
                  class="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/80 text-white hover:text-dorado border border-dorado/30 flex items-center justify-center text-sm font-bold shadow-lg"
                  aria-label="Cerrar vista de fotografía">
            ✕
          </button>

          <!-- Imagen en Alta Definición -->
          <div class="md:w-1/2 bg-black relative flex items-center justify-center min-h-[260px] md:min-h-[420px] overflow-hidden">
            <img id="photoModalImage" 
                 src="" 
                 alt="" 
                 class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 bg-black/80 border border-dorado/40 text-dorado text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              Muestra Fotográfica HD
            </span>
          </div>

          <!-- Información del Producto y Acciones Directas -->
          <div class="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-4 overflow-y-auto">
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span id="photoModalCategory" class="text-[10px] font-bold uppercase tracking-widest text-dorado font-vip"></span>
                <span class="text-slate-500 text-xs">·</span>
                <span id="photoModalBadge" class="text-[10px] text-emerald-400 font-bold"></span>
              </div>

              <h2 id="photoModalTitle" class="text-base sm:text-lg font-bold text-white font-vip leading-snug"></h2>

              <p id="photoModalSpecs" class="text-xs text-slate-300 leading-relaxed"></p>

              <div class="pt-2">
                <span class="text-[10px] uppercase font-bold text-slate-400 block mb-1">Precio Oficial Isla Jose Alfredo Rivera:</span>
                <div id="photoModalPrice" class="text-2xl font-extrabold text-gold-gradient font-vip"></div>
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="space-y-2 pt-3 border-t border-slate-800">
              <button id="photoModalAddCartBtn" 
                      class="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white hover:text-dorado text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-700">
                <span>🛒</span>
                <span>Agregar al Pedido</span>
              </button>

              <button id="photoModalWhatsAppBtn" 
                      class="btn-gold-vip w-full py-3 rounded-2xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2">
                <svg class="w-4 h-4 fill-current text-obsidian" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.661 1.442 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                <span>Pedir por WhatsApp Inmediato</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  },

  openPhotoModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    this.setupPhotoModal();

    const backdrop = document.getElementById('photoModalBackdrop');
    const content = document.getElementById('photoModalContent');
    const img = document.getElementById('photoModalImage');
    const cat = document.getElementById('photoModalCategory');
    const badge = document.getElementById('photoModalBadge');
    const title = document.getElementById('photoModalTitle');
    const specs = document.getElementById('photoModalSpecs');
    const price = document.getElementById('photoModalPrice');
    const addCartBtn = document.getElementById('photoModalAddCartBtn');
    const waBtn = document.getElementById('photoModalWhatsAppBtn');

    if (!backdrop || !content) return;

    img.src = product.image;
    img.alt = product.title;
    cat.textContent = product.categoryName;
    badge.textContent = product.compatibilityBadge;
    title.textContent = product.title;
    specs.textContent = product.specs;
    price.textContent = formatCurrency(product.price);

    addCartBtn.onclick = () => {
      Cart.addItem(product.id, product.variants[0].name);
      this.closePhotoModal();
    };

    waBtn.onclick = () => {
      const url = generateDirectProductWhatsAppUrl(product, product.variants[0].name);
      window.open(url, '_blank');
    };

    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
  },

  closePhotoModal() {
    const backdrop = document.getElementById('photoModalBackdrop');
    const content = document.getElementById('photoModalContent');
    if (!backdrop || !content) return;

    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
  },

  getSelectedVariant(productId) {
    const select = document.getElementById(`variant-select-${productId}`);
    return select ? select.value : null;
  },

  handleAddToCart(productId) {
    const variant = this.getSelectedVariant(productId);
    Cart.addItem(productId, variant);
  },

  handleDirectWhatsApp(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const variant = this.getSelectedVariant(productId);
    const url = generateDirectProductWhatsAppUrl(product, variant);
    window.open(url, '_blank');
  },

  resetAllFilters() {
    this.currentCategory = 'todos';
    this.currentCompatibility = 'all';
    this.searchQuery = '';
    this.sortBy = 'featured';

    const input = document.getElementById('mainSearchInput');
    if (input) input.value = '';

    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');

    this.setCategory('todos');
    this.setupCompatibilityPills();
    this.applyFilters();
  }
};
