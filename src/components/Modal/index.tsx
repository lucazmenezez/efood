import Button from '../Button'
import { Description, Title } from '../Product/styles'
import { Content, IconClose, ModalContainer, Text } from './styles'
import close from '../../assets/images/close.svg'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Menu } from '../../pages/Home'

type ModalProps = {
  fecharModal: () => void
  nome: string
  descricao: string
  porcao: string
  preco: number
  imagem: string
  food: Menu
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({
  fecharModal,
  descricao,
  imagem,
  nome,
  porcao,
  preco,
  food
}: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <ModalContainer className="visible">
      <Content className="container">
        <IconClose src={close} alt="Fechar modal" onClick={fecharModal} />
        <img src={imagem} alt={nome} />
        <Text>
          <Title>{nome}</Title>
          <Description>
            {descricao}
            <br />
            <br />
            <span>Serve: {porcao}</span>
          </Description>
          <Button type="button" title="Ir para o carrinho" onClick={addToCart}>
            Adicionar ao Carrinho - {formataPreco(preco)}
          </Button>
        </Text>
      </Content>
      <div className="overlay" onClick={fecharModal}></div>
    </ModalContainer>
  )
}

export default Modal
