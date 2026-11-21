/**
 * Módulo Reactivo del Carrito de Compras
 * Jose Rivera Tech - Persistencia en localStorage
 */

const Cart = {
  STORAGE_KEY: 'jrt_cart_items',
  items: [],

  init() {
    this.loadFromStorage();
    this.render();
    this.setupListeners();
  },

  loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      this.items = stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Error al cargar carrito de localStorage:', e);
      this.items = [];
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.error('Error al guardar carrito en localStorage:', e);
    }
  },

  /**
   * Agrega un ítem al carrito
   */
  addItem(productId, variantName = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const variant = variantName || (product.variants && product.variants.length > 0 ? product.variants[0].name : null);

    // Buscar si ya existe la misma combinación producto + variante
    const existingIndex = this.items.findIndex(
      item => item.id === productId && item.selectedVariant === variant
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        categoryName: product.categoryName,
        compatibilityBadge: product.compatibilityBadge,
        selectedVariant: variant,
        quantity: 1
      });
    }

    this.saveToStorage();
    this.render();
    this.showToast(`✓ Agregado: ${product.title}`);
  },

  updateQuantity(index, delta) {
    if (!this.items[index]) return;

    this.items[index].quantity += delta;
    if (this.items[index].quantity <= 0) {
      this.items.splice(index, 1);
    }

    this.saveToStorage();
    this.render();
  },

  removeItem(index) {
    if (!this.items[index]) return;
    const removedTitle = this.items[index].title;
    this.items.splice(index, 1);
    this.saveToStorage();
    this.render();
    this.showToast(`Eliminado: ${removedTitle}`, 'info');
  },

  clear() {
    this.items = [];
    this.saveToStorage();
    this.render();
  },

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },

  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  openDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (!drawer || !backdrop) return;

    backdrop.classList.remove('pointer-events-none', 'opacity-0');
    backdrop.classList.add('pointer-events-auto', 'opacity-100');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    document.body.classList.add('drawer-open');
  },

  closeDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (!drawer || !backdrop) return;

    backdrop.classList.remove('pointer-events-auto', 'opacity-100');
    backdrop.classList.add('pointer-events-none', 'opacity-0');
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    document.body.classList.remove('drawer-open');
  },

  render() {
    const count = this.getTotalCount();
    const subtotal = this.getSubtotal();

    // Actualizar contadores del header y dock flotante
    const badgeElements = document.querySelectorAll('.cart-counter-badge');
    badgeElements.forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
        badge.classList.add('animate-bounce-short');
      } else {
        badge.classList.add('hidden');
      }
    });

    // Actualizar Subtotal en drawer
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    if (subtotalEl) {
      subtotalEl.textContent = formatCurrency(subtotal);
    }

    // Actualizar Lista de Ítems
    const container = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartFooter');

    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (footer) footer.classList.add('opacity-50', 'pointer-events-none');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      if (footer) footer.classList.remove('opacity-50', 'pointer-events-none');

      container.innerHTML = this.items.map((item, idx) => `
        <div class="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-white">
          <img src="${item.image}" alt="${item.title}" class="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-700">
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-white truncate leading-snug">${item.title}</h4>
            ${item.selectedVariant ? `<p class="text-[10px] text-dorado font-medium mt-0.5 truncate">▫️ ${item.selectedVariant}</p>` : ''}
            <p class="text-xs font-semibold text-emerald-400 mt-1">${formatCurrency(item.price)}</p>
          </div>
          
          <div class="flex flex-col items-end gap-1.5 shrink-0">
            <!-- Botón Eliminar -->
            <button onclick="Cart.removeItem(${idx})" class="text-slate-400 hover:text-red-400 text-xs p-1 transition-colors" title="Eliminar ítem">
              ✕
            </button>
            
            <!-- Controles Cantidad -->
            <div class="flex items-center border border-slate-700 rounded-lg bg-black/40 overflow-hidden">
              <button onclick="Cart.updateQuantity(${idx}, -1)" class="px-2 py-0.5 text-xs text-slate-300 hover:bg-slate-800 active:bg-slate-700 transition-colors">−</button>
              <span class="px-2 text-xs font-bold text-white">${item.quantity}</span>
              <button onclick="Cart.updateQuantity(${idx}, 1)" class="px-2 py-0.5 text-xs text-slate-300 hover:bg-slate-800 active:bg-slate-700 transition-colors">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  },

  setupListeners() {
    // Escuchar botón Checkout WhatsApp
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.items.length === 0) return;

        const nameInput = document.getElementById('checkoutCustomerName');
        const deliveryRadios = document.getElementsByName('checkoutDeliveryMethod');
        const addressInput = document.getElementById('checkoutCustomerAddress');
        const notesInput = document.getElementById('checkoutCustomerNotes');

        let selectedDelivery = 'local';
        deliveryRadios.forEach(r => {
          if (r.checked) selectedDelivery = r.value;
        });

        const customerData = {
          name: nameInput ? nameInput.value : '',
          deliveryMethod: selectedDelivery,
          address: addressInput ? addressInput.value : '',
          notes: notesInput ? notesInput.value : ''
        };

        const waUrl = generateCartWhatsAppUrl(this.items, customerData);
        window.open(waUrl, '_blank');
      });
    }

    // Radio de entrega: mostrar u ocultar campo de dirección
    const deliveryRadios = document.getElementsByName('checkoutDeliveryMethod');
    const addressContainer = document.getElementById('checkoutAddressContainer');
    deliveryRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (addressContainer) {
          if (e.target.value === 'domicilio') {
            addressContainer.classList.remove('hidden');
          } else {
            addressContainer.classList.add('hidden');
          }
        }
      });
    });
  },

  showToast(message, type = 'success') {
    let toast = document.getElementById('cartToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cartToast';
      toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-black/95 text-white border border-dorado/60 px-4 py-2.5 rounded-full shadow-2xl text-xs font-bold tracking-wide flex items-center gap-2 transition-all duration-300 pointer-events-none opacity-0 translate-y-3';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-3');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-3');
    }, 2400);
  }
};
