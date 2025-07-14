import Style from './Conteiner.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Conteiner() {

    return (

        <div className={Style.body}>

            <Header />
            <div className={Style.main}>

                <Outlet />

            </div>
            <Footer />

        </div>

    );

}

export default Conteiner;