import React from 'react';
import './CustomArrow.css'; 

interface CustomArrowProps {
  onClick?: () => void;
  direction: 'prev' | 'next';
}

const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, direction }) => {

  const arrowSymbol = direction === 'next' ? '>' : '<';

  return (
    <button
      type="button"
      className={`custom-arrow custom-arrow--${direction}`}
      onClick={onClick}
      aria-label={`Ir para o ${direction === 'next' ? 'próximo' : 'anterior'} slide`} // Acessibilidade
    >
      {arrowSymbol}
    </button>
  );
};

export default CustomArrow;
