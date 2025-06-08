import React, { useState } from 'react';
import './App.css';
import GiftModal from './GiftModal';

// Importe suas imagens
import bearImage from './assets/bear.png';
import calendarIcon from './assets/icon-calendar.png';
import locationIcon from './assets/icon-location.png';
import giftIcon from './assets/icon-gift.png';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const googleMapsLink = "https://www.google.com/maps?q=-5.138781547546387,-42.755943298339844&z=17&hl=pt-BR";
  const formsLink = "https://docs.google.com/forms/d/e/1FAIpQLSe7kbfFOhA7m6cViMWeKLZoMTPAuSzc4drf7-toMF02A-lvKA/viewform?usp=sharing&ouid=107549857200910871000";

  return (
    <div className="invitation-container">
      <GiftModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <p className="header-text">Em breve a nossa princesa chegará!</p>

      <p className="celebrate-text">Venha celebrar conosco o</p>
      <h1 className="event-title">Chá de Bebê</h1>
      <p className="celebrate-text">da nossa pequena!</p>
      <h2 className="baby-name">Alice</h2>

      <img src={bearImage} alt="Urso com balões" className="main-image" />

      <div className="details-section">
        <div>
          <strong>Sexta</strong>
          <p>20 de Junho</p>
        </div>
        <div>
          <strong>Horário</strong>
          <p>19 horas</p>
        </div>
      </div>

      <p className="location">Quadra AH, Casa 02 - Parque Sul</p>

      <div className="actions-container">
        <a href={formsLink} target="_blank" rel="noopener noreferrer" className="action-button">
          <img src={calendarIcon} alt="Confirmar Presença" />
          <br />
          Confirme<br/>sua presença
        </a>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="action-button">
          <img src={locationIcon} alt="Localização" />
          <br />
          Localização<br/>do Evento
        </a>
        <button onClick={() => setModalOpen(true)} className="action-button">
          <img src={giftIcon} alt="Sugestão de Presente" />
          <br />
          Sugestões<br/>de Presente
        </button>
      </div>

      <p className="footer-text">Confirme a sua presença até dia 10/06/2025</p>

    </div>
  );
}

export default App;