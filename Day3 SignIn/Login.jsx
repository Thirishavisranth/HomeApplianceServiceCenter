import React from 'react';
import { useState } from 'react';
import validator from 'validator';
import "./login.css";
import { Link } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!pass) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email);
    }
  };

  return (
    <div className='App'>
      <div className='uth-form'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Enter email id'
            id='email'
            name='email'
          />
          {errors.email && <div className='errors'>{errors.email}</div>}
          <label htmlFor='password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder='Enter password'
            id='password'
            name='password'
          />
          {errors.password && <div className='errors'>{errors.password}</div>}
          <button type='submit'>Log In</button>
        </form>
        <Link to="/register" className='link-btn'>
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
