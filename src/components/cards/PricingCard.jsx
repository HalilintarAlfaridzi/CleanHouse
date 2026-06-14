import { CheckCircle, MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import { createWhatsAppUrl } from '../../utils/whatsapp'

export default function PricingCard({ item }) {
  return (
    <article className={`flex h-full flex-col rounded-xl border p-6 shadow-sm ${item.highlighted ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-green-700">Custom Quote</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-950">{item.name}</h3>
        </div>
        {item.highlighted && <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.description}</p>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Best for</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.bestFor.map((best) => (
            <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200" key={best}>
              {best}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {item.features.map((feature) => (
          <li className="flex gap-3 text-sm text-gray-700" key={feature}>
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" href={createWhatsAppUrl(item.whatsappMessage)} target="_blank" rel="noreferrer">
        <MessageCircle size={20} />
        {item.ctaText}
      </Button>
    </article>
  )
}
