import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 472px;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const Content = styled.div`
  padding: 8px;
  border: 1px solid ${cores.rosa};
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

export const Title = styled.h3`
  font-size: 18px;
`

export const Reviews = styled.span`
  display: flex;

  img {
    margin-left: 8px;
    height: 21px;
    width: 21px;
  }
`

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 22px;
`
