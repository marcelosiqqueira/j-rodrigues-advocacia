import React, { useState, useEffect } from 'react';
import './WppFloatingButton.css';

function WppFloatingButton() {

  const [expanded, setExpanded] = useState(true);

  const intervalTime = 5000;

  const whatsappLink = "https://wa.me/5534991610712?text=Olá%2C%20entrei%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20seu%20escritório%20de%20advocacia.";

  useEffect(() => {
    const interval = setInterval(() => {
        setExpanded((prev) => !prev);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);
  
  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div 
      className="floating-whatsapp-container"
      onClick={openWhatsApp}
    >
      {expanded ? (
        <div className="whatsapp-button expanded">
          <span className="whatsapp-icon" />
          <span className="button-text">Converse Conosco</span>
        </div>
      ) : (
        <div className="whatsapp-button collapsed">
          <span className="whatsapp-icon" />
        </div>
      )}
    </div>
  );
}

export default WppFloatingButton;
