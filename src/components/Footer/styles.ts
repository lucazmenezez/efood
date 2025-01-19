import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterStyle = styled.footer`
  background-color: ${colors.lightPink};
  padding: 40px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const ListItem = styled.li`
  list-style: none;

  &:nth-child(2) {
    margin: 0 8px;
  }

  a {
    text-decoration: none;
  }

  i {
    height: 24px;
  }
`

export const Copyright = styled.small`
  font-weight: 400;
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`
