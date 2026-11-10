import { Link } from 'react-router'

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl py-12 text-center">
      <p className="font-bold uppercase tracking-[0.2em] text-cyan-300">Tecnologia para o seu dia</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Bem-vindo à TechStore</h1>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Conheça produtos de tecnologia para estudar, trabalhar e aproveitar melhor o seu tempo.</p>
      <Link className="mt-8 inline-flex rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" to="/produtos">Acessar catálogo</Link>
    </section>
  )
}
