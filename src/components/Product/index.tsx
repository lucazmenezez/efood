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
  preco: number
  porcao: string
}

const Product = ({
  image,
  tags = [],
  title,
  reviews,
  description,
  page,
  id,
  preco,
  porcao
}: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = () => setModalAberto(true)
  const fecharModal = () => setModalAberto(false)

  const getDescription = (descricao: string) => {
    if (descricao.length > 124) {
      return descricao.slice(0, 121) + '...'
    }

    return descricao
  }

  return (
    <>
      <Card>
        <Image src={image} alt="Imagem dos Restaurantes" />
        <TagContainer>
          {tags.map((etiqueta, index) => (
            <Tag key={`${etiqueta}-${index}`}>{etiqueta}</Tag>
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
          <Description>
            {page === 'perfil' ? getDescription(description) : description}
          </Description>
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
      {modalAberto && (
        <Modal
          fecharModal={fecharModal}
          nome={title}
          descricao={description}
          porcao={porcao}
          preco={preco}
          imagem={image}
        />
      )}
    </>
  )
}

export default Product
