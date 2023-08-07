import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authorize } from '../auth';
import InfoTooltip from '../components/InfoTooltip';

const inputsValue = {
  email: '',
  password: ''
}

export default function Login({ handleLogin, isValidToken }) {
  console.log(inputsValue)
  const [isLoginPopupOpen, setLoginPopupClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory();

  (function () {
    if (isValidToken()) {
      handleLogin();
      history.push('/');
    }
  }());

  function handleChange(evt) {
    const { name, value } = evt.target;
    inputsValue[name] = value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    authorize(email, password)
      .then((res) => {
        console.log(inputsValue)
        if (res !== undefined) {
          localStorage.setItem('jwt', res.token);
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