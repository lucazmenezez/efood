import Product from '../Product'

import { Menu, Restaurants } from '../../pages/Home'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  page: 'home' | 'profile'
  food: Restaurants[] | Menu[]
  isLoading: boolean
}

const ProductsList = ({ page, food, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  if (!food || food.length === 0) {
    return <p>Nenhum item encontrado.</p>
  }

  return (
    <S.ListContainer>
      <div className="container">
        <S.List page={page}>
          {page === 'home'
            ? (food as Restaurants[]).map((f) => {
                const tags = f.destacado
                  ? [f.tipo, 'Destaque da Semana']
                  : [f.tipo]

                return (
                  <Product
                    id={f.id}
                    key={f.id}
                    image={f.capa}
                    tags={tags as string[]}
                    title={f.titulo}
                    reviews={f.avaliacao}
                    description={f.descricao}
                    page={page}
                    price={0}
                    portion={''}
                  />
                )
              })
            : (food as Menu[]).map((f, index) => (
                <Product
                  id={f.id || index}
                  key={f.id || index}
                  image={f.foto}
                  tags={[]}
                  title={f.nome}
                  description={f.descricao}
                  page={page}
                  portion={f.porcao}
                  price={f.preco}
                />
              ))}
        </S.List>
      </div>
    </S.ListContainer>
  )
}

export default ProductsList
