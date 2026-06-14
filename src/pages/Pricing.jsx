import { AlertCircle, MessageCircle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import Button from '../components/common/Button'
import PricingCard from '../components/cards/PricingCard'
import { comparisonRows, pricingPackages } from '../data/pricing'
import { createWhatsAppUrl, quoteMessage } from '../utils/whatsapp'

export default function Pricing() {
  return (
    <>
      <PageHeader label="Pricing" title="Simple Cleaning Packages for Your Needs" description="Choose between Standard Cleaning for regular needs or Deep Cleaning for more detailed and intensive cleaning." cta="Request a Quote on WhatsApp" />
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {pricingPackages.map((item) => <PricingCard item={item} key={item.id} />)}
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Compare" title="Package Comparison" description="Use this table as a simple guide before requesting final details through WhatsApp." align="center" />
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-gray-950 text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Feature</th>
                    <th className="px-5 py-4 font-semibold">Standard Cleaning</th>
                    <th className="px-5 py-4 font-semibold">Deep Cleaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonRows.map(([feature, standard, deep]) => (
                    <tr key={feature}>
                      <td className="px-5 py-4 font-semibold text-gray-950">{feature}</td>
                      <td className="px-5 py-4 text-gray-600">{standard}</td>
                      <td className="px-5 py-4 text-gray-600">{deep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-green-700" />
              <div>
                <h2 className="text-2xl font-bold text-gray-950">Custom Quote Notes</h2>
                <p className="mt-3 max-w-4xl leading-relaxed text-gray-700">
                  Cleaning needs may be different for each customer. Final pricing can depend on area size, room condition, location, and requested service details. The website does not process payments or manage real booking schedules.
                </p>
                <Button className="mt-6" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection title="Not Sure Which Package You Need?" description="Send CleanHouse your cleaning needs through WhatsApp and request a custom quote." />
    </>
  )
}
