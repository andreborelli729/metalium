import React from 'react';
import Consultoria from '../components/Consultoria.js';
import ConsultoriaMobile from '../components/ConsultoriaMobile.js';
import Locacao from '../components/Locacao.js';
import Servicos from '../components/Servicos.js';
import Materiais from '../components/Materiais.js';
import Cotacao from '../components/Cotacao';

function ServicosSolucoesPage(){
    return(
        <>
        
        <Consultoria/>
        <ConsultoriaMobile/>
        <Locacao/>
        <Servicos/>
        <Materiais/>
        <Cotacao/>
        
        </>
    );
}


export default ServicosSolucoesPage;