import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import Card from '../Card'

import { PurchasePayload, usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'
import { clear, close } from '../../store/reducers/cart'

import * as S from './styles'

type CheckoutProps = {
  onContinue: () => void
  onBack: () => void
  step: 'delivery' | 'payment'
}

const Checkout = ({ onContinue, onBack, step }: CheckoutProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [deliveryData, setDeliveryData] = useState<PurchasePayload['delivery']>(
    {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  )

  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (isSuccess) {

  //   }
  // }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      numberAdress: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver:
        step === 'delivery'
          ? Yup.string().min(5).required('O campo é obrigatório')
          : Yup.string(),
      description:
        step === 'delivery'
          ? Yup.string().min(5).required('O campo é obrigatório')
          : Yup.string(),
      city:
        step === 'delivery'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      zipCode:
        step === 'delivery'
          ? Yup.string().min(9).max(9).required('O campo é obrigatório')
          : Yup.string(),
      numberAdress:
        step === 'delivery'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      complement: Yup.string(),
      cardName:
        step === 'payment'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      cardNumber:
        step === 'payment'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      cardCode:
        step === 'payment'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      expiresMonth:
        step === 'payment'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string(),
      expiresYear:
        step === 'payment'
          ? Yup.string().required('O campo é obrigatório')
          : Yup.string()
    }),
    onSubmit: (values) => {
      if (step === 'delivery') {
        setDeliveryData({
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberAdress),
            complement: values.complement
          }
        })
        onContinue()
      } else if (step === 'payment') {
        const combinedData: PurchasePayload = {
          delivery: deliveryData,
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          }))
        }
        purchase(combinedData)
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const orderSuccess = () => {
    dispatch(close())
    dispatch(clear())
    window.location.reload()
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <>
            <p className="text-order">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="text-order">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="text-order">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="text-order">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              title="Clique aqui para concluir o pedido"
              type="button"
              onClick={orderSuccess}
            >
              Concluir
            </Button>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {step === 'delivery' && (
            <Card title="Entrega">
              <>
                <S.Column>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('receiver') ? 'error' : ''}
                      placeholder="João Silva"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="description">Endereço</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={form.values.description}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('description') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div className="inputGroupFlex">
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        placeholder="12345-678"
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="numberAdress">Número</label>
                      <InputMask
                        type="text"
                        id="numberAdress"
                        name="numberAdress"
                        value={form.values.numberAdress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numberAdress') ? 'error' : ''
                        }
                        placeholder="1234"
                        mask="9999"
                      />
                    </S.InputGroup>
                  </div>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento(opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <div className="margin-top">
                    <Button
                      title="Clique aqui para ir ao formulário de pagamento"
                      type="submit"
                    >
                      Continuar com pagamento
                    </Button>
                    <Button
                      title="Clique aqui para voltar ao carrinho"
                      type="button"
                      onClick={onBack}
                    >
                      Voltar para o carrinho
                    </Button>
                  </div>
                </S.Column>
              </>
            </Card>
          )}
          {step === 'payment' && (
            <Card
              title={`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}
            >
              <>
                <S.Column>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no Cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <div className="inputGroupFlex">
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número no cartão</label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        placeholder="0000 0000 0000 0000"
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        placeholder="000"
                        mask="999"
                      />
                    </S.InputGroup>
                  </div>
                  <div className="inputGroupFlex">
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de Vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        placeholder="00"
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de Vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        placeholder="0000"
                        mask="9999"
                      />
                    </S.InputGroup>
                  </div>
                  <div className="margin-top">
                    <Button
                      title="Clique aqui para finalizar a compra"
                      type="submit"
                      onClick={form.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Finalizando compra...'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      title="Clique aqui para voltar a edição de endereço"
                      type="button"
                      onClick={onBack}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </div>
                </S.Column>
              </>
            </Card>
          )}
        </form>
      )}
    </div>
  )
}

export default Checkout
