import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import InfoTooltip from '../components/InfoTooltip';
import { register } from '../auth';

export default function Register() {
  const [isValidRegister, setValidRegister] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupClick] = useState(false);
  const history = useHistory();

  const inputsValue = {
    email: '',
    password: ''
  }

  /*function validateRegister() {
    console.log('validação chamada')
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // test@gmail.com;
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // 8 caracteres, letra e número;
    console.log(inputsValue.email, inputsValue.password)
    if (inputsValue.email.match(emailRegEx) && inputsValue.password.match(passwordRegEx)) {
      console.log('vrau')
      setValidRegister(true);
      console.log(isValidRegister)
    }
    setRegisterPopupClick(true);
  }*/

  function handleSubmit(evt) {
    evt.preventDefault();
    register(inputsValue.email, inputsValue.password)
      .then((res) => {
        if (res.ok) {
          setValidRegister(true);
          history.push('/signin');
        } else {
          console.log(`Erro ${res.status}: Um dos campos não foi preenchido corretamente`)
        }
      })
    setRegisterPopupClick(true)
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    inputsValue[name] = value;
  }

  return (
    <>
      <form className='auth-form'>
        <h1 className='auth-form__title'>Inscrever-se</h1>
        <div className='auth-form__input-container'>
          <input id='email' name='email' placeholder='E-mail' className='auth-form__input' onChange={handleChange} />
          <input id='password' name='password' placeholder='Senha' className='auth-form__input' onChange={handleChange} />
        </div>
        <button type='submit' onClick={handleSubmit} className='auth-form__button'>Inscrever-se</button>
        <Link to='signin' className='auth-form__link'>
          Já é um membro ? Faça login aqui!
        </Link>
      </form>
      {isRegisterPopupOpen && <InfoTooltip isValidRegister={isValidRegister} setPopupState={setRegisterPopupClick} />}
    </>
  )
}