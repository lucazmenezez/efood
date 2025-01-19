import { ReactNode } from 'react'

import * as S from './styles'

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
      <S.StyleButton type={type} title={title} onClick={onClick}>
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
