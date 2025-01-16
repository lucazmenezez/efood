import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import Card from '../Card'

import { usePurchaseMutation } from '../../services/api'

import { Column, InputGroup } from './styles'

type CheckoutProps = {
  onContinue: () => void
  onBack: () => void
  step: 'delivery' | 'payment'
}

const Checkout = ({ onContinue, onBack, step }: CheckoutProps) => {
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

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
      receiver: Yup.string().when((values, schema) =>
        step === 'delivery'
          ? schema
              .min(5, 'O nome precisa ter pelo menos 5 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      description: Yup.string().when((values, schema) =>
        step === 'delivery'
          ? schema
              .min(5, 'O nome precisa ter pelo menos 5 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      city: Yup.string().when((values, schema) =>
        step === 'delivery' ? schema.required('O campo é obrigatório') : schema
      ),
      zipCode: Yup.string().when((values, schema) =>
        step === 'delivery'
          ? schema
              .min(9, 'O campo precisa ter pelo menos 10 caracteres')
              .max(9, 'O campo precisa ter 10 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      numberAdress: Yup.string().when((values, schema) =>
        step === 'delivery' ? schema.required('O campo é obrigatório') : schema
      ),
      complement: Yup.string(),

      cardName: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      const deliveryData = {
        receiver: values.receiver,
        adress: {
          city: values.city,
          complement: values.complement,
          zipCode: values.zipCode,
          number: Number(values.numberAdress),
          description: values.description
        }
      }

      const paymentData = {
        card: {
          name: values.cardName,
          number: values.cardNumber,
          code: Number(values.cardCode),
          expires: {
            month: Number(values.expiresMonth),
            year: Number(values.expiresYear)
          }
        }
      }

      purchase({
        delivery: deliveryData,
        payment: paymentData,
        products: [
          {
            id: 1,
            price: 190
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const handleFormSubmit = () => {
    form.handleSubmit() // Dispara a submissão do formulário
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
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
                    {getErrorMessage('numberAdress', form.errors.numberAdress)}
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
                  type="button"
                  onClick={onContinue}
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
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
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
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
                </InputGroup>
              </div>
              <div className="margin-top">
                <Button
                  title="Clique aqui para finalizar a compra"
                  type="submit"
                  onClick={handleFormSubmit}
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
  )
}

export default Checkout
