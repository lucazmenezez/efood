import Product from '../Product'
import { List, ListContainer } from './styles'

export type Props = {
  page: 'home' | 'perfil'
}

const ProductsList = ({ page }: Props) => (
  <ListContainer>
    <List page={page}>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </List>
  </ListContainer>
)

export default ProductsList
