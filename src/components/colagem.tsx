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

// Importações Revista Bibiana
const revistabibianacapa = () => import('../assets/designs/revistabibiana.png');

const Colagem = () => {
    const [submersoImages, setSubmersoImages] = useState<any[]>([]);
    const [revistaImage, setRevistaImage] = useState<any>(null);

    useEffect(() => {
        // Carregar as imagens dinamicamente
        const loadImages = async () => {
            const images = await Promise.all([sub1(),sub2(),sub3(),sub4(),   sub5(),sub6()]);
            setSubmersoImages(images.map(img => img.default)); // Extraindo o default se necessário

            const revista = await revistabibianacapa();
            setRevistaImage(revista.default); // Extraindo o default se necessário
        };

        loadImages();
    }, []);

    // Preparar os dados de imagem com legendas
    const sub = submersoImages.map((src) => ({
        src,
        caption: `Mar Negro | Colagens Manuais e Poema, 2018`,
    }));

    const revistabibiana = [
        { src: revistaImage, caption: 'Revista Bibiana (Capa) | 2024' },
    ];

    return (
        <div className='grid justify-center items-center my-28 pb-32'>
            <Rotate />
            <Card imageData={sub} />

            <div className='mt-52'>
                  <Card imageData={revistabibiana} 
                  textOverlay="PT - Colagem analógica para a capa primeira edição da Revista Bibiana. Apresentando artigos, ensaios, poemas e contos, esta primeira publicação inaugura um novo canal para a circulação de saberes científicos e artísticos na graduação em Letras da UFBA.
                  
                  EN - Analog collage for the cover of the first edition of Revista Bibiana. Presenting articles, essays, poems and short stories, this first publication inaugurates a new channel for the circulation of scientific and artistic knowledge in the UFBA Literature degree." />
            </div>
        </div>
    );
};

export default Colagem;
