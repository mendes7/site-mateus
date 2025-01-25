import React, { useState, useEffect } from 'react';
import Card from './cards';
import Rotate from './rotate';

// Importações dinâmicas das imagens

// Importações Marés de Liberdade
const mar1 = () => import('../assets/fotografias/mar-foto/mar1.jpg');
const mar2 = () => import('../assets/fotografias/mar-foto/mar2.jpg');
const mar3 = () => import('../assets/fotografias/mar-foto/mar3.jpg');
const mar4 = () => import('../assets/fotografias/mar-foto/mar4.png');
const mar5 = () => import('../assets/fotografias/mar-foto/mar5.jpg');

const Fotografia = () => {
    const [marImages, setMarImages] = useState<any[]>([]);

    useEffect(() => {
        // Carregar as imagens dinamicamente
        const loadImages = async () => {
            const images = await Promise.all([mar4(),mar3(),mar2(),mar1(),   mar5()]);
            setMarImages(images.map(img => img.default)); // Extraindo o default se necessário
        };

        loadImages();
    }, []);

    // Preparar os dados de imagem com legendas
    const sub = marImages.map((src) => ({
        src,
        caption: `Marés de Liberdade | 2015`,
    }));

    return (
        <div className='grid justify-center items-center my-28 pb-32'>
            <Rotate />

            <Card imageData={sub} />
        </div>
    );
};

export default Fotografia;
