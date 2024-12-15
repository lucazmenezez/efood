import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const StyleButton = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  text-decoration: none;
  display: block;
`

export const StyleLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco2};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`
