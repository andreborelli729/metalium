import React from 'react';
import './css/footer.css';
import logoAndreBorelli from './assets/imgs/logoAndreBorelli.png';

function Footer(){
    return(
<section className="footer">
<a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Web Developer" className="footerImg"></img></a>
<p className="footerParagraph">Nota: Este site foi oferecido em um trabalho freelance por uma empresa terceirizada de TI, acabei tendo imprevistos e não consegui concluir o projeto na época. Não é a versão oficial da empresa e nem o site oficial desta empresa (Metalium),o mesmo não foi feito por mim. Apenas fiz o site conforme layout enviado, por opção pessoal para usar de portfólio. O site foi desenvolvido em React JS e o código deste é original meu.</p>
</section>

    );
}

export default Footer;