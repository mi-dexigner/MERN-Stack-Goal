import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const { email, password} = formData;
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
     if (email === "") {
      toast.error('Email is Required Field')
    }else if (password === "") {
      toast.error('Passwords is Required Field')
    } else {
      // const userData = {
      //   name,
      //   email,
      //   password,
      // }

      
    }
  }

  return (
    <div>
      <section className='heading'>
    <h1>
      <FaSignInAlt /> Login
    </h1>
    <p>Login and start setting goals</p>
  </section>
  <section className='form'>
        <form onSubmit={onSubmit}>
          
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Login
            </button>
          </div>
        </form>
      </section>
  </div>
  )
}
