import { HeaderBar, HeaderContainer, Title } from './styles'

import hero from '../../assets/images/banner_hero.png'
import logo from '../../assets/images/logo.png'

export type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => (
  <HeaderContainer style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <HeaderBar page={page}>
        <img src={logo} alt="Efood" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderBar>
    </div>
  </HeaderContainer>
)

export default Header
