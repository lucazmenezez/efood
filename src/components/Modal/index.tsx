import image1 from '../../assets/images/image1.png'
import Button from '../Button'
import { Description, Title } from '../Product/styles'
import { ButtonContainer, Content, ModalContainer } from './styles'
import close from '../../assets/images/close.svg'

const Modal = () => (
  <>
    <ModalContainer className="container">
      <img src={image1} alt="" />
      <ButtonContainer>
        <img src={close} alt="" />
      </ButtonContainer>
      <Content>
        <Title>Pizza Marguerita</Title>
        <Description>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
          <br />
          <br />
          <span>Serve: de 2 a 3 pessoas</span>
        </Description>
        <Button type="button" title="Ir para o carrinho">
          Adicionar ao Carrinho - R$ 99,00
        </Button>
      </Content>
    </ModalContainer>
  </>
)

export default Modal
