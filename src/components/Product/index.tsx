import { useState } from 'react'
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
import Modal from '../Modal'

export type Props = {
  image: string
  tags?: string[]
  title: string
  reviews?: number
  description: string
  page: 'home' | 'perfil'
  id: number
}

const Product = ({
  image,
  tags = [],
  title,
  reviews,
  description,
  page,
  id
}: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = () => setModalAberto(true)
  const fecharModal = () => setModalAberto(false)

  return (
    <>
      <Card>
        <Image src={image} alt="teste" />
        <TagContainer>
          {(Array.isArray(tags) ? tags : []).map((etiqueta) => (
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
            <Button type="link" title="Ver nossos pratos" to={`/perfil/${id}`}>
              Saiba Mais
            </Button>
          ) : (
            <Button
              type="button"
              title="Ir para o carrinho"
              onClick={abrirModal}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </Content>
      </Card>
      {modalAberto && <Modal fecharModal={fecharModal} />}
    </>
  )
}

export default Product
