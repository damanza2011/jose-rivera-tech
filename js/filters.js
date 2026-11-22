/**
 * Motor de Búsqueda en Tiempo Real y Filtrado Multidimensional
 * Jose Rivera Tech - Faceted Search
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
      'Busca tu cable iPhone o Tipo-C...',
      'Busca cargador de carro turbo...',
      'Busca control Smart TV o de Aire...',
      'Busca audífonos Bluetooth TWS...',
      'Busca vidrios templados cerámicos...'
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
        pills.forEach(p => p.classList.remove('active-cat-pill', 'bg-dorado', 'text-black', 'border-dorado'));
        pills.forEach(p => p.classList.add('bg-slate-900', 'text-slate-300', 'border-slate-800'));
        
        pill.classList.remove('bg-slate-900', 'text-slate-300', 'border-slate-800');
        pill.classList.add('active-cat-pill', 'bg-dorado', 'text-black', 'border-dorado', 'font-bold');
        
        this.currentCategory = pill.dataset.category || 'todos';
        this.applyFilters();
      });
    });
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
        <article class="glass-vip-card rounded-3xl flex flex-col justify-between overflow-hidden group shadow-lg">
          
          <div>
            <!-- Contenedor Imagen Ratio 1:1 con Zoom Sutil -->
            <div class="relative w-full aspect-square overflow-hidden bg-black/80">
              <img src="${product.image}" 
                   alt="${product.title}" 
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                   loading="lazy">
              
              <!-- Badge de Compatibilidad VIP -->
              <span class="absolute top-3 left-3 bg-black/90 backdrop-blur-md text-dorado text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-dorado/40 shadow-gold-sm">
                ${product.compatibilityBadge}
              </span>

              <!-- Badge Rating VIP -->
              <div class="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-dorado/30 flex items-center gap-1 text-[11px] text-amber-300 font-bold shadow-sm">
                <span>★</span>
                <span>${product.rating}</span>
                <span class="text-slate-400 text-[10px]">(${product.reviewsCount})</span>
              </div>
            </div>

            <!-- Detalles del Producto -->
            <div class="p-4 sm:p-5 space-y-2.5">
              <span class="text-[10px] font-bold uppercase tracking-widest text-dorado block font-vip">${product.categoryName}</span>
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
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Precio Oficial:</span>
              <strong class="text-lg sm:text-xl font-extrabold text-gold-gradient font-vip">
                ${formatCurrency(product.price)}
              </strong>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <!-- Botón Agregar al Carrito -->
              <button onclick="ProductFilters.handleAddToCart('${product.id}')" 
                      class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white hover:text-dorado text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 border border-slate-700 hover:border-dorado/50 shadow-sm"
                      title="Agregar ítem al carrito">
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
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.661 1.442 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');
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

    this.setupCategoryPills();
    this.setupCompatibilityPills();
    this.applyFilters();
  }
};
