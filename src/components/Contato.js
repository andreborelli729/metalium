import {useState, React} from 'react';
import '../css/contato.css';
import whatsapp from '../assets/icons/whatsapp.png';
import mail from '../assets/icons/email.png';


function Contato(){
    const[nome,setNome] = useState('');
    const[email,setEmail] = useState('');
    const[telefone,setTelefone] = useState('');
    const[empresa, setEmpresa] = useState('');
    const[mensagem, setMensagem] = useState('');
    
    return(
        <section className="contato">
          
            <div className="contatoContainer">
                <h3 className="contatoTitle">Entre em contato</h3>
                <p className="contatoParagraph">Em breve um de nossos consultores entrará em contato com você
                </p>
                <form className="contatoForm">
                <input
          type="text"
          className='contatoInput'
          placeholder="Digite seu nome"
          name='nome'
          id='contatoNome'
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}/>
              <input
          type="tel"
          className='contatoInput'
          placeholder="Digite seu telefone"
          name='telefone'
          id='contatoTelefone'
          value={telefone}
          onChange={(e) => {
            setTelefone(e.target.value);
          }}/>
              <input
          type="text"
          className='contatoInput'
          placeholder="Digite seu e-mail"
          name='email'
          id='contatoEmail'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
       
        <input
          type="text"
          className='contatoInput'
          placeholder="Digite sua empresa"
          name='empresa'
          id='contatoEmpresa'
          value={empresa}
          onChange={(e) => {
            setEmpresa(e.target.value);
          }}/>
           <input
          type="text"
          className='contatoInputMsg'
          placeholder="Digite sua Mensagem"
          name='empresa'
          id='contatoMensagem'
          value={mensagem}
          onChange={(e) => {
            setMensagem(e.target.value);
          }}/>
              <button className="contatoBtn">Enviar</button>
                </form>
            </div>
            <aside className="contatoAside">
              <h6 className="contatoAsideTitle"> Metalium</h6>
              <p className="contatoAsideParagraph">+55 11 94302-2080 </p>
              <p className="contatoAsideParagraph">	comercial@metalium.com.br
              </p>
              <p className="contatoAsideParagraph"> Rua Pedro
              Gonçaves, 1400, 6º andar, Centro, Indaiatuba/SP 
              </p>
              <p className="contatoAsideParagraph">CEP 13.330-210 
              </p>
              <p className="contatoAsideParagraph">Converse com a gente!
              </p>
              <div className="contatoAsideImgContainer">
              <img src={whatsapp} className="contatoAsideImg"></img>
              <img src={mail} className="contatoAsideImg"></img>
              </div>
            </aside>

        </section>

    );
}

export default Contato;
