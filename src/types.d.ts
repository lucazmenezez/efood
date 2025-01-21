declare type Restaurants = {
  id: number
  titulo: string
  tipo: string[]
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

declare type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
