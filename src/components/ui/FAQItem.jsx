import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <button
        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-950"
        onClick={() => setOpen((value) => !value)}
        type="button"
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={`h-5 w-5 shrink-0 text-green-700 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">{answer}</p>}
    </div>
  )
}
