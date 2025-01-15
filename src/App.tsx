import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './routes'
import { GlobalStyle } from './styles'
import { store } from './store'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
