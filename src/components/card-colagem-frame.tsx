import React from "react";
import ColagemHome from '../assets/imagem-mateus2.jpg'

const Card = () => {
  return (
    <a href="portfolio/colagem">
    <div className="relative group cursor-pointer overflow-hidden duration-500 w-74 h-90 bg-zinc-800 text-zinc-800 p-1">
      <div className="">
        <img src={ColagemHome} alt="" />
        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div className="absolute -z-10 left-0 w-screen h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-gradient-to-t from-zinc-800 to-transparent" />
          <h1 className="text-3xl font-bold">Colagens</h1>
          <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2 className="group-hover:opacity-100 w-56 duration-500 opacity-0 font-semibold">Clique para ver mais</h2>
        </div>
      </div>
    </div>
    </a>
  );
};

export default Card;
