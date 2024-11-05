import React from  'react';
import sustentabilidade from '../assets/imgs/sustentabilidade.png';
import '../css/sustentabilidade.css';
import { Link } from 'react-router-dom';



function Sustentabilidade(){
    return(
        
        <div className="sustentabilidade">
            <img src={sustentabilidade} className="sustentabilidadeImg" alt="imagem simbolizando um mundo sustentável"></img>
                <div className="sustentabilidadeTextContainer">
                <h4 className="sustentabilidadeTitle">Metalium Sustentável</h4>
                <p className="sustentabilidadeParagraph">Somos comprometidos com políticas de reciclagem sustentável e responsável para garantir o fornecimento seguro de resíduos lícitos e de qualidade aos nossos clientes
                </p>
                <Link to ='/contato'><button className="sustentabilidadeBtn">Entre em Contato</button></Link>
                </div>
        </div>
    );
}

export default Sustentabilidade;