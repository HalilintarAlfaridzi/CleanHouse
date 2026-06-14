export default function Badge({ children, className = '' }) {
  return <span className={`inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 ${className}`}>{children}</span>
}
