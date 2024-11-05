import React from 'react';
import '../css/servicos.css';
import servico1 from '../assets/imgs/servico1.png';
import servico2 from '../assets/imgs/servico2.png';
import servico3 from '../assets/imgs/servico3.png';
import { Link } from 'react-router-dom';

function Servicos(){
    return(
        <section className="servicos">
            <div className="servicosArea1">
                <img src={servico1} alt="imagem de homens trabalhando" className="servicosImg"></img>    

                <div className="servicosTextArea1">
                    <h5 className="servicosTitle">Rastreabilidade de Resíduos  </h5>
                    <p className="servicosParagraph">Documentamos todo controle de monitoramento 
					e a aplicamos a rastreabilidade de forma estruturada a origem, a
					comercialização, transporte e a destinação final dos materiais.</p>
                    <Link to='/contato'><button className="servicosBtn">Entre em contato!</button></Link>
                 </div>
            </div>



<div className="servicosArea2">
<img src={servico2} alt="imagem de homens trabalhando" className="servicosImg"></img>    

<div className="servicosTextArea2">
    <h5 className="servicosTitle">Desmobilização Industrial e Patrimonial  </h5>
    <p className="servicosParagraph">Implementamos todo planejamento para
					desmontagem, classificação de materiais, isolamento energético, transporte
					e destinação correta de máquinas e equipamentos relacionados ao projeto 
					de desmobilização de plantas industriais. </p>
   <Link to='/contato'> <button className="servicosBtn">Entre em contato!</button></Link>
 </div>
                
</div>

<div className="servicosArea3">
<img src={servico3} alt="imagem de homens trabalhando" className="servicosImg"></img>    

<div className="servicosTextArea2">
    <h5 className="servicosTitle">Descaracterização de Máquinas, Produtos e Equipamentos  </h5>
    <p className="servicosParagraph">Desenvolvemos projetos sob medida atendendo as
					exigências e regras do fornecedor para descaracterização, desmontagem e
					destruição de máquinas, produtos e equipamentos destinados a reciclagem
					e que não podem ser vendidos na forma original ao mercado.</p>
    <Link to='/contato'><button className="servicosBtn">Entre em contato!</button></Link>
 </div>
                
</div>

<div className="servicosArea4">
<h4 className="clienteTitle">Clientes</h4>
<h5 className="clienteTitle2">Atendimento sob medida</h5>
<h6 className="clienteSpan">Fornecimento de Materiais Selecionados
</h6>

<p className="clienteParagraph">Estruturamos projetos de fornecimento que atendam exigências pontuais de clientes que necessitam de matéria-prima reciclável classificada e seleciona da para industrialização. Executamos o todo processo da cadeia como captação, coleta, triagem e classificação de materiais como o <span className="clienteSpan">Níquel, Aço Inoxidável, Chumbo, Cobre, Latão, Bronze e Alumínio.</span></p>
                
</div>
        </section>


    );
}


export default Servicos;