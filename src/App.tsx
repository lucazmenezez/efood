import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
