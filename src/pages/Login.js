import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authorize } from '../auth';
import InfoTooltip from '../components/InfoTooltip';
import { getContent } from '../auth';

export default function Login({ handleLogin }) {
  const [isLoginPopupOpen, setLoginPopupClick] = useState(false);
  const history = useHistory();

  const inputsValue = {
    email: '',
    password: ''
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getContent(jwt)
        .then(res => {
          if (res) {
            handleLogin();
            history.push('/');
          }
        })
    }
  }

  checkToken()

  function handleChange(evt) {
    const { name, value } = evt.target;
    inputsValue[name] = value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    authorize(inputsValue.email, inputsValue.password)
      .then((res) => {
        if (res) {
          handleLogin();
          history.push('/');
        }
        else {
          setLoginPopupClick(true);
        }
      })
  }

  return (
    <>
      <form className='auth-form'>
        <h1 className='auth-form__title'>Entrar</h1>
        <div className='auth-form__input-container'>
          <input name='email' placeholder='E-mail' className='auth-form__input' onChange={handleChange} />
          <input name='password' placeholder='Senha' className='auth-form__input' onChange={handleChange} />
        </div>
        <button type='submit' className='auth-form__button' onClick={handleSubmit}>Entrar</button>
        <Link to='signup' className='auth-form__link'>
          Ainda não é membro ? Inscreva-se aqui!
        </Link>
      </form>
      {isLoginPopupOpen && <InfoTooltip isValidFields={false} setPopupState={setLoginPopupClick} method='login' />}
    </>
  )
}