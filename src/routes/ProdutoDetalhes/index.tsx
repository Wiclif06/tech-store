import { Link, useParams } from 'react-router'

export default function ProdutoDetalhes() {
  const { id } = useParams()
  // Q8: encontre o produto correspondente ao parâmetro e apresente os estados pedidos.
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-black">Detalhes do produto</h1>
      <p className="text-slate-300">A rota recebeu o identificador {id}.</p>
      <Link className="inline-flex rounded-lg px-3 py-2 text-cyan-300 hover:bg-slate-800" to="/produtos">Voltar ao catálogo</Link>
    </section>
  )
}
