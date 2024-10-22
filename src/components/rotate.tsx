import React from 'react';
import raiam from '../assets/raiamkkk.png';

const Rotate = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[-10]">
      <div className="w-64 h-64 relative">
        <img
          src={raiam}
          alt="Imagem Percorrendo"
          className="w-full h-full absolute animate-orbit"
        />
      </div>
    </div>
  );
};

export default Rotate;
