import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  max-width: 472px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 8px;
  border: 1px solid ${colors.pink};
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
  line-height: 22px;
`
