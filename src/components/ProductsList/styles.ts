import styled from 'styled-components'
import { Props } from '.'
import { Card, Image, Reviews, Title } from '../Product/styles'
import { breakpoints, colors } from '../../styles'
import { TagStyle } from '../Tag/styles'

export const ListContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul<Omit<Props, 'food'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.page === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  row-gap: ${(props) => (props.page === 'home' ? '48px' : '32px')};
  column-gap: ${(props) => (props.page === 'home' ? '80px' : '32px')};

  ${Card} {
    background-color: ${(props) =>
      props.page === 'home' ? `${colors.white}` : `${colors.pink}`};
    color: ${(props) =>
      props.page === 'home' ? `${colors.pink}` : `${colors.lightPink}`};
    padding: ${(props) => (props.page === 'home' ? '0' : '8px')};
  }

  ${Title} {
    font-size: ${(props) => (props.page === 'home' ? '18px' : '16px')};
  }

  ${Reviews} {
    visibility: ${(props) => (props.page === 'home' ? 'visible' : 'hidden')};
  }

  ${TagStyle} {
    visibility: ${(props) => (props.page === 'home' ? 'visible' : 'hidden')};
  }

  ${Image} {
    max-height: ${(props) => (props.page === 'home' ? '220px' : '170px')};
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
