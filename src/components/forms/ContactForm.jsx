import { Send } from 'lucide-react'
import { useState } from 'react'
import { createWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../common/Button'

const initialForm = {
  name: '',
  phone: '',
  serviceType: 'Residential Cleaning',
  package: 'Standard Cleaning',
  area: 'Magelang',
  propertyType: 'House',
  date: '',
  message: '',
}

const selectFields = [
  ['serviceType', 'Service Type', ['Residential Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Bathroom Cleaning', 'House Cleaning']],
  ['package', 'Cleaning Package', ['Standard Cleaning', 'Deep Cleaning', 'Not sure yet']],
  ['area', 'Service Area', ['Magelang', 'Yogyakarta', 'Jakarta', 'Bali']],
  ['propertyType', 'Property Type', ['House', 'Apartment', 'Office', 'Shop', 'Other']],
]

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and WhatsApp number.')
      return
    }

    const message = `Hello CleanHouse, I want to request a cleaning quote.

Name: ${form.name}
WhatsApp Number: ${form.phone}
Service Type: ${form.serviceType}
Package: ${form.package}
Service Area: ${form.area}
Property Type: ${form.propertyType}
Preferred Date: ${form.date || 'Not specified'}
Cleaning Details: ${form.message || 'Not specified'}`

    setError('')
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={updateField} placeholder="Enter your full name" required />
        <Field label="WhatsApp Number" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="Enter your WhatsApp number" required />
        {selectFields.map(([name, label, options]) => (
          <label className="text-sm font-semibold text-gray-800" key={name}>
            {label}
            <select className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20" name={name} value={form[name]} onChange={updateField}>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={updateField} />
        <label className="text-sm font-semibold text-gray-800 md:col-span-2">
          Message / Cleaning Details
          <textarea className="mt-2 min-h-32 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20" name="message" value={form.message} onChange={updateField} placeholder="Tell us about your cleaning needs..." />
        </label>
      </div>
      {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      <Button className="mt-6 w-full" size="lg">
        <Send size={20} />
        Send Request via WhatsApp
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-gray-500">
        This form does not save data or process payments. It only opens WhatsApp with your request details.
      </p>
    </form>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="text-sm font-semibold text-gray-800">
      {label}
      <input className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20" {...props} />
    </label>
  )
}
