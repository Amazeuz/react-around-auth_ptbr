import React from 'react';
import Header from '../components/Header';

export default function Login() {

  return (
    <div className="page">
      <Header />
      <div>
        <form className='auth-form'>
          <h1 className='auth-form__title'>Entrar</h1>
          <div className='auth-form__input-container'>
            <input name='email' placeholder='E-mail' className='auth-form__input' />
            <input name='password' placeholder='Senha' className='auth-form__input' />
          </div>
          <button type='submit' className='auth-form__button'>Entrar</button>
          <p>Ainda não é membro ? Inscreva-se aqui!</p>
        </form>
      </div>
    </div>
  )
}