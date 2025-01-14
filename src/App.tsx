import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './routes'
import { GlobalStyle } from './styles'
import { store } from './store'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
