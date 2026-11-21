/**
 * Catálogo de Productos y Repuestos de Conveniencia
 * Jose Rivera Tech
 * WhatsApp Oficial: +57 301 476 8000
 */

const PRODUCTS = [
  // ==========================================
  // 1. CARGA Y CABLES
  // ==========================================
  {
    id: 'ch-gan-65w',
    title: 'Cargador Rápido GaN 65W Ultra Compacto',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['apple', 'android', 'laptops'],
    compatibilityBadge: 'MacBook + iPhone 15/16 + Samsung S24',
    specs: '65W GaN III | Dual USB-C PD 3.0 + USB-A QC 4.0 | Control térmico inteligente',
    price: 119900,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Mate Carbón' },
      { id: 'dorado', name: 'Titanio Oro Edición' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ch-gan-35w-dual',
    title: 'Cargador Doble Puerto 35W PD Turbo Fast',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'iPhone 11 al 16 + Galaxy Series',
    specs: '35W Dual Type-C | Carga simultánea 2 teléfonos sin recalentamiento',
    price: 69900,
    rating: 4.8,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Obsidian' },
      { id: 'blanco', name: 'Blanco Cerámico' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ch-wall-20w',
    title: 'Cargador Rápido 20W Power Delivery',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Carga 50% en 30 minutos',
    specs: 'Salida USB-C 20W Certificada | Protección contra picos de voltaje',
    price: 39900,
    rating: 4.7,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Piano' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ch-car-45w-metal',
    title: 'Cargador Vehicular Turbo 45W Full Metal',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['carro', 'apple', 'android'],
    compatibilityBadge: 'Auto / Camioneta 12V-24V',
    specs: 'Cuerpo de aleación de zinc disipadora | Type-C PD 30W + USB QC3.0 18W | Luz LED ámbar',
    price: 49900,
    rating: 4.9,
    reviewsCount: 46,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'grafito', name: 'Gris Grafito Metal' },
      { id: 'oro', name: 'Dorado Metálico' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'cb-typec-typec-trenz',
    title: 'Cable Tipo-C a Tipo-C 100W Trenzado Blindado',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['android', 'apple', 'laptops'],
    compatibilityBadge: 'iPhone 15/16 + Galaxy + Laptops',
    specs: 'Soporta 100W 5A E-Marker | Malla de nylon balístico antinudos | Conectores reforzados',
    price: 29900,
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d8173087ec?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: '1m', name: 'Longitud 1 Metro' },
      { id: '2m', name: 'Longitud 2 Metros (+ $8.000)' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'cb-typec-lightning-mfi',
    title: 'Cable Tipo-C a Lightning Reforzado',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['apple'],
    compatibilityBadge: 'iPhone 8 al 14 Pro Max + iPad',
    specs: 'Carga Rápida PD 20W-27W | Trenzado militar de alta durabilidad',
    price: 29900,
    rating: 4.8,
    reviewsCount: 97,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: '1m-negro', name: '1 Metro Negro Carbón' },
      { id: '2m-dorado', name: '2 Metros Oro y Negro (+ $8.000)' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'cb-usba-typec-fast',
    title: 'Cable USB-A a Tipo-C 6A Carga Super Rápida',
    category: 'carga',
    categoryName: 'Carga y Cables',
    compatibility: ['android', 'carro'],
    compatibilityBadge: 'Xiaomi 67W / Huawei / Samsung',
    specs: '6A Turbo Charge | Ideal para conectar en carro y cargadores tradicionales',
    price: 24900,
    rating: 4.7,
    reviewsCount: 63,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: '1m', name: '1 Metro Negro Blindado' },
      { id: '2m', name: '2 Metros Uso Rudo (+ $6.000)' }
    ],
    inStock: true,
    fastDelivery: true
  },

  // ==========================================
  // 2. AUDIO Y MANOS LIBRES
  // ==========================================
  {
    id: 'aud-tws-pro-anc',
    title: 'Audífonos Inalámbricos TWS Pro ANC + Estuche',
    category: 'audio',
    categoryName: 'Audio y Manos Libres',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Bluetooth 5.3 + Cancelación de Ruido',
    specs: 'Cancelación Activa de Ruido (ANC) | Hasta 28 horas con estuche | Graves profundos | Micrófono HD',
    price: 89900,
    rating: 4.9,
    reviewsCount: 71,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro-oro', name: 'Negro Mate con Borde Dorado' },
      { id: 'negro-puro', name: 'Negro Total Stealth' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'aud-tws-mini-ergonomic',
    title: 'Auriculares TWS Mini Sport Bluetooth 5.3',
    category: 'audio',
    categoryName: 'Audio y Manos Libres',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Ajuste Ergonómico Cómodo',
    specs: 'Control táctil | Resistencia al sudor IPX5 | Estuche con indicador de batería LED',
    price: 54900,
    rating: 4.7,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Carbón' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'aud-wired-typec-dac',
    title: 'Audífonos Alámbricos Tipo-C con DAC Digital HD',
    category: 'audio',
    categoryName: 'Audio y Manos Libres',
    compatibility: ['android', 'apple'],
    compatibilityBadge: 'Para celulares sin puerto 3.5mm',
    specs: 'Chip DAC Hi-Res integrado | Micrófono con cancelación de eco en llamadas | Cable trenzado anti-tirones',
    price: 34900,
    rating: 4.8,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Metálico' },
      { id: 'dorado', name: 'Negro y Oro' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'aud-wired-jack-35mm',
    title: 'Manos Libres Clásico Jack 3.5mm Metálico',
    category: 'audio',
    categoryName: 'Audio y Manos Libres',
    compatibility: ['android', 'apple', 'tv'],
    compatibilityBadge: 'Conector Universal 3.5mm Aux',
    specs: 'Cuerpo metálico acoplador acústico | Botón multifunción para contestar llamadas y pausar música',
    price: 19900,
    rating: 4.6,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Carbón' }
    ],
    inStock: true,
    fastDelivery: true
  },

  // ==========================================
  // 3. CONTROLES REMOTOS Y REPUESTOS DE HOGAR
  // ==========================================
  {
    id: 'ctrl-tv-samsung-smart',
    title: 'Control Remoto Universal Smart TV Samsung',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'Samsung LED / QLED / UHD',
    specs: 'Acceso directo a Netflix, Prime Video y YouTube | No requiere programación previa (Insertar pilas y usar)',
    price: 28900,
    rating: 4.9,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'estandar', name: 'Diseño Slim Ergonómico' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ctrl-tv-lg-smart-magic',
    title: 'Control Universal Smart TV LG con Teclas Rápidas',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'LG WebOS / OLED / NanoCell / 4K',
    specs: 'Reemplazo directo 100% compatible | Botonera suave de alta durabilidad | Respuesta infrarroja de largo alcance',
    price: 29900,
    rating: 4.8,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'estandar', name: 'Modelo Clásico LG' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ctrl-roku-android-tv',
    title: 'Control Remoto de Reemplazo Roku / Android TV',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'Roku Express / Premiere / TV',
    specs: 'Botones directos de streaming | Enlace inmediato sin códigos confusos',
    price: 26900,
    rating: 4.8,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro', name: 'Negro Mate' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ctrl-ac-universal-multi',
    title: 'Control Universal para Aire Acondicionado 1000 en 1',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'Multimarca (LG, Samsung, Midea, etc.)',
    specs: 'Compatible con el 99% de marcas de mini split | Pantalla LCD retroiluminada | Búsqueda automática de código con 1 toque',
    price: 32900,
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'blanco-dorado', name: 'Blanco con Borde Dorado' }
    ],
    inStock: true,
    fastDelivery: true
  },

  // ==========================================
  // 4. PROTECCIÓN Y GADGETS
  // ==========================================
  {
    id: 'prot-vidrio-ceramico-9d',
    title: 'Vidrio Templado Cerámico 9D Antigolpes Flexible',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'No se quiebra en bordes',
    specs: 'Material PMMA Cerámico flexible de grado militar | No afecta la huella dactilar en pantalla | Cobertura total de biseles',
    price: 18900,
    rating: 4.9,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'iphone', name: 'Para iPhone (Consultar modelo exacto)' },
      { id: 'samsung-xiaomi', name: 'Para Samsung / Xiaomi / Motorola' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'prot-camara-zafiro',
    title: 'Protector Metálico Individual para Lentes de Cámara',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Cristal de Zafiro Antirrayas',
    specs: 'Aro de aleación de aluminio con vidrio templado antireflejo | No altera la calidad de fotos con flash nocturno',
    price: 24900,
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'oro', name: 'Dorado Luxury' },
      { id: 'negro', name: 'Negro Grafito' },
      { id: 'titanio', name: 'Titanio Natural' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'gad-soporte-magnetico-carro',
    title: 'Soporte Magnético Extra Fuerte para Rejilla de Carro',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['carro', 'apple', 'android'],
    compatibilityBadge: '6 Imanes Neodimio N52',
    specs: 'Sujeción 360° ultra firme en baches y frenadas | Gancho ajustable para cualquier tipo de rejilla | Incluye placas metálicas',
    price: 34900,
    rating: 4.9,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'negro-oro', name: 'Negro con Acento Dorado' },
      { id: 'negro-mate', name: 'Negro Carbón Total' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'gad-hub-usbc-5en1',
    title: 'Hub Multipuerto USB-C 5 en 1 de Aluminio',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['laptops', 'apple', 'android'],
    compatibilityBadge: 'HDMI 4K + USB 3.0 + SD/TF + PD 100W',
    specs: 'Conecta tu laptop o celular a pantalla externa | Transfiere archivos a 5Gbps | Carcasa disipadora de aluminio aeroespacial',
    price: 89900,
    rating: 4.8,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'gris-espacial', name: 'Gris Espacial Tech' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'gad-adaptador-otg-metal',
    title: 'Adaptador USB OTG Metálico Miniatura (Tipo-C a USB-A)',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['android', 'apple'],
    compatibilityBadge: 'Conecta Memorias USB al Teléfono',
    specs: 'Pasa fotos y documentos de una memoria USB a tu iPhone 15/16 o Android sin computador | Cuerpo de zinc de 2cm',
    price: 14900,
    rating: 4.7,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=600&q=80',
    variants: [
      { id: 'dorado', name: 'Dorado Metálico' },
      { id: 'negro', name: 'Negro Mate' }
    ],
    inStock: true,
    fastDelivery: true
  }
];

// Función utilitaria para formatear moneda colombiana (COP)
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}
