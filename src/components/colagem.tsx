import React from 'react';
import Card from './cards'
import Rotate from './rotate';

import sub1 from '../assets/submerso-col/sub1.jpg';
import sub2 from '../assets/submerso-col/sub2.jpg';
import sub3 from '../assets/submerso-col/sub3.jpg';
import sub4 from '../assets/submerso-col/sub4.jpg';
import sub5 from '../assets/submerso-col/sub5.jpg';
import sub6 from '../assets/submerso-col/sub6.png';

const Colagem = () => {

    const sub = [
        { src: sub4, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
        { src: sub3, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
        { src: sub2, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
        { src: sub1, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
        
        { src: sub6, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
        { src: sub5, caption: 'Mar Negro | Colagens Manuais e Poema, 2018' },
    ];

    return (
        <div className='grid grid-cols-2 gap-[550px] my-28'>
            <Rotate />

            <Card imageData={sub} />
        </div>
    );
};

export default Colagem;