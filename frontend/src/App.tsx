import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { LoginPage } from './components/pages/LoginPage'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
    </>
    
  )
}

export default App
