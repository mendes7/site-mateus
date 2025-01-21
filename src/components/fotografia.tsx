import React from 'react';
import Card from './cards'
import Rotate from './rotate';

import mar1 from '../assets/mar-foto/mar1.jpg';
import mar2 from '../assets/mar-foto/mar2.jpg';
import mar3 from '../assets/mar-foto/mar3.jpg';
import mar4 from '../assets/mar-foto/mar4.png';
import mar5 from '../assets/mar-foto/mar5.jpg';

const Fotografia = () => {

    const sub = [
        { src: mar4, caption: 'Marés de Liberdade | 2015' },
        { src: mar3, caption: 'Marés de Liberdade | 2015' },
        { src: mar2, caption: 'Marés de Liberdade | 2015' },
        { src: mar1, caption: 'Marés de Liberdade | 2015' },
        
        { src: mar5, caption: 'Marés de Liberdade | 2015' },
    ];

    return (
        <div className='grid justify-center items-center my-28'>
            <Rotate />
            <Card imageData={sub} />
        </div>
    );
};

export default Fotografia;