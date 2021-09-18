import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './auth.css'

const LoginForm = () => {
  let [errors, setErrors] = useState([]);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };




  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  // const clearForm = () => {
  //   const fieldEle = errors.length + email.length + password.length;
  //   const emailField = document.getElementById('emailField')
  //   const passwordField = document.getElementById('passwordField')
    
  //   if(fieldEle > 0){
  //     console.log(`triggered`)
  //     let tempErr = {...errors}
  //     delete tempErr.email
  //     delete tempErr.password
  //     setPassword(tempErr);

  //     emailField.innerHTML = '';
  //     passwordField.innerHTML = ''; 
  //   }
    
  // }

  return (
    <div className='login__bkg-1'>
    <div className='login__logo-container'>
    
    </div>
      <div className='login__form-container'>
      <div className='form__welcome-top'></div>
        <div className='login__errs-container'>
            {errors.map((error, ind) => (
              <div className='login__errors' key={ind}>{error}</div>
            ))}
          </div>
        <form onSubmit={onLogin} className='login__form'>
          
          <div className='login__field'>
            <label htmlFor='email' className='login__inputFiled'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              id='emailField'
              value={email}
              onChange={updateEmail}
              className='login__input'
            />
          </div>
          <div className='login__field'>
            <label htmlFor='password' className='login__inputFiled'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              id='passwordField'
              value={password}
              onChange={updatePassword}
              className='login__input'
            />
            
          </div>
          <button className='login__buttons login' type='submit'>Login</button>
          <button className='login__buttons cancel'>Cancel</button>
        </form>
        <div className='login__txt-container'>
          <p className='login__txt'>Don't have an account? Click <a className='link__singup' href='/singup'>Here </a> 
           to sign up!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
