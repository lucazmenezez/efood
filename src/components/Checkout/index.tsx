import Button from '../Button'
import Card from '../Card'
import { Column, InputGroup } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Entrega">
      <>
        <Column>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input type="text" id="fullName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input type="text" id="adress" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </InputGroup>
          <div className="inputGroupFlex">
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input type="text" id="number" />
            </InputGroup>
          </div>
          <InputGroup>
            <label htmlFor="complemento">Complemento(opcional)</label>
            <input type="text" id="complemento" />
          </InputGroup>
          <div className="margin-top">
            <Button
              title="Clique aqui para ir ao formulário de pagamento"
              type="button"
            >
              Continuar com pagamento
            </Button>
            <Button title="Clique aqui para voltar ao carrinho" type="button">
              Voltar para o carrinho
            </Button>
          </div>
        </Column>
      </>
    </Card>
    <Card title="Pagamento - Valor a pagar R$ 190,90">
      <>
        <Column>
          <InputGroup>
            <label htmlFor="cardName">Nome no Cartão</label>
            <input type="text" id="cardName" />
          </InputGroup>
          <div className="inputGroupFlex">
            <InputGroup>
              <label htmlFor="cardNumber">Número no cartão</label>
              <input type="text" id="cardNumber" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input type="text" id="cardCode" />
            </InputGroup>
          </div>
          <div className="inputGroupFlex">
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de Vencimento</label>
              <input type="text" id="expiresMonth" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de Vencimento</label>
              <input type="text" id="expiresYear" />
            </InputGroup>
          </div>
          <div className="margin-top">
            <Button title="Clique aqui para finalizar a compra" type="button">
              Finalizar o pagamento
            </Button>
            <Button
              title="Clique aqui para voltar a edição de endereço"
              type="button"
            >
              Voltar para a edição de endereço
            </Button>
          </div>
        </Column>
      </>
    </Card>
  </div>
)

export default Checkout
