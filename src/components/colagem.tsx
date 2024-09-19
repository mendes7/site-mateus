import React from 'react';
import Card from './cards'

// Importe as imagens
import imagemMateus1 from '../assets/imagem-mateus1.jpg';
import imagemMateus2 from '../assets/imagem-mateus2.jpg';
import imagemMateus3 from '../assets/imagem-mateus3.jpg';
import imagemMateus4 from '../assets/imagem-mateus4.jpg';

const Colagem = () => {

    const imagePaths1 = [
        { src: imagemMateus1, caption: 'teste 1' },
        { src: imagemMateus2, caption: 'teste 1' },
        { src: imagemMateus3, caption: 'teste 1' },
        { src: imagemMateus4, caption: 'teste 1' },
      ];
      

    return (
        <div className='mx-auto max-w-full my-28'>        
            <div className='grid grid-cols-3 gap-20'>
                <Card imageData={imagePaths1} />
                <Card imageData={imagePaths1} />
                <Card imageData={imagePaths1} />
            </div>
        </div>
    );
};

export default Colagem;