export default function Sobre({ theme, instagram }: any) {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg2 }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start md:items-center" data-reveal>
        {/* Image */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-[3/4]" style={{ background: theme.bg3, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(135deg, ${theme.bg3}, ${theme.bg3} 18px, ${theme.bg2} 18px, ${theme.bg2} 36px)` }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/dressrosa-tattoo/tatuadora/587652654_17868795972472898_4056990377599748810_n.jpg"
                alt="Karol"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-12 h-12" style={{ borderTop: `2px solid ${theme.accent}`, borderLeft: `2px solid ${theme.accent}` }} />
          <div className="absolute -bottom-4 -right-4 w-12 h-12" style={{ borderBottom: `2px solid ${theme.accent}`, borderRight: `2px solid ${theme.accent}` }} />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6" style={{ color: theme.accent }}>
            A Artista
          </p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
            A Arte que
            <br />
            <em className="italic" style={{ color: theme.accent2 }}>Vive</em> na Pele
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-4 md:mb-6">
            Sou tatuadora especializada em universos de anime e games — de One Piece a Elden Ring — com uma estética gótica e editorial única. Cada traço é um capítulo da sua história, gravado para sempre.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8 md:mb-12">
            Trabalho com hora marcada e projeto personalizado, garantindo que cada peça seja tão única quanto você.
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border px-6 md:px-8 py-3 text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              borderColor: 'rgba(201,169,110,0.30)',
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
            ◈ @dressrosatattoo
          </a>
        </div>
      </div>
    </section>
  )
}
