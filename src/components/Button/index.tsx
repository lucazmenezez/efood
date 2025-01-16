import { ReactNode } from 'react'
import { StyleButton, StyleLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({ type, title, children, to, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <StyleButton type="button" title={title} onClick={onClick}>
        {children}
      </StyleButton>
    )
  }
  return (
    <StyleLink to={to as string} title={title}>
      {children}
    </StyleLink>
  )
}

export default Button
