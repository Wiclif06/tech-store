import { useEffect, useState } from 'react'
import type { Produto, CategoriaProduto, StatusProduto } from '../../types/produto'

export default function Produtos() {
  // Estados e estrutura inicial preparados. Complete os TODOs indicados no enunciado.
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [busca, setBusca] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState<'todos' | CategoriaProduto>('todos')
  const [filtroStatus, setFiltroStatus] = useState<'todos' | StatusProduto>('todos')

  useEffect(() => {
    // Q2: carregue os produtos e atualize os estados de carregamento e erro.
    setCarregando(false)
  }, [])

  if (carregando) return <p className="py-12 text-center text-slate-300">Catálogo em preparação…</p>
  return (
    <section aria-labelledby="titulo-catalogo">
      <h1 id="titulo-catalogo" className="text-3xl font-black">Catálogo TechStore</h1>
      {erro && <p role="alert">{erro}</p>}
      {/* Q4–Q7: implemente controles, filtros, lista e estados de resultado. */}
      {produtos.length === 0 && <p className="mt-6 text-slate-300">Implemente o catálogo seguindo o enunciado da prova.</p>}
    </section>
  )
}
