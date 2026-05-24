interface FooterProps {
  storeName: string
  className?: string
}

export default function Footer({ storeName, className = '' }: FooterProps) {
  return (
    <footer className={`w-full px-6 py-8 border-t border-gray-200 text-center text-sm text-gray-500 ${className}`}>
      © {new Date().getFullYear()} {storeName}. Todos os direitos reservados.
    </footer>
  )
}
