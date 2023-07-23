import React from 'react';
import lineIconSrc from '../images/logo/Line.svg'
import vectorIconSrc from '../images/logo/Vector.svg'

function Header() {
  const currentURL = window.location.href.split('/')[3];
  console.log(currentURL)

  function setHeaderText() {
    if (currentURL === 'signup') {
      return <a href='/signin' className='header__link'>Faça o login</a>
    }
    else if (currentURL === 'signin') {
      return <a href='/signup' className='header__link'>Entrar</a>
    }
  }

  return (
    <header className="header">
      <div className='header__container'>
        <img src={vectorIconSrc} id="vector-icon" className="header__title" alt="Logotipo Around The U.S." />
        <div>
          {setHeaderText()}
        </div>
      </div>
      <img src={lineIconSrc} id="line-icon" alt="Linha escura horizontal percorrendo o cabeçalho" />
    </header>
  );
}

export default Header;