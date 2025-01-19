import styled from 'styled-components'
import { colors } from '../../styles'
import { StyleButton } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

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

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.lightPink};
    border: 1px solid ${colors.lightPink};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
