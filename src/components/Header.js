import React from 'react';
import lineIconSrc from '../images/logo/Line.svg'
import vectorIconSrc from '../images/logo/Vector.svg'

function Header({ checkToken, loggedIn }) {
  const currentURL = window.location.pathname;

  function getUserEmail() {
    checkToken()
      .then((res) => {
        console.log(res)
      })
  }

  //getUserEmail()

  function setHeaderLinks() {
    if (currentURL === '/signup') {
      return <a href='/signin' className='header__link'>Faça o login</a>
    }
    else if (currentURL === 'signin') {
      return <a href='/signup' className='header__link'>Inscreva-se</a>
    }
    else if (currentURL === '/') {
      return <p className='header__link'>{loggedIn && getUserEmail()}</p>
    }
  }

  return (
    <header className="header">
      <div className='header__container'>
        <img src={vectorIconSrc} id="vector-icon" className="header__title" alt="Logotipo Around The U.S." />
        <div>
          {setHeaderLinks()}
        </div>
      </div>
      <img src={lineIconSrc} id="line-icon" alt="Linha escura horizontal percorrendo o cabeçalho" />
    </header>
  );
}

export default Header;