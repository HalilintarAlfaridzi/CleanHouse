import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-green-600 text-white hover:bg-green-700 shadow-sm',
  secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100',
  outline: 'border border-green-600 text-green-700 hover:bg-green-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

const sizes = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

export default function Button({ children, to, href, variant = 'primary', size = 'md', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl py-2.5 font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
