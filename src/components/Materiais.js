import React from "react";
import niquel from '../assets/imgs/niquel.png';
import bronze from '../assets/imgs/bronze.png';
import acoInox from '../assets/imgs/inox.png';
import cobre from '../assets/imgs/cobre.png';
import aluminio from '../assets/imgs/aluminio.png';
import latao from '../assets/imgs/latao.png';
import { Link } from "react-router-dom";



import '../css/materiais.css';

function Materiais(){
    return(

        <div className="materiais">
            <h2 className="materiaisTitle">Trabalhamos com os materiais</h2>

            <div className="materiaisGridContainer">
                <figure className="materiaisFigure1">
                    <figcaption className="materiaisFigcaption">Niquel</figcaption>
                    <img src={niquel} className="materiaisImg" alt="Imagem do metal Níquel"></img>
                </figure>

                <figure className="materiaisFigure2">
                    <figcaption className="materiaisFigcaption">Bronze</figcaption>
                    <img src={bronze} className="materiaisImg" alt="Imagem do metal Bronze"></img>
                </figure>

                <figure className="materiaisFigure3">
                    <figcaption className="materiaisFigcaption">Aço Inox</figcaption>
                    <img src={acoInox} className="materiaisImg" alt="Imagem do Aço Inox"></img>
                </figure>

                <figure className="materiaisFigure4">
                    <figcaption className="materiaisFigcaption">Cobre</figcaption>
                    <img src={cobre} className="materiaisImg" alt="Imagem do metal Cobre"></img>
                </figure>

                <figure className="materiaisFigure5">
                    <figcaption className="materiaisFigcaption">Alumínio</figcaption>
                    <img src={aluminio} className="materiaisImg" alt="Imagem do metal Alumínio"></img>
                </figure>

                <figure className="materiaisFigure6">
                    <figcaption className="materiaisFigcaption">Latão</figcaption>
                    <img src={latao} className="materiaisImg" alt="Imagem do metal Latão"></img>
                </figure>

                
          
            </div>

        <Link to='/contato'><button className="materiaisBtn">Converse com a gente!</button></Link>
        </div>
    );

}

export default Materiais;