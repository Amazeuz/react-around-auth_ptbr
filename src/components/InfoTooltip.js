import React from 'react';
import loggedVector from '../images/logged_vector.svg';
import notLoggedVector from '../images/not_logged_vector.svg';
import exitIconSrc from '../images/vector__add.svg';

export default function InfoTooltip({ isValidRegister, popupState }) {

  function closeRegisterPopup() {
    popupState(false)
  }

  return (
    <div className='loginPopup'>
      <img src={exitIconSrc} className="form__exit" onClick={closeRegisterPopup} alt="Botão de fechar o pop-up" />
      <img src={isValidRegister ? loggedVector : notLoggedVector} alt='Imagem com o status de login' />
      {isValidRegister
        ? <p>Vitória ! Você conseguiu se registrar.</p>
        : <p>Ops ! Algo deu errado.</p>}
    </div>
  )
}