import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

import { useGetCardapioQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams<{ id?: string }>()

  const { data: restaurante, isLoading: isLoadingMenu } = useGetCardapioQuery(
    id as string
  )

  if (isLoadingMenu) {
    return (
      <>
        <Header page="profile" />
        <ProductsList isLoading={true} food={[]} page="profile" />
      </>
    )
  }

  if (!restaurante) {
    return <p>Restaurante não encontrado.</p>
  }

  return (
    <>
      <Header page="profile" />
      <Banner
        imageBanner={restaurante.capa}
        category={
          Array.isArray(restaurante.tipo)
            ? restaurante.tipo.join(', ')
            : restaurante.tipo
        }
        restaurant={restaurante.titulo}
      />
      <ProductsList
        isLoading={false}
        food={restaurante.cardapio || []}
        page="profile"
      />
    </>
  )
}

export default Profile
