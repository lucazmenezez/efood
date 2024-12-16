import Foods from '../../models/Foods'
import Product from '../Product'
import { List, ListContainer } from './styles'

export type Props = {
  page: 'home' | 'perfil'
  food: Foods[]
}

const ProductsList = ({ page, food }: Props) => (
  <ListContainer>
    <div className="container">
      <List page={page}>
        {food.map((f) => (
          <Product
            key={f.id}
            image={f.image}
            tags={f.tags}
            title={f.title}
            reviews={f.reviews}
            description={f.description}
          ></Product>
        ))}
      </List>
    </div>
  </ListContainer>
)

export default ProductsList
