import React from 'react';
import '../css/missao.css';
import visao from '../assets/imgs/vision.png';
import valores from '../assets/imgs/values.png';
import missao from '../assets/imgs/mission.png';


function Missao(){
    return(
<div className="missao">
    <figure className="missaoFigure1">
        <img src={missao} alt="Imagem Figurando Uma Missão" className="missaoImg"></img>
        <figcaption className="missaoFigcaption">
            <h4 className="missaoTitle">Missão</h4>
            <p className="missaoParagraph">Na Metalium, nossa missão é o desenvolvimento de parcerias sólidas com nossos clientes e fornecedores oferecendo soluções confiáveis e eficientes para o descarte sustentável de resíduos pela melhor cotação.</p>
        </figcaption>
    </figure>

    <figure className="missaoFigure2">
        <img src={visao} alt="Imagem Figurando Uma Visão" className="missaoImg"></img>
        <figcaption className="missaoFigcaption">
            <h4 className="missaoTitle">Visão</h4>
            <p className="missaoParagraph">Ser reconhecido como a melhor empresa de reciclagem sustentável e mais comprometida com as disposições ESG ou ESG” (ou ASG – Ambiental, Social e Governança) do Brasil.</p>
        </figcaption>
    </figure>

    <figure className="missaoFigure3">
        <img src={valores} alt="Imagem Figurando Valores" className="missaoImg"></img>
        <figcaption className="missaoFigcaption">
            <h4 className="missaoTitle">Valores</h4>
            <p className="missaoParagraph">Responsabilidade e boas práticas socioambientais sempre respeitando valores pessoais, obrigações legais e econômicas.</p>
        </figcaption>
    </figure>
</div>

    );
}

export default Missao;