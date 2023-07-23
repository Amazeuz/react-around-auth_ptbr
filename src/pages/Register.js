import React, { useState } from 'react';
import InfoTooltip from '../components/InfoTooltip';

export default function Register() {
  const [isValidRegister, setValidRegister] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupClick] = useState(false);

  function validateRegister() {
    setValidRegister(true)
  }

  function onSubmitClick(evt) {
    evt.preventDefault();
    validateRegister()
    setRegisterPopupClick(true)
  }

  return (
    <>
      <form className='auth-form'>
        <h1 className='auth-form__title'>Inscrever-se</h1>
        <div className='auth-form__input-container'>
          <input name='email' placeholder='E-mail' className='auth-form__input' />
          <input name='password' placeholder='Senha' className='auth-form__input' />
        </div>
        <button type='submit' onClick={onSubmitClick} className='auth-form__button'>Inscrever-se</button>
        <p>Já é um membro ? Faça Login aqui!</p>
      </form>
      {isRegisterPopupOpen && <InfoTooltip isValidRegister={isValidRegister} setPopupState={setRegisterPopupClick} />}
    </>
  )
}