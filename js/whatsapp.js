/**
 * Generador de Mensajes y Enlaces Estructurados para WhatsApp
 * Jose Rivera Tech - Tel / WhatsApp: +57 301 476 8000
 */

const WHATSAPP_CONFIG = {
  phoneNumber: '573014768000',
  phoneFormatted: '+57 301 476 8000',
  brandName: 'JR Accesorios para Celulares — Jose Rivera Tech'
};

/**
 * Genera el enlace de WhatsApp para un pedido completo del Carrito
 * @param {Array} items - Lista de ítems en el carrito
 * @param {Object} customerData - Datos del cliente y método de entrega
 * @returns {string} URL formateada para WhatsApp
 */
function generateCartWhatsAppUrl(items, customerData) {
  if (!items || items.length === 0) return '#';

  const now = new Date();
  const dateStr = now.toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  let message = `⚡ *NUEVO PEDIDO — ${WHATSAPP_CONFIG.brandName.toUpperCase()}* ⚡\n`;
  message += `📅 _${dateStr} - ${timeStr}_\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  message += `👤 *DATOS DEL CLIENTE:*\n`;
  message += `• *Nombre:* ${customerData.name ? customerData.name.trim() : 'Cliente Web'}\n`;
  message += `• *Entrega:* ${customerData.deliveryMethod === 'local' ? '🏢 Retiro Inmediato en Local / Isla' : '🛵 Envío a Domicilio'}\n`;
  
  if (customerData.deliveryMethod === 'domicilio' && customerData.address) {
    message += `• *Dirección:* ${customerData.address.trim()}\n`;
  }
  if (customerData.notes) {
    message += `• *Nota / Celular del cliente:* ${customerData.notes.trim()}\n`;
  }

  message += `\n📦 *PRODUCTOS SOLICITADOS:* (${items.reduce((s, i) => s + i.quantity, 0)} ítems)\n`;
  
  items.forEach((item, index) => {
    message += `\n${index + 1}. *${item.title}*\n`;
    if (item.selectedVariant) {
      message += `   ▫️ *Variante:* ${item.selectedVariant}\n`;
    }
    message += `   ▫️ *Cant:* ${item.quantity} x ${formatCurrency(item.price)} = *${formatCurrency(item.price * item.quantity)}*\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR: ${formatCurrency(total)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `Hola Jose Rivera Tech, acabo de armar este pedido en la página y deseo confirmarlo para entrega. ¿Tienen disponibilidad inmediata?`;

  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera el enlace de WhatsApp para compra directa de un solo producto
 * @param {Object} product - Objeto producto
 * @param {string} selectedVariant - Nombre de la variante seleccionada
 * @returns {string} URL formateada para WhatsApp
 */
function generateDirectProductWhatsAppUrl(product, selectedVariant) {
  let message = `👋 *Hola Jose Rivera Tech!*\n\n`;
  message += `Estoy en su catálogo online y me interesa pedir este producto de conveniencia:\n\n`;
  message += `📌 *${product.title}*\n`;
  message += `▫️ *Compatibilidad:* ${product.compatibilityBadge}\n`;
  if (selectedVariant) {
    message += `▫️ *Variante elegida:* ${selectedVariant}\n`;
  }
  message += `▫️ *Precio:* ${formatCurrency(product.price)}\n\n`;
  message += `¿Lo tienen disponible para retiro inmediato en su local o para envío hoy mismo?`;

  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}
