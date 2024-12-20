import React from 'react';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className="mx-auto max-w-6xl my-8 space-y-12">
      <h2 className="text-3xl font-bold text-center">Contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* E-mail */}
        <div className="p-8 bg-[#fbfbf3] shadow-lg">
          <FaEnvelope className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">E-mail</h3>
          <a 
            href="mailto:matmdsr@gmail.com" 
            className="text-blue-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            matmdsr@gmail.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="p-8 bg-[#fbfbf3] shadow-lg">
          <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <a 
            href="https://wa.me/5571992157339" 
            className="text-green-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            +55 (71) 99215-7339
          </a>
        </div>

        {/* Instagram */}
        <div className="p-8 bg-[#fbfbf3] shadow-lg">
          <FaInstagram className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instagram</h3>
          <a 
            href="http://www.instagram.com/2m.1r/" 
            className="text-pink-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            @2m.1r
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
