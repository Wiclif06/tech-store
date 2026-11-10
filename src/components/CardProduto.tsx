import type { Produto } from '../types/produto'

type CardProdutoProps = {
  produto: Produto
}

/** Q3: complete o componente CardProduto. */
export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      {/* Q3: apresente imagem, nome, categoria, status e preço. */}
      <h2 className="font-bold">{produto.nome}</h2>
    </article>
  )
}
