import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  if (!href) return null
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>
}
export function SectionTitle({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div>{children}</div>
}
