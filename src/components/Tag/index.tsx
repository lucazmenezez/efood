import { TagStyle } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagStyle>{children}</TagStyle>

export default Tag
