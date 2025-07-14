import Style from './Menu.module.css';
import img from '../../img/logo2.png';
import { BsCardChecklist as CheckList } from "react-icons/bs";
import { FaListUl as List } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Menu() {

    const navigate = useNavigate();

    return (

        <div className={Style.body}>

            <div className={Style.main}>

                <div className={Style.logo}>

                    <img src={img} />
                    <h3>Instituto Brasileiro de Formação e Capacitação</h3>

                </div>
                <div className={Style.icons}>

                    <div onClick={() => { navigate('/contests') }}>

                        <List />
                        <h4>Concursos</h4>

                    </div>
                    <div onClick={() => { navigate('/inscription') }}>

                        <CheckList className={Style.checkList} />
                        <h4>Inscrições</h4>

                    </div>

                </div>

            </div>

        </div>
    );

}

export default Menu;