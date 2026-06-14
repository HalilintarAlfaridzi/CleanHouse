import { MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { services } from '../../data/services'
import { serviceAreas } from '../../data/serviceAreas'
import { createWhatsAppUrl, generalBookingMessage } from '../../utils/whatsapp'
import Button from '../common/Button'
import Container from '../common/Container'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <Link className="flex items-center gap-3 font-bold text-gray-950" to="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                <Sparkles size={22} />
              </span>
              <span className="text-xl">CleanHouse</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              Professional cleaning services for homes, offices, bathrooms, and deep cleaning needs in Magelang, Yogyakarta, Jakarta, and Bali.
            </p>
            <Button className="mt-6" href={createWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </div>
          <FooterList title="Navigation" items={navLinks.map((item) => ({ label: item.label, to: item.path }))} />
          <FooterList title="Services" items={services.slice(0, 5).map((item) => ({ label: item.title, to: '/services' }))} />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-950">Service Areas</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {serviceAreas.map((area) => (
                <li key={area.id}>{area.city}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © 2026 CleanHouse. Frontend-only company profile website.
        </div>
      </Container>
    </footer>
  )
}

function FooterList({ title, items }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wide text-gray-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={`${title}-${item.label}`}>
            <Link className="text-gray-600 hover:text-green-700" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
