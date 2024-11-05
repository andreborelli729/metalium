import React from 'react';
import '../css/consultoria.css';
import servico1 from '../assets/imgs/service1.png';
import servico2 from '../assets/imgs/service2.png';
import { Link } from 'react-router-dom';

function Consultoria(){
    return(
        <div className="consultoria">
            <div className="consultoriaTextArea1">
                <h2 className="consultoriaTitle">Consultoria</h2>
                <p className="consultoriaParagraph">Nossa equipe conta com profissionais capacitados na elaboração de diagnósticos técnicos de identificação e classificação de resíduos para a correta descaracterização, desmobilização e destinação de materiais gerados em processos industriais.</p>
                <Link to='/contato'><button className="consultoriaBtn">Entre em contato!</button></Link>
            </div>
            <img src={servico1} alt="imagem ilustrando trabalhadores realizando seu serviço" className="consultoriaImg1"></img>
            <img src={servico2} alt="imagem ilustrando trabalhadores realizando seu serviço" className="consultoriaImg2"></img>
            <div className="consultoriaTextArea2">
                <h2 className="consultoriaTitle">Mão de Obra Especializada</h2>
                <p className="consultoriaParagraph">Contamos com colaboradores treinados e capacitados para executar toda gestão e manuseio de resíduos nas instalações do fornecedor respeitando suas políticas de segurança para garantir um serviço de excelência na destinação dos materiais.</p>
                <Link to='/contato'><button className="consultoriaBtn">Entre em contato!</button></Link>
            </div>
        </div>

    );
}

export default Consultoria;