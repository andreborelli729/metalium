import {useState,React} from 'react';
import '../css/cotacaoLME.css';
import cotacaoLME from '../assets/imgs/cotacao.png';

function CotacaoLME(){
const[nome, setNome] = useState('');
const[email , setEmail] = useState('');


    return(
        <section className="cotacaoLME">
            <div className="cotacaoLMEGridContainer1">  
                <h2 className="cotacaoLMETitle">Cotação LME</h2>
                <p className="cotacaoLMEParagraph">Acompanhamos e informamos a sua empresa diariamente a cotação da LME (London Metal Exchange), se inscreva para receber diariamente nossa Newsletter.</p>
                <img src={cotacaoLME} alt="imagem ilustrativa no qual aparece um trabalhaador usando uma cálculadora" className="cotacaoLMEImg"></img>
            </div>
            <div className="cotacaoLMEGridContainer2">
                <form className="cotacaoLMEForm">
                <h4 className="cotacaoLMEFormTitle">Inscreva-se e receba a cotação LME diariamente</h4>

                <input
          type="text"
          className='cotacaoLMEInput'
          placeholder="Digite seu nome"
          name='nome'
          id='nomeLME'
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}/>
              <input
          type="text"
          className='cotacaoLMEInput'
          placeholder="Digite seu e-mail"
          name='email'
          id='emailLME'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
          <button className="cotacaoLMEBtn">Enviar</button>
                </form>
            </div>

        </section>
    );
}

export default CotacaoLME;
