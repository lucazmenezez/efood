import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import Card from '../Card'

import { PurchasePayload, usePurchaseMutation } from '../../services/api'

import { Column, InputGroup } from './styles'
import { useState } from 'react'

type CheckoutProps = {
  onContinue: () => void
  onBack: () => void
  step: 'delivery' | 'payment'
}

const Checkout = ({ onContinue, onBack, step }: CheckoutProps) => {
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
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
          products: [
            {
              id: 1,
              price: 190
            }
          ]
        }
        purchase(combinedData)
      }
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <>
            <p className="margin-bottom">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-bottom">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-bottom">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-bottom">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button title="Clique aqui para concluir o pedido" type="button">
              Concluir
            </Button>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {step === 'delivery' && (
            <Card title="Entrega">
              <>
                <Column>
                  <InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('receiver', form.errors.receiver)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="description">Endereço</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={form.values.description}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('description', form.errors.description)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                  </InputGroup>
                  <div className="inputGroupFlex">
                    <InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('zipCode', form.errors.zipCode)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="numberAdress">Número</label>
                      <input
                        type="text"
                        id="numberAdress"
                        name="numberAdress"
                        value={form.values.numberAdress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'numberAdress',
                          form.errors.numberAdress
                        )}
                      </small>
                    </InputGroup>
                  </div>
                  <InputGroup>
                    <label htmlFor="complement">Complemento(opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('complement', form.errors.complement)}
                    </small>
                  </InputGroup>
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
                </Column>
              </>
            </Card>
          )}
          {step === 'payment' && (
            <Card title="Pagamento - Valor a pagar R$ 190,90">
              <>
                <Column>
                  <InputGroup>
                    <label htmlFor="cardName">Nome no Cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardName', form.errors.cardName)}
                    </small>
                  </InputGroup>
                  <div className="inputGroupFlex">
                    <InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número no cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </div>
                  <div className="inputGroupFlex">
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês de Vencimento</label>
                      <input
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano de Vencimento</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                  </div>
                  <div className="margin-top">
                    <Button
                      title="Clique aqui para finalizar a compra"
                      type="submit"
                      onClick={form.handleSubmit}
                    >
                      Finalizar o pagamento
                    </Button>
                    <Button
                      title="Clique aqui para voltar a edição de endereço"
                      type="button"
                      onClick={onBack}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </div>
                </Column>
              </>
            </Card>
          )}
        </form>
      )}
    </div>
  )
}

export default Checkout
