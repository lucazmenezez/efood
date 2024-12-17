import {
  Card,
  Content,
  Description,
  Div,
  Image,
  Reviews,
  TagContainer,
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
  page: 'home' | 'perfil'
}

const Product = ({
  image,
  tags = [],
  title,
  reviews,
  description,
  page
}: Props) => (
  <Card>
    <Image src={image} alt="teste" />
    <TagContainer>
      {tags.map((etiqueta) => (
        <Tag key={etiqueta}>{etiqueta}</Tag>
      ))}
    </TagContainer>
    <Content>
      <Div>
        <Title>{title}</Title>
        <Reviews>
          {reviews}
          <img src={iconStar} alt="Ícone de estrela de avaliações" />
        </Reviews>
      </Div>
      <Description>{description}</Description>
      {page === 'home' ? (
        <Button type="link" title="Ver nossos pratos" to="/perfil">
          Saiba Mais
        </Button>
      ) : (
        <Button type="button" title="Ir para o carrinho">
          Adicionar ao Carrinho
        </Button>
      )}
    </Content>
  </Card>
)

export default Product
