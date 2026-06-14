import { MapPin } from 'lucide-react'

export default function ServiceAreaCard({ area }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
        <MapPin size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-950">{area.city}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{area.description}</p>
    </article>
  )
}
