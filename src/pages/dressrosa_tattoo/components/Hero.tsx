export default function Hero({ theme }: any) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center py-32 md:py-28 lg:py-32 px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_88px,rgba(201,169,110,0.025)_88px,rgba(201,169,110,0.025)_89px)] pointer-events-none" />

      {[
        { top: '88px', left: '52px', width: '56px', height: '56px', borderTop: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' },
        { top: '88px', right: '52px', width: '56px', height: '56px', borderTop: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' },
        { bottom: '48px', left: '52px', width: '56px', height: '56px', borderBottom: '1px solid rgba(201,169,110,0.4)', borderLeft: '1px solid rgba(201,169,110,0.4)' },
        { bottom: '48px', right: '52px', width: '56px', height: '56px', borderBottom: '1px solid rgba(201,169,110,0.4)', borderRight: '1px solid rgba(201,169,110,0.4)' },
      ].map((style, i) => (
        <div key={i} className="absolute" style={style} />
      ))}

      <div className="relative z-10 animate-fadeUp max-w-2xl">
        <p className="text-xs md:text-sm lg:text-base tracking-widest uppercase mb-6 md:mb-7 lg:mb-7" style={{ color: theme.accent }}>
          Anime · Games · Gothic
        </p>

        <h1 className="font-title text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight md:leading-tight tracking-tighter" style={{ lineHeight: 0.88, color: theme.accent }}>
          DRESSROSA
        </h1>

        <p className="font-title text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase opacity-50 mt-3 md:mt-4">
          TATTOO STUDIO
        </p>

        <div className="w-px h-12 md:h-16 bg-gradient-to-b mx-auto my-6 md:my-9" style={{ backgroundImage: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light opacity-60 max-w-sm md:max-w-md mx-auto mb-10 md:mb-12 italic leading-relaxed">
          Arte permanente que conta a sua história — do mangá à pele.
        </p>

        <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4 md:px-0">
          <a
            href="#portfolio"
            className="border px-6 md:px-8 py-3 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-opacity-10"
            style={{
              borderColor: `rgba(201,169,110,0.30)`,
              color: theme.accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent
              e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201,169,110,0.30)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Ver Portfólio
          </a>
          <a
            href="#agendamento"
            className="px-6 md:px-8 py-3 text-xs md:text-sm tracking-widest uppercase font-bold transition-opacity duration-300 hover:opacity-80"
            style={{
              backgroundColor: theme.accent,
              color: theme.bg,
            }}
          >
            Agendar Agora
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 md:bottom-12 flex flex-col items-center gap-1.5 animate-pulse">
        <p className="text-xs tracking-wider uppercase opacity-40" style={{ color: theme.accent }}>
          scroll
        </p>
        <div className="w-px h-9 bg-gradient-to-b opacity-40" style={{ backgroundImage: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />
      </div>
    </section>
  )
}
