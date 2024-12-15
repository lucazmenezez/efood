import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import { GlobalStyle } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />
  },
  {
    path: '/perfil',
    element: <></>
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
    </>
  )
}

export default App
