import styled from 'styled-components'
import { Props } from '.'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  padding: 40px 0;
  text-align: center;
`

export const HeaderBar = styled.header<Props>`
  display: flex;
  flex-direction: ${(props) => (props.page === 'home' ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.page === 'home' ? 'center' : 'space-between'};
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  padding-top: 120px;
  max-width: 600px;
`

export const HeaderLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  text-decoration: none;
`

export const HeaderCart = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  text-decoration: none;
`
