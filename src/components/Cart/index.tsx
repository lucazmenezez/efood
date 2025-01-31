import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Checkout from '../Checkout'

import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils/index'
import { RootReducer } from '../../store'

import * as S from './styles'

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

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            {step === 'cart' && (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      ></button>
                    </S.CartItem>
                  ))}
                </ul>
                <S.PricesContainer>
                  <p>Valor Total</p>
                  <span>{parseToBrl(getTotalPrice())}</span>
                </S.PricesContainer>
                <Button
                  type="button"
                  title="Clique aqui para continuar a compra"
                  onClick={handleNextStep}
                  disabled={items.length === 0}
                >
                  Continuar com a entrega
                </Button>
              </>
            )}
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            a compra
          </p>
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
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
