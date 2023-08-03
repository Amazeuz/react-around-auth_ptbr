import React from 'react';
import loggedVector from '../images/logged_vector.svg';
import notLoggedVector from '../images/not_logged_vector.svg';
import exitIconSrc from '../images/vector__add.svg';

export default function InfoTooltip({ isValidRegister, setPopupState }) {

  function closeRegisterPopup() {
    setPopupState(false)
  }

  return (
    <div className='info-tool-tip-popup'>
      <img src={exitIconSrc} className="form__exit" onClick={closeRegisterPopup} alt="Botão de fechar o pop-up" />
      <img src={isValidRegister ? loggedVector : notLoggedVector} className='info-tool-tip-popup__image' alt='Imagem com o status de login' />
      <p className='info-tool-tip-popup__text'>
        {isValidRegister
          ? 'Vitória ! Você conseguiu se registrar.'
          : 'Ops ! Algo deu errado'}
      </p>
    </div>
  )
}