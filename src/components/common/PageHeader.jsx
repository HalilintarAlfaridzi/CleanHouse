import Container from './Container'
import Button from './Button'
import { createWhatsAppUrl, quoteMessage } from '../../utils/whatsapp'
import { MessageCircle } from 'lucide-react'

export default function PageHeader({ label, title, description, cta = 'Request a Quote' }) {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-700">{label}</p>
          <h1 className="text-4xl font-bold tracking-normal text-gray-950 md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">{description}</p>
          <Button className="mt-8" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noreferrer">
            <MessageCircle size={20} />
            {cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
