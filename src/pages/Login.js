import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authorize, checkToken } from '../auth';
import InfoTooltip from '../components/InfoTooltip';

export default function Login({ handleLogin }) {
  const [isLoginPopupOpen, setLoginPopupClick] = useState(false);
  const [isValidLogin, setValidLogin] = useState(false);
  const history = useHistory();

  const inputsValue = {
    email: '',
    password: ''
  }

  /*const tokenStatus = checkToken(localStorage.getItem('jwt'));

  if (tokenStatus) {
    history.push('/')
  }*/

  function handleChange(evt) {
    const { name, value } = evt.target;
    inputsValue[name] = value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(inputsValue)

    authorize(inputsValue.email, inputsValue.password)
      .then((res) => {
        console.log(res)
        if (res) {
          handleLogin();
          history.push('/');
        } else {
          console.log('Algo deu Errado !')
        }
      })
    setLoginPopupClick(true);
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
      {isLoginPopupOpen && <InfoTooltip isValidLogin={isValidLogin} setPopupState={setLoginPopupClick} />}
    </>
  )
}