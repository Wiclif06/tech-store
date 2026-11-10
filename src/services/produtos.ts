import type { Produto } from '../types/produto'

/** Q1: implemente a leitura e validação do JSON local conforme o enunciado. */
export async function buscarProdutos(): Promise<Produto[]> {
  return []
}

/** Utilitário disponível para a rota de detalhes. */
export async function buscarProdutoPorId(id: number): Promise<Produto | undefined> {
  const produtos = await buscarProdutos()
  return produtos.find((produto) => produto.id === id)
}
