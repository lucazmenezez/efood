import styled from 'styled-components'
import { Props } from '.'

export const HeaderContainer = styled.div`
  padding: 40px 0;
  text-align: center;
`

export const HeaderBar = styled.header<Props>`
  display: flex;
  flex-direction: ${(props) => (props.page === 'home' ? 'column' : 'row')};
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  padding-top: 120px;
  max-width: 600px;
`
