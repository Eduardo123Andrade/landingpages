import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/sections/Hero'
import Features from '../../components/sections/Features'

const STORE_NAME = 'Loja 01'

const NAV_LINKS = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const FEATURES = [
  { icon: '🚀', title: 'Entrega Rápida', description: 'Receba seu pedido em até 24 horas na sua porta.' },
  { icon: '💳', title: 'Pagamento Seguro', description: 'Diversas formas de pagamento com total segurança.' },
  { icon: '🔄', title: 'Troca Fácil', description: 'Política de troca simples e sem burocracia.' },
]

export default function Loja01() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        logo={<span className="text-indigo-600">{STORE_NAME}</span>}
        links={NAV_LINKS}
        ctaLabel="Comprar agora"
        ctaHref="#produtos"
      />

      <main className="flex-1">
        <Hero
          badge="Novidade"
          title="Os melhores produtos com o melhor preço"
          subtitle="Qualidade garantida e entrega em todo o Brasil. Aproveite nossas ofertas exclusivas."
          ctaPrimary={{ label: 'Ver produtos', href: '#produtos' }}
          ctaSecondary={{ label: 'Saiba mais', href: '#sobre' }}
        />

        <Features title="Por que nos escolher?" features={FEATURES} />
      </main>

      <Footer storeName={STORE_NAME} />
    </div>
  )
}
