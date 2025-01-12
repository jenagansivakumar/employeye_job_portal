import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import React from 'react'
import { JobsPage } from './components/pages/jobs/JobsPage'
import { LoginPage } from './components/pages/auth/LoginPage'
import { CreateJob } from './components/pages/jobs/CreateJob'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
    <JobsPage/>
    <CreateJob/>
    </>
    
  )
}

export default App
