import React from 'react';
import sustentabilidade from '../assets/imgs/sustentabilidade.png';
import '../css/sustentabilidadeMobile.css';

function SustentabilidadeMobile(){
    return(
 <section className="sustentabilidadeMobile">
            <img src={sustentabilidade} className="sustentabilidadeImgMobile" alt="imagem simbolizando um mundo sustentável"></img>
                <div className="sustentabilidadeTextContainerMobile">
                <h4 className="sustentabilidadeTitleMobile">Metalium Sustentável</h4>
                <p className="sustentabilidadeParagraphMobile">Somos comprometidos com políticas de reciclagem sustentável e responsável para garantir o fornecimento seguro de resíduos lícitos e de qualidade aos nossos clientes
                </p>
                <button className="sustentabilidadeBtnMobile">Entre em Contato</button>
                </div>
        </section>

    );
}

export default SustentabilidadeMobile;