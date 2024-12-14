import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header page="home" />
      </div>
      <div className="container">
        <ProductsList />
      </div>
    </>
  )
}

export default App
