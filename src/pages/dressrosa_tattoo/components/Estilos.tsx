export default function Estilos({ theme, fonts, items }: any) {
  return (
    <section id="estilos" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg }}>
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-xs md:text-sm lg:text-base tracking-widest uppercase mb-3 md:mb-4" style={{ color: theme.accent }}>Especialidades</p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl">Estilos que Tatuo</h2>
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
          {items.map((estilo: any, i: number) => (
            <EstiloCard key={i} estilo={estilo} theme={theme} />
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div
          className="md:hidden flex gap-1 overflow-x-auto snap-x snap-mandatory pb-6"
          style={{ scrollBehavior: 'smooth' }}
          data-reveal
        >
          {items.map((estilo: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-4/5 sm:w-1/2 snap-center"
              style={{ background: 'rgba(201,169,110,0.15)' }}
            >
              <EstiloCard estilo={estilo} theme={theme} isMobile />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EstiloCard({ estilo, theme, isMobile }: any) {
  return (
    <div
      className="p-6 md:p-8 lg:p-14 text-center transition-colors duration-300 cursor-default h-full"
      style={{ background: theme.bg }}
      onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = theme.bg2)}
      onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = theme.bg)}
    >
      <div className="font-title italic text-2xl md:text-3xl mb-4 md:mb-5" style={{ color: theme.accent }}>
        {estilo.num}
      </div>
      <h3 className="font-title text-xl md:text-2xl mb-4 md:mb-5" style={{ color: theme.text }}>
        {estilo.name}
      </h3>
      <div className="w-8 h-px mx-auto mb-4 md:mb-5" style={{ background: 'rgba(201,169,110,0.30)' }} />
      <p className="text-sm md:text-base leading-relaxed text-muted font-light italic mb-6 md:mb-8">
        {estilo.desc}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {estilo.tags.map((tag: string, j: number) => (
          <span
            key={j}
            className="text-xs tracking-wider uppercase px-3 py-1 border"
            style={{
              color: theme.accent,
              borderColor: 'rgba(201,169,110,0.15)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
