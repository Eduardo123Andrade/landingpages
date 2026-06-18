export default function Precos({ theme, fonts, items }: any) {
  return (
    <section id="precos" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg }}>
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-xs md:text-sm lg:text-base tracking-widest uppercase mb-3 md:mb-4" style={{ color: theme.accent }}>Investimento</p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl">Preços</h2>
          <div className="w-14 h-px mx-auto mt-4 md:mt-6" style={{ background: theme.accent }} />
        </div>

        {/* Scroll hint - mobile only */}
        <div className="sm:hidden flex justify-center items-center gap-3 mb-6">
          <span className="w-7 h-px" style={{ background: 'rgba(201,169,110,0.30)' }}></span>
          <p className="text-xs tracking-wider uppercase opacity-50" style={{ color: theme.accent }}>deslize</p>
          <span className="w-7 h-px" style={{ background: 'rgba(201,169,110,0.30)' }}></span>
        </div>

        {/* Desktop: Grid | Mobile: Horizontal Scroll */}
        <div
          className="hidden md:grid grid-cols-3 gap-px"
          style={{ background: 'rgba(201,169,110,0.15)' }}
          data-reveal
        >
          {items.map((preco: any, i: number) => (
            <PrecoCard key={i} preco={preco} theme={theme} />
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div
          className="md:hidden flex gap-1 overflow-x-auto snap-x snap-mandatory pb-6"
          style={{ scrollBehavior: 'smooth' }}
          data-reveal
        >
          {items.map((preco: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-4/5 sm:w-1/2 snap-center"
              style={{ background: 'rgba(201,169,110,0.15)' }}
            >
              <PrecoCard preco={preco} theme={theme} isMobile />
            </div>
          ))}
        </div>

        <p className="text-center mt-6 md:mt-8 text-xs md:text-sm text-gray-500 italic" data-reveal>
          * Valores finais conforme complexidade e tamanho. Orçamentos personalizados via formulário.
        </p>
      </div>
    </section>
  )
}

function PrecoCard({ preco, theme, isMobile }: any) {
  return (
    <div
      className="p-6 md:p-8 lg:p-12 text-center relative transition-colors duration-300 h-full"
      style={{ background: theme.bg }}
      onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = theme.bg2)}
      onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = theme.bg)}
    >
      {preco.destaque && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }}
        />
      )}
      <p className="text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-5" style={{ color: theme.accent }}>
        {preco.tier}
      </p>
      <p className="font-title text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: theme.text }}>
        {preco.valor}
      </p>
      <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 tracking-wider italic">
        {preco.sub}
      </p>
      <div className="w-8 h-px mx-auto mb-6 md:mb-8" style={{ background: 'rgba(201,169,110,0.15)' }} />
      <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
        {preco.items.map((item: string, j: number) => (
          <p key={j} className="text-sm md:text-base leading-loose italic" style={{ color: theme.muted }}>
            {item}
          </p>
        ))}
      </div>
      <div>
        <a
          href="#agendamento"
          className="block border px-4 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-opacity-10"
          style={{
            borderColor: 'rgba(201,169,110,0.15)',
            color: theme.accent,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.accent
            e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Solicitar
        </a>
      </div>
    </div>
  )
}
