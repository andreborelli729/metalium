import React from 'react';
import Sustentabilidade from '../components/Sustentabilidade.js';
import PoliticaAmbiental from '../components/PoliticaAmbiental.js';
import Materiais from '../components/Materiais.js';
import Cotacao from '../components/Cotacao.js';
import SustentabilidadeMobile from '../components/SustentabilidadeMobile.js';
import PoliticaAmbientalMobile from '../components/PoliticaAmbientalMobile.js'

function Home(){
    return(
<>
<Sustentabilidade/>
<SustentabilidadeMobile/>
<PoliticaAmbiental/>
<PoliticaAmbientalMobile/>
<Materiais/>
<Cotacao/>
</>

    );
}

export default Home;