import Button from '../Button'
import { Description, Title } from '../Product/styles'
import { Content, IconClose, ModalContainer, Text } from './styles'
import close from '../../assets/images/close.svg'

type ModalProps = {
  fecharModal: () => void
  nome: string
  descricao: string
  porcao: string
  preco: number
  imagem: string
}

const Modal = ({
  fecharModal,
  descricao,
  imagem,
  nome,
  porcao,
  preco
}: ModalProps) => {
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
          <Button type="button" title="Ir para o carrinho">
            Adicionar ao Carrinho - R$ {preco.toFixed(2)}
          </Button>
        </Text>
      </Content>
      <div className="overlay" onClick={fecharModal}></div>
    </ModalContainer>
  )
}

export default Modal
