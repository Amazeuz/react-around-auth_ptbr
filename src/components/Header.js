import React from 'react';
import lineIconSrc from '../images/logo/Line.svg'
import vectorIconSrc from '../images/logo/Vector.svg'

function Header() {
  return (
    <header className="header">
        <img src={vectorIconSrc} id="vector-icon" className="header__title" alt="Logotipo Around The U.S." />
        <img src={lineIconSrc} id="line-icon" alt="Linha escura horizontal percorrendo o cabeçalho" />
    </header>
  );
}

export default Header;