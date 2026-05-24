import { C, SERIF, FEATURES } from '../constants'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'

export default function Features() {
  return (
    <section data-testid="features" id="diferenciais" className="px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-2">
          <SectionLabel>Por que nos escolher</SectionLabel>
          <SectionTitle>Qualidade que você<br />pode sentir</SectionTitle>
        </div>

        <div data-testid="features-grid" className="grid md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, description }, i) => (
            <div
              key={title}
              data-testid={`feature-card-${i}`}
              className="relative flex flex-col gap-4 p-8 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: C.bgCard,
                border: `1px solid ${C.border}`,
                boxShadow: '0 4px 24px rgba(200,155,138,0.08)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-30"
                style={{ backgroundColor: C.roseLight }}
              />
              <div
                data-testid={`feature-icon-${i}`}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: C.rosePale }}
              >
                {icon}
              </div>
              <div>
                <h3
                  data-testid={`feature-title-${i}`}
                  className="font-bold text-base mb-1.5"
                  style={{ fontFamily: SERIF, color: C.brown }}
                >
                  {title}
                </h3>
                <p
                  data-testid={`feature-desc-${i}`}
                  className="text-sm leading-relaxed"
                  style={{ color: C.brownLight }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
