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

const arembepe1 = () => import('../assets/fotografias/arembepe-foto/1.jpg');
const arembepe2 = () => import('../assets/fotografias/arembepe-foto/2.jpg');
const arembepe3 = () => import('../assets/fotografias/arembepe-foto/3.jpg');
const arembepe4 = () => import('../assets/fotografias/arembepe-foto/4.jpg');
const arembepe5 = () => import('../assets/fotografias/arembepe-foto/5.jpg');
const arembepe6 = () => import('../assets/fotografias/arembepe-foto/6.jpg');
const arembepe7 = () => import('../assets/fotografias/arembepe-foto/7.jpg');
const arembepe8 = () => import('../assets/fotografias/arembepe-foto/8.jpg');
const arembepe9 = () => import('../assets/fotografias/arembepe-foto/9.jpg');
const arembepe10 = () => import('../assets/fotografias/arembepe-foto/10.jpg');
const arembepe11 = () => import('../assets/fotografias/arembepe-foto/11.jpg');

const Fotografia = () => {
    const [marImages, setMarImages] = useState<any[]>([]);
    const [arembepeImages, setArembepeImages] = useState<any[]>([]);

    useEffect(() => {
        // Carregar as imagens dinamicamente
        const loadImages = async () => {
            const mar = await Promise.all([mar1(),mar2(),mar3(),mar4(),   mar5()]);
            setMarImages(mar.map(img => img.default)); // Extraindo o default se necessário
            
            const arembepe = await Promise.all([arembepe1(),arembepe2(),arembepe3(),arembepe4(),   arembepe5(),arembepe6(),arembepe7(),arembepe8(),arembepe9(),arembepe10(),arembepe11(),]);
            setArembepeImages(arembepe.map(img => img.default)); // Extraindo o default se necessário
        };

        loadImages();
    }, []);

    // Preparar os dados de imagem com legendas
    const mar = marImages.map((src) => ({
        src,
        caption: `Marés de Liberdade | 2015`,
    }));
    const arembepe = arembepeImages.map((src) => ({
        src,
        caption: `Dia de Iemanjá (Arembepe) | 2020`,
    }));

    return (
        <div className='grid justify-center items-center my-28 pb-32'>
            <Rotate />

            <Card
            imageData={mar}
            textOverlay='Intitulada Marés de Liberdade, esta série de fotografias em preto e branco retrata meninos de um abrigo em Salvador aproveitando um dia de passeio à praia. O registro captura a essência da alegria e da liberdade, simbolizando a força transformadora de momentos simples. A ação fez parte de um projeto voluntário conduzido por Magda Mendes, minha mãe.'
            />

            <Card imageData={arembepe} />
        </div>
    );
};

export default Fotografia;
