import styled from 'styled-components'
import { cores } from '../../styles'
import { StyleButton } from '../Button/styles'

import lixeira from '../../assets/images/icon_lixeira.svg'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  padding: 32px 8px 0;

  ${StyleButton} {
    max-width: 100%;
    width: 100%;
  }
`

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  padding: 8px 8px 12px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
