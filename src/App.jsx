import { useState } from 'react'
import emaLogo from './images/Logo.svg'
import './App.css'
import Header from './components/header/header'
import MainContainer from './components/main container/main-container'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
    </div>
  )
}

export default App
