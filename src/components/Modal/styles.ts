import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { StyleButton } from '../Button/styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Content = styled.div`
  background-color: ${cores.rosa};
  padding: 32px;
  color: ${cores.branco};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  img:nth-child(2) {
    display: block;
    width: 100%;
    max-width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 100px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    height: 95vh;

    h3 {
      margin-top: 16px;
    }
  }
`

export const IconClose = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Text = styled.div`
  margin-left: 24px;

  ${StyleButton} {
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`
