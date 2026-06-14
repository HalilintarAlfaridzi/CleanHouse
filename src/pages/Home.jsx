import { CheckCircle, Clock, MapPin, MessageCircle, Send, ShieldCheck, Sparkles } from 'lucide-react'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import Button from '../components/common/Button'
import CTASection from '../components/common/CTASection'
import ServiceCard from '../components/cards/ServiceCard'
import PricingCard from '../components/cards/PricingCard'
import GalleryCard from '../components/cards/GalleryCard'
import ServiceAreaCard from '../components/cards/ServiceAreaCard'
import FAQItem from '../components/ui/FAQItem'
import { services } from '../data/services'
import { pricingPackages } from '../data/pricing'
import { galleryItems } from '../data/gallery'
import { serviceAreas } from '../data/serviceAreas'
import { faqs } from '../data/faqs'
import { createWhatsAppUrl, generalBookingMessage, quoteMessage } from '../utils/whatsapp'

const highlights = [
  ['Professional Cleaning', 'Clean service process for homes, offices, and bathrooms.', ShieldCheck],
  ['Flexible Service Options', 'Choose regular cleaning or deep cleaning based on your needs.', Sparkles],
  ['Easy WhatsApp Booking', 'Contact CleanHouse directly without complicated forms.', MessageCircle],
  ['Multiple Service Areas', 'Available in Magelang, Yogyakarta, Jakarta, and Bali.', MapPin],
]

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-white py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">Cleaning service in Magelang, Yogyakarta, Jakarta, and Bali</p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-gray-950 md:text-6xl">Professional Cleaning Services for Homes and Offices</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                CleanHouse helps homeowners, office owners, and busy families keep their spaces clean, fresh, and comfortable with reliable cleaning services.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={createWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer" size="lg">
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </Button>
                <Button href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                  <Send size={20} />
                  Request a Quote
                </Button>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
                {['Fast WhatsApp response', 'Standard and deep cleaning', 'Four service areas'].map((item) => (
                  <div className="flex items-center gap-2" key={item}>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" alt="Professional cleaner preparing a clean room for CleanHouse service" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Clock size={22} />
                  </span>
                  <div>
                    <p className="font-bold text-gray-950">Quick to contact</p>
                    <p className="text-sm text-gray-600">Request service details through WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map(([title, text, Icon]) => (
              <article className="rounded-xl border border-gray-200 bg-white p-5" key={title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Icon size={22} />
                </div>
                <h2 className="text-lg font-bold text-gray-950">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PreviewSection eyebrow="Services" title="Cleaning Services for Everyday Needs" description="Choose from regular house cleaning, office cleaning, bathroom cleaning, and deeper cleaning support." ctaText="View All Services" ctaTo="/services">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => <ServiceCard service={service} compact key={service.id} />)}
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Pricing" title="Simple Cleaning Packages" description="Start with Standard Cleaning for regular needs or Deep Cleaning for more intensive cleaning." ctaText="View Pricing" ctaTo="/pricing" gray>
        <div className="grid gap-8 lg:grid-cols-2">
          {pricingPackages.map((item) => <PricingCard item={item} key={item.id} />)}
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Gallery" title="Before and After Results" description="See example cleaning result cards for home, office, bathroom, and kitchen needs." ctaText="View Full Gallery" ctaTo="/gallery">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => <GalleryCard item={item} key={item.id} />)}
        </div>
      </PreviewSection>

      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Service Areas" title="Available in Four Main Areas" description="CleanHouse serves selected home, office, and business cleaning needs across these locations." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => <ServiceAreaCard area={area} key={area.id} />)}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common Questions Before Booking" description="Quick answers about services, custom quotes, coverage, and the frontend-only request form." align="center" />
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.slice(0, 5).map((faq) => <FAQItem {...faq} key={faq.id} />)}
          </div>
        </Container>
      </section>

      <CTASection title="Ready to Make Your Space Cleaner?" description="Book CleanHouse through WhatsApp and request a cleaning service based on your home, office, or deep cleaning needs." />
    </>
  )
}

function PreviewSection({ eyebrow, title, description, ctaText, ctaTo, gray = false, children }) {
  return (
    <section className={`${gray ? 'bg-gray-100' : 'bg-white'} py-16 md:py-20`}>
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          <Button className="shrink-0" to={ctaTo} variant="secondary">{ctaText}</Button>
        </div>
        {children}
      </Container>
    </section>
  )
}
