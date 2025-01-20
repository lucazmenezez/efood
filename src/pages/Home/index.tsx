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
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    useGetRestaurantsQuery()

  return (
    <>
      <Header page="home" />
      {isLoadingRestaurants ? (
        <ProductsList food={[]} page="home" isLoading={true} />
      ) : (
        <ProductsList isLoading={false} food={restaurants || []} page="home" />
      )}
    </>
  )
}

export default Home
