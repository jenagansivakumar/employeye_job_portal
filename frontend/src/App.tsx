import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import React from 'react'
import { JobsPage } from './components/pages/jobs/JobsPage'
import { LoginPage } from './components/pages/auth/LoginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
    <JobsPage/>
    </>
    
  )
}

export default App
