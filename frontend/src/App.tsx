import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import React from 'react'
import { LoginPage } from './components/pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
    </>
    
  )
}

export default App
