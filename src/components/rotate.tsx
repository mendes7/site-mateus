import React from 'react';
import peixe from '../assets/logo-peixe.png';

const Rotate = () => {
  return (
    <div className="fixed inset-0 flex justify-center top-[65vh] -z-50">
      <div className="relative w-64 h-64 animate-orbit">
        {/* Adiciona a rotação no eixo próprio */}
        <img
          src={peixe}
          alt="Logo-Peixe Mateus Mendes girando e orbitando a tela"
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default Rotate;
