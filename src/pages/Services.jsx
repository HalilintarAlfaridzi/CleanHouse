import { CheckCircle, MessageCircle, Send } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import Button from '../components/common/Button'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'
import { createWhatsAppUrl, quoteMessage } from '../utils/whatsapp'

const benefits = ['Save cleaning time', 'Keep home or office fresh', 'Professional cleaning process', 'Flexible package options', 'Easy booking through WhatsApp', 'Suitable for regular or intensive cleaning']

export default function Services() {
  return (
    <>
      <PageHeader label="Services" title="Cleaning Services for Homes, Offices, and Busy Families" description="Choose from regular cleaning, office cleaning, bathroom cleaning, and deep cleaning services designed to keep your space clean and comfortable." />
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Service Options" title="Choose the Cleaning Support You Need" description="Each service can be discussed through WhatsApp so the final scope matches your property and cleaning condition." align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard service={service} key={service.id} />)}
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Details" title="What Each Service Includes" description="Clear service explanations help customers understand which cleaning option fits their space." />
          <div className="mt-10 space-y-6">
            {services.map((service) => (
              <article className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-6" id={service.slug} key={service.id}>
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-950">{service.title}</h2>
                    <p className="mt-3 leading-relaxed text-gray-600">{service.detail}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.bestFor.map((item) => <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800" key={item}>{item}</span>)}
                    </div>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li className="flex gap-3 text-sm text-gray-700" key={feature}>
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Benefits" title="Why Customers Use CleanHouse" description="The service is designed around clear scope, easy communication, and practical cleaning outcomes." align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4" key={benefit}>
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noreferrer"><MessageCircle size={20} />Chat on WhatsApp</Button>
            <Button to="/contact" variant="secondary"><Send size={20} />Request a Quote</Button>
          </div>
        </Container>
      </section>
      <CTASection title="Need Help Choosing the Right Service?" description="Send CleanHouse your cleaning needs and service area through WhatsApp to request a practical recommendation." />
    </>
  )
}
