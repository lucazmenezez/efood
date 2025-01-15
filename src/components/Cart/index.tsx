import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  PricesContainer,
  Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal/index'
import Checkout from '../Checkout'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment'>('cart')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getFullPrice = () => {
    return items.reduce((acumulador, valorTotal) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorTotal.preco!)
    }, 0)
  }

  const handleNextStep = () => {
    if (step === 'cart') {
      setStep('delivery')
    } else if (step === 'delivery') {
      setStep('payment')
    }
  }

  const handlePreviousStep = () => {
    if (step === 'payment') {
      setStep('delivery')
    } else if (step === 'delivery') {
      setStep('cart')
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                  ></button>
                </CartItem>
              ))}
            </ul>
            <PricesContainer>
              <p>Valor Total</p>
              <span>{formataPreco(getFullPrice())}</span>
            </PricesContainer>
            <Button
              type="button"
              title="Clique aqui para continuar a compra"
              onClick={handleNextStep}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {step === 'delivery' && (
          <Checkout
            onContinue={handleNextStep}
            onBack={handlePreviousStep}
            step="delivery"
          />
        )}
        {step === 'payment' && (
          <Checkout
            onContinue={() => console.log('Finalizar pagamento')}
            onBack={handlePreviousStep}
            step="payment"
          />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
