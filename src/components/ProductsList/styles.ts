import styled from 'styled-components'
import { Props } from '.'
import { Card, Reviews, Title } from '../Product/styles'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ListContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul<Props>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.page === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  row-gap: ${(props) => (props.page === 'home' ? '48px' : '32px')};
  column-gap: ${(props) => (props.page === 'home' ? '80px' : '32px')};

  ${Card} {
    background-color: ${(props) =>
      props.page === 'home' ? `${cores.branco}` : `${cores.rosa}`};
    color: ${(props) =>
      props.page === 'home' ? `${cores.rosa}` : `${cores.rosaClaro}`};
    padding: ${(props) => (props.page === 'home' ? '0' : '8px')};
  }

  ${Title} {
    font-size: ${(props) => (props.page === 'home' ? '18px' : '16px')};
  }

  ${Reviews} {
    visibility: ${(props) => (props.page === 'home' ? 'visible' : 'hidden')};
  }

  ${TagContainer} {
    visibility: ${(props) => (props.page === 'home' ? 'visible' : 'hidden')};
  }
`
