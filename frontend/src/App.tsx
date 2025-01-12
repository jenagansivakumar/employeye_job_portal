import { useState } from 'react'
import './App.css'
import { JobsPage } from './components/pages/jobs/JobsPage'
import { LoginPage } from './components/pages/auth/login/LoginPage'
import { SignUpPage } from './components/pages/auth/signup/SignUpPage'
import { CreateJob } from './components/pages/jobs/CreateJob'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
      <Routes>
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path='/auth/signup' element={<SignUpPage/>} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/jobs/create' element={<CreateJob/>} />
        <Route path='/jobs/display' element={<JobsPage/>} />

      </Routes>
    
  )
}

export default App
