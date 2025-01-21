import React from 'react';
import Card from './cards'
import Rotate from './rotate';

import taste1 from '../assets/tasteof-dg/1.png';
import taste2 from '../assets/tasteof-dg/2.png';
import taste3 from '../assets/tasteof-dg/3.png';
import taste4 from '../assets/tasteof-dg/4.png';
import taste5 from '../assets/tasteof-dg/5.png';
import taste6 from '../assets/tasteof-dg/6.png';
import taste7 from '../assets/tasteof-dg/7.png';
import taste8 from '../assets/tasteof-dg/8.png';
import taste9 from '../assets/tasteof-dg/9.png';
import taste10 from '../assets/tasteof-dg/10.png';
import taste11 from '../assets/tasteof-dg/11.png';

import marvin1 from '../assets/marvin-dg/1.png';
import marvin2 from '../assets/marvin-dg/2.png';
import marvin3 from '../assets/marvin-dg/3.png';
import marvin4 from '../assets/marvin-dg/4.png';
import marvin5 from '../assets/marvin-dg/5.png';

const DesignGrafico = () => {

  const taste = [
    { src: taste4, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste3, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste2, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste1, caption: 'Taste Of | Identidade Visual | 2024' },
    
    { src: taste11, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste10, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste9, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste8, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste7, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste6, caption: 'Taste Of | Identidade Visual | 2024' },
    { src: taste5, caption: 'Taste Of | Identidade Visual | 2024' },
  ];

  const marvin = [
    { src: marvin4, caption: 'Marvin Gaye | Capa de Single | 2024' },
    { src: marvin3, caption: 'Marvin Gaye | Capa de Single | 2024' },
    { src: marvin2, caption: 'Marvin Gaye | Capa de Single | 2024' },
    { src: marvin1, caption: 'Marvin Gaye | Capa de Single | 2024' },
    
    { src: marvin5, caption: 'Marvin Gaye | Capa de Single | 2024' },
  ];

  return (
    <div className='grid justify-center items-center my-28'>        
      <Rotate />
      <Card imageData={taste} />
      <Card imageData={marvin} />
    </div>
  );
};

export default DesignGrafico;