import React from 'react';
import '../css/quemSomos.css';
import quemSomos from '../assets/imgs/about.png';
import { Link } from 'react-router-dom';


function QuemSomos() {
    return(
<div className="quemSomos">
        <div className="quemSomosTextContainer">
            <h1 className="quemSomosTitle">Quem Somos </h1>
            <p className="quemSomosParagraph">A METALIUM é uma empresa inovadora observadora dos conceitos ESG (Environmental, Social and Governance) com atuação nacional e internacional e larga experiencia na gestão e destinação de materiais não ferrosos. Somos comprometidos com nossos fornecedores para atender com segurança nossos clientes. E desenvolvemos políticas de economia circular e a sustentabilidade de todo o processo produtivo executando soluções seguras e de baixo impacto ao meio ambiente.
            </p>
            <p className="quemSomosParagraph2">Prestamos nossos serviços com responsabilidade para a 
		correta destinação de resíduos como:
		
		<span class="quemSomosSpan"> Níquel, Aço Inoxidável, Latão, 
		Cobre, Bronze, Alumínio, Chumbo, Baterias de Chumbo, 
		Transformadores, Medidores de Energia, Fios e Cabos. 
		</span>						
	
	    </p>
        <Link to='/cotacao-lme'><button className="quemSomosBtn">Fale com um consultor</button></Link>
    </div>
    <img src={quemSomos} alt="Imagem De um Trabalhador da Metalium" className="quemSomosImg"></img>  

</div>

    );
}


export default QuemSomos;