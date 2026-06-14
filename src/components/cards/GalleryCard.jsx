import Badge from '../ui/Badge'

export default function GalleryCard({ item }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
      <div className="grid grid-cols-2">
        {[
          ['Before', item.beforeImage],
          ['After', item.afterImage],
        ].map(([label, src]) => (
          <div className="relative aspect-[4/3] overflow-hidden" key={label}>
            <img className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" src={src} alt={`${label} ${item.title}`} loading="lazy" />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">{label}</span>
          </div>
        ))}
      </div>
      <div className="p-5">
        <Badge>{item.category}</Badge>
        <h3 className="mt-4 text-lg font-bold text-gray-950">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-green-700">{item.serviceType}</p>
      </div>
    </article>
  )
}
