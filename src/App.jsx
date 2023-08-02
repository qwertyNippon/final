import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom';

import './App.css'
import Navv from './components/Navv'
import Footer from './components/Footer'
import Home from './components/Home'
import Explore from './components/Explore'
import Login from './components/Login'
import Signup from './components/Signup'
import WatchList from './components/WatchList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navv />
      <Routes>
        <Route children path='/' element={<Home  />} />
        <Route children path='/login' element={<Login  />} />
        <Route children path='/explore' element={<Explore  />} />
        <Route children path='/signup' element={<Signup  />} />
        <Route children path='/watchList' element={<WatchList  />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
