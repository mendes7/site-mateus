import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import setaBaixo from '../assets/seta-baixo.svg'; // Importando o SVG

const Header = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const location = useLocation(); // Para verificar a rota atual

  // Função para alternar a abertura/fechamento do submenu
  const togglePortfolioMenu = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  // Função para fechar o submenu ao clicar fora dele
  const handleClickOutside = (event: MouseEvent) => {
    if (portfolioRef.current instanceof HTMLDivElement && !portfolioRef.current.contains(event.target as Node)) {
      setIsPortfolioOpen(false);
    }
  };

  // useEffect para adicionar o event listener quando o componente monta e remover quando desmonta
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Verificar se a rota atual é uma das páginas do Portfólio
  const isPortfolioActive = location.pathname.includes('/portfolio');

  return (
    <header>
      <nav className='flex items-center justify-center gap-6 cursor-pointer'>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? 'font-bold' 
              : 'text-black no-underline'
          }
        >
          Home
        </NavLink>

        {/* Portfólio com seta SVG e submenu */}
        <div className='relative' ref={portfolioRef}>
          <button 
            onClick={togglePortfolioMenu} 
            className={`flex items-center space-x-2 ${isPortfolioActive ? 'font-bold' : 'text-black'}`}
          >
            <span>Portfólio</span>
            {/* Ícone de seta usando SVG */}
            <img 
              src={setaBaixo} 
              alt="Seta para baixo" 
              className={`size-3 transition-transform ${isPortfolioOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {/* Submenu */}
          {isPortfolioOpen && (
            <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50'>
              <NavLink 
                to="/portfolio/colagem" 
                className={({ isActive }) => 
                  isActive ? 'block px-4 py-2 font-bold hover:bg-gray-200' : 'block px-4 py-2 text-black hover:bg-gray-200'
                }
              >
                Colagem
              </NavLink>
              <NavLink 
                to="/portfolio/design-grafico" 
                className={({ isActive }) => 
                  isActive ? 'block px-4 py-2 font-bold hover:bg-gray-200' : 'block px-4 py-2 text-black hover:bg-gray-200'
                }
              >
                Design Gráfico
              </NavLink>
              <NavLink 
                to="/portfolio/fotografia" 
                className={({ isActive }) => 
                  isActive ? 'block px-4 py-2 font-bold hover:bg-gray-200' : 'block px-4 py-2 text-black hover:bg-gray-200'
                }
              >
                Fotografia
              </NavLink>
            </div>
          )}
        </div>

        <NavLink 
          to="/sobre" 
          className={({ isActive }) => 
            isActive 
              ? 'font-bold' 
              : 'text-black no-underline'
          }
        >
          Sobre
        </NavLink>
        <NavLink 
          to="/contato" 
          className={({ isActive }) => 
            isActive 
              ? 'font-bold' 
              : 'text-black no-underline'
          }
        >
          Contato
        </NavLink>
      </nav>

      <div className='h-px mt-8 bg-slate-700'/>

      <span className='cursor-default'>Mateus Mendes</span>
    </header>
  );
};

export default Header;
