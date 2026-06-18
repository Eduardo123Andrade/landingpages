const FormInput = ({ label, type = 'text', placeholder, required, theme, ...props }: any) => (
  <div>
    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: theme.accent }}>
      {label}
    </label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-opacity-15 py-3 text-base outline-none transition-colors focus:border-opacity-100"
      style={{
        borderColor: 'rgba(201,169,110,0.15)',
        color: theme.text,
      }}
      {...props}
    />
  </div>
)

export default function Agendamento({ theme, fonts, formSent, setFormSent }: any) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <section id="agendamento" className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12" style={{ background: theme.bg2 }}>
      <div className="max-w-2xl mx-auto" data-reveal>
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4" style={{ color: theme.accent }}>
            Contato
          </p>
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl">Agendar Tattoo</h2>
          <div className="w-14 h-px mx-auto mt-4 md:mt-6" style={{ background: theme.accent }} />
        </div>

        {formSent ? (
          <div className="text-center p-8 md:p-12 border border-opacity-15 animate-fadeUp" style={{ borderColor: 'rgba(201,169,110,0.15)' }}>
            <p className="font-title text-2xl md:text-3xl mb-3" style={{ color: theme.accent }}>
              Mensagem enviada
            </p>
            <p className="text-base leading-relaxed italic opacity-80 mb-8" style={{ color: theme.muted }}>
              Entraremos em contato em breve. ♥
            </p>
            <button
              onClick={() => setFormSent(false)}
              className="border px-6 py-3 text-xs tracking-widest uppercase transition-colors"
              style={{
                borderColor: 'rgba(201,169,110,0.15)',
                color: theme.accent,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.15)')}
            >
              Nova mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormInput
                label="Nome *"
                placeholder="Seu nome"
                required
                theme={theme}
              />
              <FormInput
                label="WhatsApp / E-mail *"
                placeholder="Contato"
                required
                theme={theme}
              />
            </div>

            {/* Style Reference */}
            <FormInput
              label="Anime / Game / Estilo"
              placeholder="Ex: One Piece, Elden Ring…"
              theme={theme}
            />

            {/* Body Area and Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormInput
                label="Região do Corpo"
                placeholder="Braço, costela…"
                theme={theme}
              />
              <FormInput
                label="Tamanho estimado"
                placeholder="Ex: 10cm"
                theme={theme}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: theme.accent }}>
                Descrição do Projeto
              </label>
              <textarea
                required
                rows={4}
                placeholder="Descreva sua ideia…"
                className="w-full bg-transparent border-b border-opacity-15 py-3 text-base outline-none resize-none transition-colors focus:border-opacity-100"
                style={{
                  borderColor: 'rgba(201,169,110,0.15)',
                  color: theme.text,
                  fontFamily: fonts.body,
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 text-xs md:text-sm tracking-widest uppercase font-bold transition-opacity hover:opacity-80 mt-6"
              style={{
                background: theme.accent,
                color: theme.bg,
              }}
            >
              Enviar Pedido
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
