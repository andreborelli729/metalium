import React from 'react';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import QuemSomosPage from './pages/QuemSomosPage.js';
import Servicos from './components/Servicos.js';
import CotacaoLMEPage from './pages/CotacaoLMEPage.js';
import ContatoPage from './pages/ContatoPage.js';
import ServicosSolucoesPage from './pages/ServicosSolucoesPage.js';
import Contato from './components/Contato.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function MyRoutes(){
    return(

<Router>
    <Navbar/>
<Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/quem-somos" element={<QuemSomosPage/>}></Route>
        <Route path="/servicos-e-solucoes" element={<ServicosSolucoesPage/>}></Route>
        <Route path="/cotacao-lme" element={<CotacaoLMEPage/>}></Route>
        <Route path="/contato" element={<ContatoPage/>}></Route>

        
        </Routes>

<Footer/>
</Router>

    );
}

export default MyRoutes;