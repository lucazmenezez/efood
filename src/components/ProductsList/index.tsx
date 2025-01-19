import { Menu, Restaurants } from '../../pages/Home'
import Product from '../Product'
import { List, ListContainer } from './styles'

export type Props = {
  page: 'home' | 'perfil'
  food: Restaurants[] | Menu[]
}

const ProductsList = ({ page, food }: Props) => (
  <ListContainer>
    <div className="container">
      <List page={page}>
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
      </List>
    </div>
  </ListContainer>
)

export default ProductsList
