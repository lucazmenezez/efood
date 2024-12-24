import styled from 'styled-components'
import { cores } from '../../styles'
import { StyleButton } from '../Button/styles'

export const ModalContainer = styled.div`
  width: 100%;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border-radius: 8px;
  padding: 32px;
  display: flex;
  align-items: center;
  position: relative;

  > img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  margin-left: 24px;

  ${StyleButton} {
    max-width: 300px;
  }
`

export const ButtonContainer = styled.div`
  > img {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
