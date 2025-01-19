import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCard = styled.div`
  padding: 32px 8px 0;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};

  h2 {
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .text-order {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 22px;
  }
`
