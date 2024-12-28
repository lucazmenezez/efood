import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { Menu } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Menu[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  if (!cardapio.length) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header page="perfil" />
      <Banner />
      <ProductsList food={cardapio} page="perfil" />
    </>
  )
}

export default Perfil
