import React, { useState, useEffect } from 'react';
import Card from './cards';
import Rotate from './rotate';

// Importações dinâmicas das imagens

// Importações Submerso
const sub1 = () => import('../assets/colagens/submerso-col/sub1.jpg');
const sub2 = () => import('../assets/colagens/submerso-col/sub2.jpg');
const sub3 = () => import('../assets/colagens/submerso-col/sub3.jpg');
const sub4 = () => import('../assets/colagens/submerso-col/sub4.jpg');
const sub5 = () => import('../assets/colagens/submerso-col/sub5.jpg');
const sub6 = () => import('../assets/colagens/submerso-col/sub6.png');

const Colagem = () => {
    const [submersoImages, setSubmersoImages] = useState<any[]>([]);

    useEffect(() => {
        // Carregar as imagens dinamicamente
        const loadImages = async () => {
            const images = await Promise.all([sub4(),sub3(),sub2(),sub1(),   sub6(),sub5()]);
            setSubmersoImages(images.map(img => img.default)); // Extraindo o default se necessário
        };

        loadImages();
    }, []);

    // Preparar os dados de imagem com legendas
    const sub = submersoImages.map((src) => ({
        src,
        caption: `Mar Negro | Colagens Manuais e Poema, 2018`,
    }));

    return (
        <div className='grid justify-center items-center my-28 pb-32'>
            <Rotate />
            <Card imageData={sub} />
        </div>
    );
};

export default Colagem;
