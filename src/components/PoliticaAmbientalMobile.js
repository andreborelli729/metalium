import React from 'react';
import graficoSustentabilidade from '../assets/imgs/graficoSustentabilidade.png';
import '../css/politicaAmbientalMobile.css';

function PoliticaAmbientalMobile(){
    return(
        <section className="politicaAmbientalMobile">
        <h2 className="politicaAmbientalTitleMobile">Sustentabilidade, políticas de responsabilidade ao meio ambiente e na ética empresarial</h2>
            <p className="politicaAmbientalParagraphMobile">Nossa responsabilidade socioambiental segue requisitos legais e princípios de sustentabilidade desde atitudes individuais e empresariais voltados ao desenvolvimento de uma atividade correta e sustentável de bem-estar do indivíduo e sem agressão ao planeta. Desenvolvemos atividades de reaproveitamento de materiais recicláveis para que possamos colaborar com o desenvolvimento de uma sociedade sustentável evitando agressões ao meio ambiente, considerando que os recursos naturais são limitados. E consequentemente o descarte e a reutilização responsável geram benefícios como a economia energética, a redução do efeito estufa (GEE), a poluição dos aterros sanitários e a preservação das fontes de matéria prima.
            </p>
            <img src={graficoSustentabilidade} alt="Gráfico Representando Conceitos de Sustentabilidade" className="politicaAmbientalImgMobile"></img>
         <div className="politicaAmbientalFooterMobile">
            <p className="politicaAmbientalFooterParagraphMobile">Respeitamos e '
                <span class="politicaAmbientalFooterSpanMobile"> 
                     seguimos eticamente as regras de segurança 
                </span> 
                ' para que possamos garantir aos nossos clientes a origem dos materiais evitando 
                a comercialização de materiais de origem duvidosa e o descarte inadequado. 
            </p>
         </div>


        </section>
    );
}

export default PoliticaAmbientalMobile;