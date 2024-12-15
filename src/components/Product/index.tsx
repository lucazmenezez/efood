import { Card, Content, Description, Div, Image, Reviews } from './styles'

import iconStar from '../../assets/images/icon_star.svg'
import Tag from '../Tag'
import Button from '../Button'

const Product = () => (
  <Card>
    <Image src="//placehold.it/472x217" alt="teste" />
    <Tag>Etiqueta</Tag>
    <Content>
      <Div>
        <h3>nome do prato</h3>
        <Reviews>
          4.9
          <img src={iconStar} alt="Ícone de estrela de avaliações" />
        </Reviews>
      </Div>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        inventore numquam repellendus veritatis explicabo itaque fugiat,
        provident perspiciatis molestiae omnis impedit, velit dignissimos
        cupiditate iure nam rerum sequi repellat corporis.
      </Description>
      <Button type="link" title="Ver nossos pratos" to="/perfil">
        Saiba Mais
      </Button>
    </Content>
  </Card>
)

export default Product
