const WHATSAPP_NUMBER = '628xxxxxxxxxx'

export function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const generalBookingMessage =
  'Hello CleanHouse, I want to book a cleaning service. Please send me more information.'

export const quoteMessage = 'Hello CleanHouse, I want to request a cleaning quote.'
