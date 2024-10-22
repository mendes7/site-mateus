import React from 'react';
import Card from './cards'

import sev1 from '../assets/70s/70s_1.jpg';
import sev2 from '../assets/70s/70s_2.jpg';
import sev3 from '../assets/70s/70s_6.jpg';
import sev4 from '../assets/70s/70s_7.jpg';

import azul1 from '../assets/azul/azul1.jpg';
import azul2 from '../assets/azul/azul2.jpg';
import azul3 from '../assets/azul/azul3.jpg';
import azul4 from '../assets/azul/azul4.png';

import marrom1 from '../assets/marrom/marrom1.jpg';
import marrom2 from '../assets/marrom/marrom2.png';
import marrom3 from '../assets/marrom/marrom3.png';

const Colagem = () => {

    const sev = [
        { src: sev1, caption: '70s' },
        { src: sev2, caption: '70s' },
        { src: sev3, caption: '70s' },
        { src: sev4, caption: '70s' },
    ];

    const azul = [
        { src: azul1, caption: 'Azul' },
        { src: azul2, caption: 'Azul' },
        { src: azul3, caption: 'Azul' },
        { src: azul4, caption: 'Azul' },
    ];

    const marrom = [
        { src: marrom3, caption: 'Marrom' },
        { src: marrom2, caption: 'Marrom' },
        { src: marrom1, caption: 'Marrom' },
    ];

    return (
        <div className='grid grid-cols-2 gap-[550px] my-28'>
            <Card imageData={sev} />
            <Card imageData={azul} />
            <Card imageData={marrom} />
        </div>
    );
};

export default Colagem;