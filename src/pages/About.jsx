import { CheckCircle, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import ServiceAreaCard from '../components/cards/ServiceAreaCard'
import { serviceAreas } from '../data/serviceAreas'

const whyChoose = ['Professional service layout', 'Easy communication through WhatsApp', 'Flexible cleaning needs', 'Multiple service areas', 'Clean and reliable process']
const standards = ['Clear service checklist', 'Focus on visible cleanliness', 'Attention to important areas', 'Organized cleaning process', 'Respect for customer space', 'Suitable tools and cleaning approach', 'Final check before completion']

export default function About() {
  return (
    <>
      <PageHeader label="About" title="About CleanHouse" description="CleanHouse is a professional cleaning service company based in Magelang, helping homeowners, office owners, and busy families keep their spaces clean, fresh, and comfortable." cta="Contact CleanHouse" />
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Mission" title="Simple, Reliable, Accessible Cleaning" description="Our mission is to make professional cleaning services simple, reliable, and accessible for homes, offices, and small businesses." />
              <div className="mt-6 grid gap-3">
                {['Provide clear cleaning service options', 'Make booking easy through WhatsApp', 'Keep homes and offices cleaner', 'Support UMKM and local business needs', 'Deliver professional and consistent service'].map((item) => (
                  <div className="flex gap-3 text-gray-700" key={item}>
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <img className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80" alt="CleanHouse cleaning tools arranged for professional service" />
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Why Choose Us" title="Built Around Clear Customer Needs" description="Trust comes from clear service information, practical cleaning standards, and easy communication." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => (
              <article className="rounded-xl border border-gray-200 bg-white p-5" key={item}>
                <ShieldCheck className="mb-4 h-7 w-7 text-green-600" />
                <h2 className="text-base font-bold text-gray-950">{item}</h2>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Standards" title="Cleaning Standards" description="CleanHouse explains its cleaning approach without claiming certifications that are not listed as real business credentials." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((item) => (
              <div className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4" key={item}>
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="font-semibold text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Coverage" title="Service Area" description="CleanHouse is based in Magelang and serves selected cleaning requests in these areas." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => <ServiceAreaCard area={area} key={area.id} />)}
          </div>
        </Container>
      </section>
      <CTASection title="Need a Cleaner Home or Office?" description="Contact CleanHouse through WhatsApp and request the right service for your space." primaryText="Contact CleanHouse" />
    </>
  )
}
