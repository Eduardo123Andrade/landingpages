import { C, SERIF, HOW_TO_BUY_STEPS } from '../constants'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'

export default function HowToBuy() {
  return (
    <section data-testid="how-to-buy" className="px-6 md:px-12 py-20" style={{ backgroundColor: C.bgAlt }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-2">
          <SectionLabel>É simples assim</SectionLabel>
          <SectionTitle>Como fazer seu pedido</SectionTitle>
        </div>

        <div data-testid="how-to-buy-grid" className="grid md:grid-cols-3 gap-6">
          {HOW_TO_BUY_STEPS.map(({ step, icon, title, text }, i) => (
            <div
              key={step}
              data-testid={`how-to-buy-step-${i}`}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl"
              style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
            >
              <span
                data-testid={`how-to-buy-step-number-${i}`}
                className="text-xs font-bold tracking-widest"
                style={{ color: C.rose }}
              >
                {step}
              </span>
              <span className="text-3xl">{icon}</span>
              <h3 className="font-bold text-sm" style={{ fontFamily: SERIF, color: C.brown }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
