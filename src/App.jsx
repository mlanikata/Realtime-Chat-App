import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import ProfileUpdate from './pages/ProfileUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/profile' element={<ProfileUpdate/>} />
      </Routes>
    </>
  )
}

export default App
