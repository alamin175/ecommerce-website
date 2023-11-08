import { useState } from 'react'
import emaLogo from './images/Logo.svg'
import './App.css'
import Header from './components/header/header'
import Shop from './components/main container/main-container'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
