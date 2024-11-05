import {useState, React} from 'react';
import '../css/cotacao.css';

function Cotacao(){
    const[nome, setNome] = useState('');
    const[telefone,setTelefone] = useState('');
    const[email, setEmail] = useState('');
    const[empresa,setEmpresa] = useState('');
   
   return(
<section className="cotacao">
    <div className="cotacaoText">
        <h2 className="cotacaoTitle">Solicite uma cotação:
        </h2>
        <p className="cotacaoParagraph">Nossa equipe está a sua disposição para preparar um orçamento de acordo com as suas necessidades.

        </p>
        <p className="cotacaoParagraph2">Dados Pessoais
        </p>

    </div>
        <form className="cotacaoForm">
        <input
          type="text"
          className='cotacaoInput'
          placeholder="Digite seu nome"
          name='nome'
          id='nome'
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}/>
              <input
          type="tel"
          className='cotacaoInput'
          placeholder="Digite seu telefone"
          name='telefone'
          id='telefone'
          value={telefone}
          onChange={(e) => {
            setTelefone(e.target.value);
          }}/>
              <input
          type="text"
          className='cotacaoInput'
          placeholder="Digite seu e-mail"
          name='email'
          id='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
       
        <input
          type="text"
          className='cotacaoInput'
          placeholder="Digite sua empresa"
          name='empresa'
          id='empresa'
          value={empresa}
          onChange={(e) => {
            setEmpresa(e.target.value);
          }}/>
   </form>
   <button className="cotacaoBtn">Converse com a gente!</button>


</section>

    );
}

export default Cotacao;