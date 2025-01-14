import { JSX } from 'react'
import { ContainerCard } from './styles'

export type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <ContainerCard>
    <h2>{title}</h2>
    {children}
  </ContainerCard>
)

export default Card
