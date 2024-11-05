import React from "react";
import graficoSustentabilidade from '../assets/imgs/graficoSustentabilidade.png';
import '../css/politicaAmbiental.css';

function PoliticaAmbiental(){
    return(
        <div className="politicaAmbiental">
            <h2 className="politicaAmbientalTitle">Sustentabilidade, políticas de responsabilidade ao meio ambiente e na ética empresarial</h2>
            <div className="politicaAmbientalGridContainer">
                <p className="politicaAmbientalParagraph">Nossa responsabilidade socioambiental segue requisitos legais e princípios de sustentabilidade desde atitudes individuais e empresariais voltados ao desenvolvimento de uma atividade correta e sustentável de bem-estar do indivíduo e sem agressão ao planeta. Desenvolvemos atividades de reaproveitamento de materiais recicláveis para que possamos colaborar com o desenvolvimento de uma sociedade sustentável evitando agressões ao meio ambiente, considerando que os recursos naturais são limitados. E consequentemente o descarte e a reutilização responsável geram benefícios como a economia energética, a redução do efeito estufa (GEE), a poluição dos aterros sanitários e a preservação das fontes de matéria prima.
                </p>
                <img src={graficoSustentabilidade} alt="Gráfico Representando Conceitos de Sustentabilidade" className="politicaAmbientalImg"></img>
             </div>
             <div className="politicaAmbientalFooter">
                <p className="politicaAmbientalFooterParagraph">Respeitamos e '
				    <span class="politicaAmbientalFooterSpan"> 
					     seguimos eticamente as regras de segurança 
				    </span> 
				    ' para que possamos garantir aos nossos clientes a origem dos materiais evitando 
				    a comercialização de materiais de origem duvidosa e o descarte inadequado. 
			    </p>
             </div>
        </div>
    
);
}

export default PoliticaAmbiental;