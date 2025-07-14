import Style from './Header.module.css'
import img from '../../img/logo2.png';
import { FaUser as Icon } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdExitToApp as Exit } from "react-icons/md";

function Header() {

    const nameUser = localStorage.getItem('nameUser');
    const typeUser = localStorage.getItem('typeUser');

    const URL = useLocation();
    const navigate = useNavigate();

    const Pages = [

        { id: 1, text: 'Home', url: '/menu', private: false },
        { id: 2, text: 'Concursos Disponíveis', url: '/contests', private: false },
        { id: 3, text: 'Inscrições', url: '/inscription', private: false },
        { id: 4, text: 'Gerenciamento de Concursos', url: '/management/Contests', private: true },

    ];

    return (

        <div className={Style.header}>

            <img src={img} alt='Logo do Instituto Brasileiro de Formação e Capacitação' />
            <ul>

                {Pages.map((page) => {

                    if (page.private && typeUser == 'Manager') {

                        return (


                            <li
                                key={page.id}
                                onClick={() => { navigate(page.url) }}
                                className={URL.pathname.includes(page.url) ? Style.selected : ''}
                            >

                                {page.text}

                            </li>

                        )

                    }

                    if (page.private == false) {

                        return (


                            <li
                                key={page.id}
                                onClick={() => { navigate(page.url) }}
                                className={URL.pathname.includes(page.url) ? Style.selected : ''}
                            >

                                {page.text}

                            </li>

                        )

                    }

                })}

            </ul>
            <div className={Style.iconsUser}>

                <div>

                    <Icon />
                    <h4>{nameUser}</h4>

                </div>
                <Exit onClick={() => { navigate('/') }} />

            </div>

        </div>
    );

};

export default Header;

