import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

const App = () => {
  return (
    <>
    <Router>  
    <div className='container'>
    <Header />
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Routes>
    
    <ToastContainer />
    </div>
    </Router>
    </>
  )
}

export default App