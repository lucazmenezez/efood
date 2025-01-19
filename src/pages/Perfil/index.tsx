import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

import { useGetCardapioQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  if (!id) {
    return <p>Restaurante não encontrado.</p>
  }

  return (
    <>
      <Header page="perfil" />
      <Banner
        imageBanner={restaurante.capa}
        category={
          Array.isArray(restaurante.tipo)
            ? restaurante.tipo.join(', ')
            : restaurante.tipo
        }
        restaurant={restaurante.titulo}
      />
      <ProductsList food={restaurante.cardapio} page="perfil" />
    </>
  )
}

export default Perfil
