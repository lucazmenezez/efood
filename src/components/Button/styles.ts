import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const StyleButton = styled.button`
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  text-decoration: none;
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const StyleLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.white2};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`
