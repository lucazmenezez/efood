import { useDispatch, useSelector } from 'react-redux'

import hero from '../../assets/images/banner_hero.png'
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Link } from 'react-router-dom'

export type Props = {
  page: 'home' | 'profile'
}

const Header = ({ page }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  if (page === 'home') {
    return (
      <S.HeaderContainer style={{ backgroundImage: `url(${hero})` }}>
        <div className="container">
          <S.HeaderBar page={page}>
            <h1 className="title">
              <img src={logo} alt="Efood" />
            </h1>
            <S.Title>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Title>
          </S.HeaderBar>
        </div>
      </S.HeaderContainer>
    )
  }
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${hero})` }}>
      <div className="container">
        <S.HeaderBar page={page}>
          <S.HeaderLink
            title="Clique aqui para voltar a página de Restaurantes"
            to="/"
          >
            Restaurantes
          </S.HeaderLink>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <S.HeaderCart
            onClick={openCart}
            title="Clique aqui para abrir o carrinho de compras"
          >
            {items.length} <span>produto(s) no carrinho</span>
            <img src={cart} alt="carrinho de compras" />
          </S.HeaderCart>
        </S.HeaderBar>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
