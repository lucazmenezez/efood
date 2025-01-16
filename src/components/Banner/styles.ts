import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Bannerstyle = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }
`

export const BannerContainer = styled.div`
  padding: 24px 0 32px;
  position: relative;
  z-index: 1;
`

export const Category = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  margin-bottom: 156px;
`

export const Restaurant = styled.h3`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
`
