import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

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
  const [home, setHome] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setHome(res))
  }, [])

  return (
    <>
      <Header page="home" />
      <ProductsList food={home} page="home" />
    </>
  )
}

export default Home
