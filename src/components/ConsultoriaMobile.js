import React from 'react';
import '../css/consultoriaMobile.css';
import servico1 from '../assets/imgs/service1.png';
import servico2 from '../assets/imgs/service2.png';

function ConsultoriaMobile(){
    return(
    <section className="consultoriaMobile">
        <div className="consultoriaTextArea1Mobile">
                <h2 className="consultoriaTitleMobile">Consultoria</h2>
                <p className="consultoriaParagraphMobile">Nossa equipe conta com profissionais capacitados na elaboração de diagnósticos técnicos de identificação e classificação de resíduos para a correta descaracterização, desmobilização e destinação de materiais gerados em processos industriais.</p>
                <button className="consultoriaBtnMobile">Entre em contato!</button>
            </div>
            
            <img src={servico1} alt="imagem ilustrando trabalhadores realizando seu serviço" className="consultoriaImg1Mobile"></img>
            
            <div className="consultoriaTextArea2Mobile">
                <h2 className="consultoriaTitleMobile">Mão de Obra Especializada</h2>
                <p className="consultoriaParagraphMobile">Contamos com colaboradores treinados e capacitados para executar toda gestão e manuseio de resíduos nas instalações do fornecedor respeitando suas políticas de segurança para garantir um serviço de excelência na destinação dos materiais.</p>
                <button className="consultoriaBtnMobile">Entre em contato!</button>
            </div>

            <img src={servico2} alt="imagem ilustrando trabalhadores realizando seu serviço" className="consultoriaImg2Mobile"></img>

    </section>    
    );
}

export default ConsultoriaMobile;