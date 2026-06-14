export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-normal text-gray-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">{description}</p>}
    </div>
  )
}
