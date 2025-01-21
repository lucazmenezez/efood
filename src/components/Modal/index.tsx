import { useDispatch } from 'react-redux'

import Button from '../Button'

import close from '../../assets/images/close.svg'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import { Description, Title } from '../Product/styles'
import * as S from './styles'

type ModalProps = {
  closeModal: () => void
  name: string
  description: string
  portion: string
  price: number
  image: string
  food: Menu
}

const Modal = ({
  closeModal,
  image,
  name,
  description,
  portion,
  price,
  food
}: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <S.ModalContainer className="visible">
      <S.Content className="container">
        <S.IconClose
          src={close}
          alt="Fechar modal"
          title="Clique aqui para fechar o modal"
          onClick={closeModal}
        />
        <img src={image} alt={name} />
        <S.Text>
          <Title>{name}</Title>
          <Description>
            {description}
            <br />
            <br />
            <span>Serve: {portion}</span>
          </Description>
          <Button
            type="button"
            title="Adicionar o prato ao carrinho"
            onClick={addToCart}
          >
            Adicionar ao Carrinho - {parseToBrl(price)}
          </Button>
        </S.Text>
      </S.Content>
      <div className="overlay" onClick={closeModal}></div>
    </S.ModalContainer>
  )
}

export default Modal
