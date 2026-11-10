import { Link, Outlet } from 'react-router'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5" aria-label="Navegação principal">
          <Link className="text-xl font-black tracking-tight text-cyan-300" to="/">TechStore</Link>
          <Link className="rounded-lg px-4 py-2 font-semibold text-slate-200 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-cyan-300" to="/produtos">Catálogo</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 px-5 py-6 text-center text-sm text-slate-400">
        TechStore • Prova Semestral DP 2026
      </footer>
    </div>
  )
}
