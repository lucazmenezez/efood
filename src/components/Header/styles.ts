import styled from 'styled-components'
import { Props } from '.'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles'

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

  .title {
    line-height: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
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
  color: ${colors.pink};
  text-decoration: none;
`

export const HeaderCart = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.pink};
  text-decoration: none;
  border: none;
  background-color: ${colors.lightPink};
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 8px;

  img {
    filter: invert(38%) sepia(76%) saturate(447%) hue-rotate(314deg)
      brightness(95%) contrast(88%); //cor do carrinho
  }
`
