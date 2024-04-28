import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
