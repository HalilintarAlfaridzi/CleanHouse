import { Building2, Droplets, Home, House, Sparkles } from 'lucide-react'
import Button from '../common/Button'

const icons = { Home, Building2, Sparkles, Droplets, House }

export default function ServiceCard({ service, compact = false }) {
  const Icon = icons[service.icon] || Sparkles
  const serviceLink = `/services#${service.slug}`

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-950">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
      {!compact && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Best for</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.bestFor.map((item) => (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      <Button className="mt-6 w-full" to={serviceLink} variant="outline">
        View Service
      </Button>
    </article>
  )
}
