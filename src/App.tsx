import Header from './components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header page="home" />
      </div>
      <div className="container"></div>
    </>
  )
}

export default App
