import type { Produto } from '../types/produto'

export async function buscarProdutos(): Promise<Produto[]> {
  return []
}

export async function buscarProdutoPorId(id: number): Promise<Produto | undefined> {
  const produtos = await buscarProdutos()
  return produtos.find((produto) => produto.id === id)
}