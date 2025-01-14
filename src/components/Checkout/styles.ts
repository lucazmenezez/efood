import styled from 'styled-components'
import { cores } from '../../styles'
import { StyleButton } from '../Button/styles'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .inputGroupFlex {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
  }

  .margin-top {
    margin-top: 16px;
  }

  ${StyleButton} {
    display: block;
    margin-bottom: 8px;
  }
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.rosaClaro};
    border: 1px solid ${cores.rosaClaro};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
