import Style from './Footer.module.css';
import Baseboard from '../../img/rodape.png';

function Footer() {

    return (

        <div className={Style.body}>

            <img src={Baseboard} />
            <div className={Style.main}>

                <div>

                    <p>Instituto Brasileiro de Formação e Capacitação</p>
                    <p>Rua Waldomiro Gabriel de Mello, 86 - Chácara Agrindus</p>
                    <p>CEP 06763-020 - Taboão da Serra - SP</p>

                </div>
                <div>

                    <p>Tel/Fax: (11) 4788-1430</p>
                    <p>Dias úteis das 9h às 17h</p>
                    <p>2024 © IBFC - Todos os direitos reservados</p>

                </div>

            </div>

        </div>
    );

}

export default Footer;