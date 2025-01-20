import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurants = {
  id: number
  titulo: string
  tipo: string[]
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header page="home" />
        <ProductsList food={restaurants} page="home" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
