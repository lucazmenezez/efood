import logo from '../../assets/images/logo.png'
import iconFacebook from '../../assets/images/icon_facebook.svg'
import iconInstagram from '../../assets/images/icon_instagram.svg'
import iconTwitter from '../../assets/images/icon_twitter.svg'
import {
  Copyright,
  FooterContainer,
  FooterStyle,
  List,
  ListItem
} from './styles'

const Footer = () => (
  <FooterStyle>
    <div className="container">
      <FooterContainer>
        <img src={logo} alt="Logo Efood" />
        <List>
          <ListItem>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iconInstagram} alt="Ícone do Instagram" />
            </a>
          </ListItem>
          <ListItem>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={iconFacebook} alt="Ícone do Facebook" />
            </a>
          </ListItem>
          <ListItem>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={iconTwitter} alt="Ícone do Twitter" />
            </a>
          </ListItem>
        </List>
        <Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Copyright>
      </FooterContainer>
    </div>
  </FooterStyle>
)

export default Footer
