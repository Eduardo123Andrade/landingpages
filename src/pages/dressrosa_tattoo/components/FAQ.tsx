export default function FAQ({ theme, items, openIdx, setOpenIdx }: any) {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg }}>
      <div className="max-w-2xl mx-auto">
        <div data-reveal className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4" style={{ color: theme.accent }}>
            Dúvidas
          </p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-px" style={{ borderColor: 'rgba(201,169,110,0.15)' }}>
          {items.map((faq: any, i: number) => (
            <div
              key={i}
              data-reveal
              className="border-b"
              style={{ borderColor: 'rgba(201,169,110,0.15)' }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full bg-none border-none py-6 md:py-7 flex justify-between items-start gap-6 cursor-pointer text-left hover:opacity-75 transition-opacity"
              >
                <span className="font-title text-base md:text-lg leading-relaxed" style={{ color: theme.text }}>
                  {faq.q}
                </span>
                <span
                  className="text-2xl leading-none flex-shrink-0 w-6 text-center"
                  style={{ color: theme.accent }}
                >
                  {openIdx === i ? '−' : '+'}
                </span>
              </button>

              {openIdx === i && (
                <div className="pb-6 md:pb-7 animate-faqOpen">
                  <p className="text-sm md:text-base leading-relaxed italic opacity-80" style={{ color: theme.muted }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
