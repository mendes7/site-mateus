import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Colagem from './components/colagem';
import Design from './components/design';
import Fotografia from './components/fotografia';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Header from './components/header';

// import logo from './assets/logo-nlw-expert.svg'
// import logo from './assets/perfil-mateus.jpg'

export function App() {
    return (
      <div className="mx-auto max-w-6xl my-8">

        <Router>
          <div>
            {/* Adicione o Header para todas as páginas */}
            <Header />
            
            {/* Definindo as rotas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/colagem" element={<Colagem />} />
              <Route path="/portfolio/design-grafico" element={<Design />} />
              <Route path="/portfolio/fotografia" element={<Fotografia />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
        </Router>
      </div>
    )
}