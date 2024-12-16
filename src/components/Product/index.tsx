import {
  Card,
  Content,
  Description,
  Div,
  Image,
  Reviews,
  Title
} from './styles'

import iconStar from '../../assets/images/icon_star.svg'
import Tag from '../Tag'
import Button from '../Button'

export type Props = {
  image: string
  tags?: string[]
  title: string
  reviews?: number
  description: string
}

const Product = ({ image, tags = [], title, reviews, description }: Props) => (
  <Card>
    <Image src={image} alt="teste" />
    {tags.map((etiqueta) => (
      <Tag key={etiqueta}>{etiqueta}</Tag>
    ))}
    <Content>
      <Div>
        <Title>{title}</Title>
        <Reviews>
          {reviews}
          <img src={iconStar} alt="Ícone de estrela de avaliações" />
        </Reviews>
      </Div>
      <Description>{description}</Description>
      {/* fazer um TERNÁRIO OU IF */}
      <Button type="link" title="Ver nossos pratos" to="/perfil">
        Saiba Mais
      </Button>
    </Content>
  </Card>
)

export default Product
