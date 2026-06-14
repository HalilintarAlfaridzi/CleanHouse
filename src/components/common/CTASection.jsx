import { MessageCircle, Send } from 'lucide-react'
import Button from './Button'
import Container from './Container'
import { createWhatsAppUrl, generalBookingMessage, quoteMessage } from '../../utils/whatsapp'

export default function CTASection({ title, description, primaryText = 'Book via WhatsApp', secondaryText = 'Request a Quote' }) {
  return (
    <section className="bg-gray-950 py-16 text-white md:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-normal md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button href={createWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              {primaryText}
            </Button>
            <Button href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noreferrer" variant="secondary">
              <Send size={20} />
              {secondaryText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
