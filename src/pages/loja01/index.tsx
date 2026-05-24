export default function Loja01() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6 text-center gap-6">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <span className="text-5xl">🚧</span>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Em construção
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Estamos preparando algo especial. Em breve esta página estará disponível.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Em breve</span>
        </div>
      </div>
    </div>
  )
}
