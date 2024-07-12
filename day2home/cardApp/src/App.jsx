import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import BasicCard from './components/BasicCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React</h1>
      {/* <img src="" alt="" /> */}
      <Navbar/>
      {/* <View/>
      <Add/> */}
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/cd' element={<BasicCard/>}></Route>
      </Routes>
    </>
  )
}

export default App
