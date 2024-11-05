import React from 'react';
import prensa from '../assets/imgs/prensa.png';
import caminhao from '../assets/imgs/caminhao.png';
import escavadeira from '../assets/imgs/escavadeira.png';
import escavadeiraTesoura from '../assets/imgs/escavadeiratesoura.png';
import empilhadeira from '../assets/imgs/empilhadeira.png';
import trator from '../assets/imgs/trator.png';
import triturador from '../assets/imgs/trituradeira.png';
import guindaste from '../assets/imgs/guindaste.png';
import '../css/locacao.css';

function Locacao(){
    return(
<section className="locacao">
   <h2 className="locacaoTitle">Locação de Máquinas e Equipamentos</h2>
   <p className="locacaoParagraph">Possuímos equipamentos modernos como empilhadeiras, tratores, escavadeiras, tesouras, trituradores, guindastes, prensas enfardadeiras, caminhões e caçambas para coleta e transporte de resíduos atendendo sua empresa com segurança e responsabilidade.</p>
   <div className="locacaoGridContainer">
    
    <figure className="locacaoFigure1">
        <img src={empilhadeira} alt="Imagem de uma empilhadeira" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Empilhadeiras</figcaption>

    </figure>

    <figure className="locacaoFigure2">
        <img src={trator} alt="Imagem de um trat0r" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Trator</figcaption>

    </figure>

    <figure className="locacaoFigure3">
        <img src={escavadeira} alt="Imagem de uma escavade9ra" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Escavadeiras</figcaption>

    </figure>

    <figure className="locacaoFigure4">
        <img src={escavadeiraTesoura} alt="Imagem de uma escavadeira tesoura" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Escavadeira Tesoura</figcaption>

    </figure>

    <figure className="locacaoFigure5">
        <img src={triturador} alt="Imagem de um triturador" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Trituradores de Metais</figcaption>

    </figure>

    <figure className="locacaoFigure6">
        <img src={guindaste} alt="Imagem de um guindaste" className="locacaoImg"></img>
        <figcaption className="locacaoFigcaption">Guindaste</figcaption>

    </figure>  
    </div>

    </section>

    );
}

export default Locacao;