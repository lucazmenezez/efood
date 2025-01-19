import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import iconFacebook from '../../assets/images/icon_facebook.svg'
import iconInstagram from '../../assets/images/icon_instagram.svg'
import iconTwitter from '../../assets/images/icon_twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterStyle>
    <div className="container">
      <S.FooterContainer>
        <Link to="/">
          <img src={logo} alt="Logo Efood" />
        </Link>
        <S.List>
          <S.ListItem>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Clique aqui para acessar o Instagram"
            >
              <img src={iconInstagram} alt="Ícone do Instagram" />
            </a>
          </S.ListItem>
          <S.ListItem>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              title="Clique aqui para acessar o Facebook"
            >
              <img src={iconFacebook} alt="Ícone do Facebook" />
            </a>
          </S.ListItem>
          <S.ListItem>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              title="Clique aqui para acessar o Twitter"
            >
              <img src={iconTwitter} alt="Ícone do Twitter" />
            </a>
          </S.ListItem>
        </S.List>
        <S.Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Copyright>
      </S.FooterContainer>
    </div>
  </S.FooterStyle>
)

export default Footer
