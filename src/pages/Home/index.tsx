import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantsQuery } from '../../services/api'

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
