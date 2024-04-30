import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainPage from './MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
