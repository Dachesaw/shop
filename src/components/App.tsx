import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Footer />
    </div>
  )
}

export default App
