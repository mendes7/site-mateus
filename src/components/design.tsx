import React, { useState, useEffect } from 'react';
import Card from './cards';
import Rotate from './rotate';

// Importações dinâmicas das imagens

// Importações Taste Of
const taste1 = () => import('../assets/designs/tasteof-dg/1.png');
const taste2 = () => import('../assets/designs/tasteof-dg/2.png');
const taste3 = () => import('../assets/designs/tasteof-dg/3.png');
const taste4 = () => import('../assets/designs/tasteof-dg/4.png');
const taste5 = () => import('../assets/designs/tasteof-dg/5.png');
const taste6 = () => import('../assets/designs/tasteof-dg/6.png');
const taste7 = () => import('../assets/designs/tasteof-dg/7.png');
const taste8 = () => import('../assets/designs/tasteof-dg/8.png');
const taste9 = () => import('../assets/designs/tasteof-dg/9.png');
const taste10 = () => import('../assets/designs/tasteof-dg/10.png');
const taste11 = () => import('../assets/designs/tasteof-dg/11.png');

// Importações Marvin Gaye
const marvin1 = () => import('../assets/designs/marvin-dg/1.png');
const marvin2 = () => import('../assets/designs/marvin-dg/2.png');
const marvin3 = () => import('../assets/designs/marvin-dg/3.png');
const marvin4 = () => import('../assets/designs/marvin-dg/4.png');
const marvin5 = () => import('../assets/designs/marvin-dg/5.png');

// Importações Revista Bibiana
const revistabibianacapa = () => import('../assets/designs/revistabibiana.png');

const DesignGrafico = () => {
  const [tasteImages, setTasteImages] = useState<any[]>([]);
  const [marvinImages, setMarvinImages] = useState<any[]>([]);
  const [revistaImage, setRevistaImage] = useState<any>(null);

  useEffect(() => {
    // Carregar as imagens dinamicamente
    const loadImages = async () => {
      const taste = await Promise.all([taste4(),taste3(),taste2(),taste1(),   taste11(),taste10(),taste9(),taste8(),taste7(),taste6(),taste5(),]);
      setTasteImages(taste.map(img => img.default)); // Extraindo o default se necessário

      const marvin = await Promise.all([marvin4(),marvin3(),marvin2(),marvin1(),   marvin5(),]);
      setMarvinImages(marvin.map(img => img.default)); // Extraindo o default se necessário

      const revista = await revistabibianacapa();
      setRevistaImage(revista.default); // Extraindo o default se necessário
    };

    loadImages();
  }, []);

  const taste = tasteImages.map((src) => ({
    src,
    caption: `Taste Of | Identidade Visual | 2024`,
  }));

  const marvin = marvinImages.map((src) => ({
    src,
    caption: `Marvin Gaye | Capa de Single | 2024`,
  }));

  const revistabibiana = [
    { src: revistaImage, caption: 'Revista Bibiana (Capa) | 2024' },
  ];

  return (
    <div className='grid justify-center items-center my-28 pb-32'>
      <Rotate />

      <Card imageData={taste} />
      <Card imageData={marvin} />
      <div className='mt-52'>
        <Card imageData={revistabibiana} />
      </div>
    </div>
  );
};

export default DesignGrafico;
