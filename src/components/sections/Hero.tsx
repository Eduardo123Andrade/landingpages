import Button from '../ui/Button'

interface HeroProps {
  badge?: string
  title: string
  subtitle: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  image?: string
  className?: string
}

export default function Hero({ badge, title, subtitle, ctaPrimary, ctaSecondary, image, className = '' }: HeroProps) {
  return (
    <section className={`flex flex-col items-center text-center px-6 py-20 gap-6 ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
        {title}
      </h1>

      <p className="text-lg text-gray-500 max-w-xl">{subtitle}</p>

      {(ctaPrimary || ctaSecondary) && (
        <div className="flex flex-wrap gap-3 justify-center">
          {ctaPrimary && (
            <a href={ctaPrimary.href}>
              <Button variant="primary">{ctaPrimary.label}</Button>
            </a>
          )}
          {ctaSecondary && (
            <a href={ctaSecondary.href}>
              <Button variant="outline">{ctaSecondary.label}</Button>
            </a>
          )}
        </div>
      )}

      {image && (
        <img src={image} alt="" className="mt-8 rounded-2xl shadow-xl max-w-2xl w-full" />
      )}
    </section>
  )
}
