import { useState } from 'react'

import Tag from '../Tag'
import Button from '../Button'
import Modal from '../Modal'

import iconStar from '../../assets/images/icon_star.svg'

import { Menu } from '../../pages/Home'

import * as S from './styles'

export type Props = {
  image: string
  tags?: string[]
  title: string
  reviews?: number
  description: string
  page: 'home' | 'profile'
  id: number
  price: number
  portion: string
}

const Product = ({
  image,
  tags = [],
  title,
  reviews,
  description,
  page,
  id,
  portion,
  price
}: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const openModalConst = () => setOpenModal(true)
  const closeModalConst = () => setOpenModal(false)

  const getDescription = (descricao: string) => {
    if (descricao.length > 124) {
      return descricao.slice(0, 121) + '...'
    }

    return descricao
  }

  const food: Menu = {
    foto: image,
    preco: price,
    id: id,
    nome: title,
    descricao: description,
    porcao: portion
  }

  return (
    <>
      <S.Card>
        <S.Image src={image} alt="Imagem dos Restaurantes" />
        <S.TagContainer>
          {tags.map((etiqueta, index) => (
            <Tag key={`${etiqueta}-${index}`}>{etiqueta}</Tag>
          ))}
        </S.TagContainer>
        <S.Content>
          <S.Div>
            <S.Title>{title}</S.Title>
            <S.Reviews>
              {reviews}
              <img src={iconStar} alt="Ícone de estrela de avaliações" />
            </S.Reviews>
          </S.Div>
          <S.Description>
            {page === 'profile' ? getDescription(description) : description}
          </S.Description>
          {page === 'home' ? (
            <Button
              type="link"
              title="Ver todos os pratos desse restaurante"
              to={`/perfil/${id}`}
            >
              Saiba Mais
            </Button>
          ) : (
            <Button
              type="button"
              title="Ver mais informações sobre o prato"
              onClick={openModalConst}
            >
              Mais Detalhes
            </Button>
          )}
        </S.Content>
      </S.Card>
      {openModal && (
        <Modal
          closeModal={closeModalConst}
          name={title}
          description={description}
          portion={portion}
          price={price}
          image={image}
          food={food}
        />
      )}
    </>
  )
}

export default Product
