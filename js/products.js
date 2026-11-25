/**
 * Catálogo Oficial de Productos y Repuestos de Conveniencia
 * Jose Rivera Tech — Isla Comercial Jose Alfredo Rivera
 * WhatsApp Oficial: +57 301 476 8000
 * 
 * Buenas prácticas aplicadas:
 * - Fotografías 100% de tecnología genuina (Smartwatches, Power banks, cables, audio, controles y gadgets).
 * - Calidad HD verificada en Unsplash CDN con ratios y dimensiones consistentes (800px, q=85).
 * - Atributos completos para filtrado facetado, variantes de stock y visualización en vitrina de menú.
 */

const PRODUCTS = [
  // ==========================================
  // 1. SMARTWATCHES Y WEARABLES (ISLA TECH)
  // ==========================================
  {
    id: 'sw-ultra-titanium',
    title: 'Smartwatch Ultra AMOLED Titanium & Gold Edition',
    category: 'smartwatch',
    categoryName: 'Smartwatches y Wearables',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Compatible iOS & Android · Llamadas BT',
    specs: 'Pantalla AMOLED 2.02" HD | Bisel aleación titanio y acento oro | Sensor cardíaco, oxígeno, sueño y 100+ modos deportivos | Corona giratoria activa',
    price: 189900,
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'titanio-negro', name: 'Titanio con Pulso Negro Ocean' },
      { id: 'oro-champan', name: 'Bisel Oro con Pulso Metálico Milanesa (+ $15.000)' },
      { id: 'naranja-sport', name: 'Titanio con Pulso Naranja Aventura' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'sw-sport-active',
    title: 'Smartwatch Sport Pro Active Waterproof IP68',
    category: 'smartwatch',
    categoryName: 'Smartwatches y Wearables',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Batería 10 días · Notificaciones WhatsApp',
    specs: 'Pantalla táctil ultra fluida | Resistencia al agua IP68 | Control de música y cámara remota | Monitor de pasos y calorías 24/7',
    price: 129900,
    rating: 4.8,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1528837214451-5c143900b3a6?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-mate', name: 'Negro Obsidian Mate' },
      { id: 'gris-titanio', name: 'Gris Grafito Deportivo' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'sw-smartband-fitness',
    title: 'Pulsera Inteligente Smart Band Pro Pantalla Curva',
    category: 'smartwatch',
    categoryName: 'Smartwatches y Wearables',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Ultra Ligera · Batería 14 Días',
    specs: 'Panel OLED Curvo | Monitor SpO2 y frecuencia cardíaca | Carga magnética rápida en 45 min | Sumergible 5 ATM',
    price: 84900,
    rating: 4.7,
    reviewsCount: 51,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro', name: 'Negro Carbón' },
      { id: 'oro-rosa', name: 'Bisel Oro Rosa' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },

  // ==========================================
  // 2. POWER BANKS Y BATERÍAS PORTÁTILES (ISLA TECH)
  // ==========================================
  {
    id: 'pb-magsafe-10k',
    title: 'Power Bank Magnético MagSafe 10.000mAh Ultra Slim',
    category: 'powerbank',
    categoryName: 'Power Banks y Baterías',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'MagSafe iPhone 12 al 16 + Qi Android',
    specs: 'Carga inalámbrica magnética 15W + Salida Tipo-C PD 20W | Soporte kickstand integrado para ver videos | Grosor de solo 14mm',
    price: 94900,
    rating: 4.9,
    reviewsCount: 93,
    image: 'https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-titanio', name: 'Negro Titanio con Anillo Dorado' },
      { id: 'blanco-perla', name: 'Blanco Cerámica Mate' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'pb-turbo-20k-65w',
    title: 'Batería Portátil Turbo 20.000mAh PD 65W Display Digital',
    category: 'powerbank',
    categoryName: 'Power Banks y Baterías',
    compatibility: ['laptops', 'apple', 'android'],
    compatibilityBadge: 'Carga Laptops + Celulares a la vez',
    specs: 'Salida real 65W Power Delivery | Pantalla LED inteligente con porcentaje numérico | 3 puertos (2x USB-C + 1x USB-A QC 4.0)',
    price: 149900,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1566554738544-d962991c3fee?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'grafito-pro', name: 'Gris Grafito Antirrayones' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },

  // ==========================================
  // 3. CARGA Y CABLES TURBO
  // ==========================================
  {
    id: 'ch-gan-65w',
    title: 'Cargador Rápido GaN 65W Ultra Compacto',
    category: 'carga',
    categoryName: 'Carga y Cables Turbo',
    compatibility: ['apple', 'android', 'laptops'],
    compatibilityBadge: 'MacBook + iPhone 15/16 + Samsung S24',
    specs: '65W GaN III | Dual USB-C PD 3.0 + USB-A QC 4.0 | Control térmico inteligente disipador',
    price: 119900,
    rating: 4.9,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro', name: 'Negro Mate Carbón' },
      { id: 'dorado', name: 'Titanio Oro Edición' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'ch-gan-35w-dual',
    title: 'Cargador Doble Puerto 35W PD Turbo Fast',
    category: 'carga',
    categoryName: 'Carga y Cables Turbo',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'iPhone 11 al 16 + Galaxy Series',
    specs: '35W Dual Type-C | Carga simultánea 2 teléfonos sin recalentamiento | Clavija retráctil',
    price: 69900,
    rating: 4.8,
    reviewsCount: 58,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro', name: 'Negro Obsidian' },
      { id: 'blanco', name: 'Blanco Cerámico' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'ch-car-45w-metal',
    title: 'Cargador Vehicular Turbo 45W Full Metal',
    category: 'carga',
    categoryName: 'Carga y Cables Turbo',
    compatibility: ['carro', 'apple', 'android'],
    compatibilityBadge: 'Auto / Camioneta 12V-24V',
    specs: 'Cuerpo de aleación de zinc disipadora | Type-C PD 30W + USB QC3.0 18W | Luz LED ámbar sutil',
    price: 49900,
    rating: 4.9,
    reviewsCount: 49,
    image: 'https://images.unsplash.com/photo-1619459072761-496c0812331b?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'grafito', name: 'Gris Grafito Metal' },
      { id: 'oro', name: 'Dorado Metálico' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'cb-typec-typec-trenz',
    title: 'Cable Tipo-C a Tipo-C 100W Trenzado Blindado',
    category: 'carga',
    categoryName: 'Carga y Cables Turbo',
    compatibility: ['android', 'apple', 'laptops'],
    compatibilityBadge: 'iPhone 15/16 + Galaxy + Laptops',
    specs: 'Soporta 100W 5A E-Marker | Malla de nylon balístico antinudos | Conectores reforzados en aluminio',
    price: 29900,
    rating: 4.9,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: '1m', name: 'Longitud 1 Metro Blindado' },
      { id: '2m', name: 'Longitud 2 Metros Blindado (+ $8.000)' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'cb-typec-lightning-mfi',
    title: 'Cable Tipo-C a Lightning Reforzado Uso Rudo',
    category: 'carga',
    categoryName: 'Carga y Cables Turbo',
    compatibility: ['apple'],
    compatibilityBadge: 'iPhone 8 al 14 Pro Max + iPad',
    specs: 'Carga Rápida PD 20W-27W | Trenzado militar de alta durabilidad | Certificación de transferencia de datos',
    price: 29900,
    rating: 4.8,
    reviewsCount: 102,
    image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: '1m-negro', name: '1 Metro Negro Carbón' },
      { id: '2m-dorado', name: '2 Metros Oro y Negro (+ $8.000)' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },

  // ==========================================
  // 4. AUDIO HI-FI, PARLANTES Y MANOS LIBRES
  // ==========================================
  {
    id: 'spk-waterproof-20w',
    title: 'Parlante Bluetooth Portátil Resistente al Agua IPX7 Extra Bass',
    category: 'audio',
    categoryName: 'Audio y Parlantes',
    compatibility: ['apple', 'android', 'tv'],
    compatibilityBadge: 'Resistente al Agua IPX7 · Extra Bass 20W',
    specs: 'Sonido envolvente 360° con radiadores pasivos duales | Batería recargable hasta 15 horas continuas | Conexión TWS para emparejar 2 parlantes',
    price: 99900,
    rating: 4.9,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-obsidian', name: 'Negro Obsidian con Anillo Dorado' },
      { id: 'camuflado', name: 'Gris Titanio Urbano' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'aud-headphone-anc',
    title: 'Audífonos Diadema Inalámbricos ANC Hi-Res Luxury',
    category: 'audio',
    categoryName: 'Audio y Parlantes',
    compatibility: ['apple', 'android', 'laptops'],
    compatibilityBadge: 'Cancelación Activa de Ruido · 40 Horas',
    specs: 'Drivers de 40mm con certificación Hi-Res Audio | Almohadillas en piel sintética viscoelástica con memoria | Micrófono con IA para videollamadas',
    price: 139900,
    rating: 4.9,
    reviewsCount: 61,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-oro', name: 'Negro Mate con Acentos Dorados' },
      { id: 'plata-titanio', name: 'Plata Titanio Satinado' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'aud-tws-pro-anc',
    title: 'Audífonos Inalámbricos TWS Pro ANC + Estuche LED',
    category: 'audio',
    categoryName: 'Audio y Parlantes',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Bluetooth 5.3 + Cancelación de Ruido',
    specs: 'Cancelación Activa de Ruido (ANC) | Hasta 28 horas con estuche | Graves profundos | Micrófono HD doble',
    price: 89900,
    rating: 4.9,
    reviewsCount: 75,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-oro', name: 'Negro Mate con Borde Dorado' },
      { id: 'negro-puro', name: 'Negro Total Stealth' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'aud-tws-mini-ergonomic',
    title: 'Auriculares TWS Mini Sport Bluetooth 5.3',
    category: 'audio',
    categoryName: 'Audio y Parlantes',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Ajuste Ergonómico Cómodo',
    specs: 'Control táctil | Resistencia al sudor IPX5 | Estuche con indicador de batería LED numérico',
    price: 54900,
    rating: 4.7,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro', name: 'Negro Carbón' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },

  // ==========================================
  // 5. CONTROLES REMOTOS Y REPUESTOS DE HOGAR
  // ==========================================
  {
    id: 'ctrl-tv-samsung-smart',
    title: 'Control Remoto Universal Smart TV Samsung con Teclas Netflix/YouTube',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'Samsung LED / QLED / UHD',
    specs: 'Acceso directo a Netflix, Prime Video y YouTube | No requiere programación previa (Insertar pilas y usar)',
    price: 28900,
    rating: 4.9,
    reviewsCount: 148,
    image: 'https://images.unsplash.com/photo-1589693917111-f084cd040cdd?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'estandar', name: 'Diseño Slim Ergonómico' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'ctrl-tv-lg-smart-magic',
    title: 'Control Universal Smart TV LG con Teclas Rápidas WebOS',
    category: 'repuestos',
    categoryName: 'Controles y Repuestos',
    compatibility: ['tv'],
    compatibilityBadge: 'LG WebOS / OLED / NanoCell / 4K',
    specs: 'Reemplazo directo 100% compatible | Botonera suave de alta durabilidad | Respuesta infrarroja de largo alcance',
    price: 29900,
    rating: 4.8,
    reviewsCount: 108,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'estandar', name: 'Modelo Clásico LG' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
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
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'blanco-dorado', name: 'Blanco con Borde Dorado' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },

  // ==========================================
  // 6. GADGETS DE ISLA, PROTECCIÓN Y CREADORES
  // ==========================================
  {
    id: 'gad-ringlight-10',
    title: 'Aro de Luz LED 10" con Trípode Extensible y Control Remoto',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android'],
    compatibilityBadge: '3 Tonos de Luz + Soporte 360° para Celular',
    specs: '120 LEDs de alta fidelidad cromática | 3 temperaturas de color (Cálido, Neutro, Frío) y 10 niveles de brillo | Trípode graduable hasta 1.60m con obturador Bluetooth',
    price: 59900,
    rating: 4.9,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1673196649671-eb09066ad6c1?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'kit-completo', name: 'Kit Completo Aro 10" + Trípode Alto + Control' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: true
  },
  {
    id: 'gad-usb-dual-zinc',
    title: 'Memoria USB 3.2 Dual OTG 128GB Tipo-C Metálica Blindada',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android', 'laptops'],
    compatibilityBadge: 'Conector Dual USB-C + USB-A 3.2',
    specs: 'Cuerpo macizo en aleación de zinc disipadora | Velocidad de lectura hasta 150MB/s | Pasa fotos, videos y documentos del celular al computador al instante',
    price: 49900,
    rating: 4.9,
    reviewsCount: 130,
    image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: '128gb', name: 'Capacidad 128GB Metálica' },
      { id: '64gb', name: 'Capacidad 64GB Metálica (- $12.000)' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'gad-combo-slim',
    title: 'Combo Teclado y Mouse Inalámbrico Ultra Slim Silent Click',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['laptops', 'apple', 'android', 'tv'],
    compatibilityBadge: 'Recargable Tipo-C · Teclas Silenciosas',
    specs: 'Estructura en aluminio aeroespacial ultra delgada | Conexión inalámbrica 2.4GHz + Bluetooth | Clic silencioso de alta precisión',
    price: 89900,
    rating: 4.8,
    reviewsCount: 69,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-espacial', name: 'Negro Espacial Mate' },
      { id: 'plata-blanco', name: 'Plata y Blanco Minimalista' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'gad-soporte-magnetico-carro',
    title: 'Soporte Magnético Extra Fuerte para Rejilla de Carro',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['carro', 'apple', 'android'],
    compatibilityBadge: '6 Imanes Neodimio N52 Extra Fuertes',
    specs: 'Sujeción 360° ultra firme en baches y frenadas bruscas | Gancho con rosca micrométrica para cualquier rejilla | Incluye placas metálicas de lujo',
    price: 34900,
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'negro-oro', name: 'Negro con Acento Dorado' },
      { id: 'negro-mate', name: 'Negro Carbón Total' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'gad-hub-usbc-5en1',
    title: 'Hub Multipuerto USB-C 5 en 1 de Aluminio Aeroespacial',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['laptops', 'apple', 'android'],
    compatibilityBadge: 'HDMI 4K + USB 3.0 + SD/TF + PD 100W',
    specs: 'Conecta tu laptop o celular a pantalla o televisor 4K | Transfiere a 5Gbps | Chasis disipador de aluminio anodizado',
    price: 89900,
    rating: 4.8,
    reviewsCount: 57,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'gris-espacial', name: 'Gris Espacial Tech' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'prot-vidrio-ceramico-9d',
    title: 'Vidrio Templado Cerámico 9D Antigolpes Flexible',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Material Flexible Antirrotura en Bordes',
    specs: 'Polímero PMMA Cerámico 9D que no se astilla | Máxima transparencia óptica y sensibilidad táctil | Cobertura total de biseles',
    price: 18900,
    rating: 4.9,
    reviewsCount: 235,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'iphone', name: 'Para iPhone (Todos los modelos)' },
      { id: 'samsung-xiaomi', name: 'Para Samsung / Xiaomi / Motorola' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  },
  {
    id: 'prot-camara-zafiro',
    title: 'Protector Metálico Individual para Lentes de Cámara',
    category: 'gadgets',
    categoryName: 'Protección y Gadgets',
    compatibility: ['apple', 'android'],
    compatibilityBadge: 'Cristal de Zafiro Antirrayas + Aro Metálico',
    specs: 'Aro de aleación de aluminio con vidrio templado antireflejo | Ajuste hermético antipolvo sin distorsión de fotos nocturnas',
    price: 24900,
    rating: 4.9,
    reviewsCount: 172,
    image: 'https://images.unsplash.com/photo-1550918086-46846bda2bd6?auto=format&fit=crop&w=800&q=85',
    variants: [
      { id: 'oro', name: 'Dorado Luxury' },
      { id: 'negro', name: 'Negro Grafito' },
      { id: 'titanio', name: 'Titanio Natural' }
    ],
    inStock: true,
    fastDelivery: true,
    featuredInMenu: false
  }
];

// Función utilitaria pura para formatear moneda colombiana (COP)
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}
