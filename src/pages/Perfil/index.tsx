import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurants | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
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
