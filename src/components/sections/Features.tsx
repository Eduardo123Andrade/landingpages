interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  title?: string
  features: Feature[]
  className?: string
}

export default function Features({ title, features, className = '' }: FeaturesProps) {
  return (
    <section className={`px-6 py-16 ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gray-50">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
