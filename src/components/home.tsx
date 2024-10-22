import React from 'react';
import { NavLink } from 'react-router-dom';
import ColagemHome from '../assets/imagem-mateus1.jpg'
import DesignGraficoHome from '../assets/imagem-mateus1.jpg'
import FotografiaHome from '../assets/fotografia-home.jpg'

import Rotate from './rotate';

const Home = () => {
  return (
    <div className='relative mx-auto max-w-6xl my-8 space-y-12'>
      
      <Rotate />

      <div className='grid grid-cols-3 gap-6'>
        {/* Card Colagens */}
        <NavLink 
          to="/portfolio/colagem" 
          className={({ isActive }) => 
            isActive ? 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50' : 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50'
          }
        >
          <div className="relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50">
            <img src={ColagemHome} alt="" className="w-full h-full object-cover" />
            <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-full h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-gradient-to-t from-zinc-800 to-transparent" />
              <h1 className="text-3xl font-bold">Colagens</h1>
              <p className="group-hover:opacity-100 w-full duration-500 opacity-0 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <h2 className="group-hover:opacity-100 w-full duration-500 opacity-0 font-semibold">Clique para ver mais</h2>
            </div>
          </div>
        </NavLink>

        {/* Card Designs Gráficos */}
        <NavLink 
          to="/portfolio/design-grafico" 
          className={({ isActive }) => 
            isActive ? 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50' : 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50'
          }
        >
          <div className="relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50">
            <img src={DesignGraficoHome} alt="" className="w-full h-full object-cover" />
            <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-full h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-gradient-to-t from-zinc-800 to-transparent" />
              <h1 className="text-3xl font-bold">Designs Gráficos</h1>
              <p className="group-hover:opacity-100 w-full duration-500 opacity-0 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <h2 className="group-hover:opacity-100 w-full duration-500 opacity-0 font-semibold">Clique para ver mais</h2>
            </div>
          </div>
        </NavLink>

        {/* Card Fotografias */}
        <NavLink 
          to="/portfolio/fotografia" 
          className={({ isActive }) => 
            isActive ? 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50' : 'block relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50'
          }
        >
          <div className="relative group cursor-pointer overflow-hidden duration-500 w-[20rem] h-[30rem] bg-zinc-800 text-neutral-50">
            <img src={FotografiaHome} alt="" className="w-full h-full object-cover" />
            <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-full h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-gradient-to-t from-zinc-800 to-transparent" />
              <h1 className="text-3xl font-bold">Fotografias</h1>
              <p className="group-hover:opacity-100 w-full duration-500 opacity-0 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <h2 className="group-hover:opacity-100 w-full duration-500 opacity-0 font-semibold">Clique para ver mais</h2>
            </div>
          </div>
        </NavLink>
      </div>

    </div>
  );
};

export default Home;
