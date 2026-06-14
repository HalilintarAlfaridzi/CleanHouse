import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import Button from '../components/common/Button'
import ContactForm from '../components/forms/ContactForm'
import ServiceAreaCard from '../components/cards/ServiceAreaCard'
import { serviceAreas } from '../data/serviceAreas'
import { createWhatsAppUrl, generalBookingMessage } from '../utils/whatsapp'

export default function Contact() {
  return (
    <>
      <PageHeader label="Contact" title="Contact CleanHouse" description="Need cleaning service for your home, office, bathroom, or full house? Contact CleanHouse through WhatsApp or request a quote using the form below." cta="Chat with CleanHouse" />
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                  <MessageCircle size={24} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-gray-950">Chat with CleanHouse on WhatsApp</h2>
                <p className="mt-3 text-gray-700">WhatsApp number placeholder: 628xxxxxxxxxx. Send your cleaning request and service area for a fast response.</p>
                <Button className="mt-6" href={createWhatsAppUrl(generalBookingMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </Button>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-bold text-gray-950">Business Information</h2>
                <Info icon={Phone} label="Business name" value="CleanHouse" />
                <Info icon={MapPin} label="Location" value="Magelang. Service areas: Magelang, Yogyakarta, Jakarta, Bali." />
                <Info icon={Clock} label="Working hours" value="Monday - Saturday, 08:00 - 17:00" />
              </div>
              <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-100 p-6 text-center">
                <div>
                  <MapPin className="mx-auto h-9 w-9 text-green-700" />
                  <p className="mt-4 font-semibold text-gray-950">Map location placeholder for CleanHouse service area.</p>
                  <p className="mt-2 text-sm text-gray-600">Frontend-only project. No advanced map API is connected.</p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Request Quote" title="Send Your Cleaning Details" description="The form organizes your request and opens WhatsApp with a pre-filled message." />
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Service Areas" title="Where CleanHouse Serves" description="Select your closest service area when requesting a quote." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => <ServiceAreaCard area={area} key={area.id} />)}
          </div>
        </Container>
      </section>
      <CTASection title="Book Your Cleaning Service Today" description="Use WhatsApp to request availability, package details, and a custom quote for your cleaning needs." />
    </>
  )
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="mt-5 flex gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-green-600" />
      <div>
        <p className="text-sm font-semibold text-gray-950">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{value}</p>
      </div>
    </div>
  )
}
