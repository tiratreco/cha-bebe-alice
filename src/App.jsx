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

  // --- CONFIGURAÇÕES ---
  const whatsAppNumber = "558994461907"; 
  const confirmationMessage = "Olá! Confirmo minha presença no Chá de Bebê da Alice!";
  const googleMapsLink = "https://maps.app.goo.gl/2Y9Uhu7f1cUHN8y19";

  const whatsappLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(confirmationMessage)}`;

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
          <strong>Sábado</strong>
          <p>19 de Março</p>
        </div>
        <div>
          <strong>Horário</strong>
          <p>18 horas</p>
        </div>
      </div>

      <p className="location">Cond. Atlântico Sul - Talatona</p>

      <div className="actions-container">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="action-button">
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

      <p className="footer-text">Confirme a sua presença até dia 10/03/2025</p>

    </div>
  );
}

export default App;