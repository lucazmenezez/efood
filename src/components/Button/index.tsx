import { StyleButton, StyleLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, children, to, onClick }: Props) => {
  if (type === 'button') {
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
