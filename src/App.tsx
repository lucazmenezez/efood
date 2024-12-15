import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList page="home" />
  },
  {
    path: '/perfil',
    element: <ProductsList page="perfil" />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header page="home" />
      </div>
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
      <Footer />
    </>
  )
}

export default App
