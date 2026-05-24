import { C, INSTAGRAM, GALLERY } from '../constants'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'

export default function Gallery() {
  return (
    <section data-testid="gallery" id="produtos" className="px-6 md:px-12 py-20" style={{ backgroundColor: C.bgAlt }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-2">
          <SectionLabel>Coleção</SectionLabel>
          <SectionTitle>Nossas Peças</SectionTitle>
          <p className="text-sm mt-2 max-w-xs" style={{ color: C.muted }}>
            Cada peça é feita com carinho e atenção aos detalhes
          </p>
        </div>

        <div
          data-testid="gallery-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]"
        >
          <a
            data-testid="gallery-item-0"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl"
            style={{ boxShadow: '0 4px 20px rgba(200,155,138,0.15)' }}
          >
            <img src={GALLERY[0]} alt="Joia em prata 925" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(92,61,53,0.6), transparent)' }}>
              <span className="text-white text-xs font-semibold">Ver no Instagram →</span>
            </div>
          </a>

          {GALLERY.slice(1, 3).map((src, i) => (
            <a
              key={src}
              data-testid={`gallery-item-${i + 1}`}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 4px 20px rgba(200,155,138,0.1)' }}
            >
              <img src={src} alt="Joia em prata 925" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(200,155,138,0.15)' }} />
            </a>
          ))}

          <a
            data-testid="gallery-item-3"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl"
            style={{ boxShadow: '0 4px 20px rgba(200,155,138,0.15)' }}
          >
            <img src={GALLERY[3]} alt="Joia em prata 925" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(92,61,53,0.6), transparent)' }}>
              <span className="text-white text-xs font-semibold">Ver no Instagram →</span>
            </div>
          </a>

          {GALLERY.slice(4).map((src, i) => (
            <a
              key={src}
              data-testid={`gallery-item-${i + 4}`}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 4px 20px rgba(200,155,138,0.1)' }}
            >
              <img src={src} alt="Joia em prata 925" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(200,155,138,0.15)' }} />
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            data-testid="gallery-cta"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ border: `1.5px solid ${C.rose}`, color: C.rose }}
          >
            Ver toda a coleção no Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
