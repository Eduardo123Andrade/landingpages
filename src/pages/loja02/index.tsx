import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/sections/Hero'
import Features from '../../components/sections/Features'

const STORE_NAME = 'Loja 02'

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservas', href: '#reservas' },
  { label: 'Contato', href: '#contato' },
]

const FEATURES = [
  { icon: '🍕', title: 'Ingredientes Frescos', description: 'Selecionamos os melhores ingredientes diariamente.' },
  { icon: '⏱️', title: 'Delivery Expresso', description: 'Pedido na sua mesa ou na sua porta em minutos.' },
  { icon: '⭐', title: 'Avaliação 5 Estrelas', description: 'Mais de 5.000 clientes satisfeitos nos avaliam com 5 estrelas.' },
]

export default function Loja02() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Header
        logo={<span className="text-orange-600">{STORE_NAME}</span>}
        links={NAV_LINKS}
        ctaLabel="Fazer pedido"
        ctaHref="#menu"
        className="bg-white shadow-sm"
      />

      <main className="flex-1">
        <Hero
          badge="Especial do dia"
          title="Sabor que você nunca esquece"
          subtitle="Culinária artesanal feita com amor. Reserve sua mesa ou peça pelo delivery."
          ctaPrimary={{ label: 'Ver cardápio', href: '#menu' }}
          ctaSecondary={{ label: 'Reservar mesa', href: '#reservas' }}
        />

        <Features title="Nossa diferença" features={FEATURES} className="bg-white" />
      </main>

      <Footer storeName={STORE_NAME} className="bg-white" />
    </div>
  )
}
