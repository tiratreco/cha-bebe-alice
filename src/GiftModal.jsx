import React, { useState } from 'react';
import './GiftModal.css';
import qrCodeImage from './assets/pix-qrcode.png';

const GiftModal = ({ isOpen, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);
  const pixKey = "00020126580014br.gov.bcb.pix01365bad5cc7-b4ea-48cf-bcc8-c65e024645d95204000053039865802BR5925DARA TAYNARA DE SOUSA SEN6015FRANCO DA ROCHA62070503***63047B85";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Mostra a mensagem por 2 segundos
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Sugestão de Presente</h2>
        <p>Sinta-se à vontade para nos presentear via Pix!</p>
        <img src={qrCodeImage} alt="QR Code Pix" className="pix-qrcode" />
        <p>Ou use a chave "copia e cola":</p>
        <div className="pix-key-container">
          <span>{pixKey}</span>
          <button onClick={handleCopy}>
            {isCopied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftModal; 