import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

const App = () => {
  const notify = () => toast("Wow so easy!");
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
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
    </div>
    </Router>
    </>
  )
}

export default App