import { Menu, MessageCircle, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { createWhatsAppUrl, generalBookingMessage } from '../../utils/whatsapp'
import Button from '../common/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(generalBookingMessage)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-bold text-gray-950" to="/" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <Sparkles size={22} />
          </span>
          <span className="text-xl">CleanHouse</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'text-green-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'}`
              }
              to={link.path}
              key={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Book via WhatsApp
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-900 lg:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-sm lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`
                }
                to={link.path}
                key={link.path}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="mt-2 w-full" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Book via WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
