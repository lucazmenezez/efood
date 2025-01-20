import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

const Button = ({ type, title, children, to, onClick, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.StyleButton
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.StyleButton>
    )
  }
  return (
    <S.StyleLink to={to as string} title={title}>
      {children}
    </S.StyleLink>
  )
}

export default Button
