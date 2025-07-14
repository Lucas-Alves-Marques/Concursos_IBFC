import style from './Login.module.css';
import img from '../../img/logo2.png';
import { useState } from 'react';
import { IoEyeSharp as Visible } from "react-icons/io5";
import { BsEyeSlashFill as Invisible } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState({

        name: null,
        password: null,

    });

    const [visible, setVisible] = useState(false);

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {

        setUser(prev => ({

            ...prev,

            [e.target.name]: e.target.value

        }));

    };

    const handleInput = () => {

        setVisible(!visible);

    };

    const submitForm = (e) => {

        e.preventDefault();

        fetch('http://localhost:3333/Login', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)

        })
            .then(response => {

                if (!response.ok) {

                    throw new Error('Erro na requisição');

                }

                return response.json();

            })
            .then((data) => {

                localStorage.setItem('idUser', data.id);
                localStorage.setItem('nameUser', data.name);
                localStorage.setItem('typeUser', data.type);

                navigate('/menu');

            })
            .catch(err => {

                setMessage('Usuário Inválido');

                console.log(err);

            });

    };

    return (

        <div className={style.body}>

            <div className={style.card}>

                <form onSubmit={submitForm}>

                    <h2>Bem-Vindo</h2>
                    <div className={style.inputs}>
                        <div>

                            <h3>Usuário</h3>
                            <input
                                name='name'
                                onChange={(e) => { handleChange(e) }}
                            />

                        </div>
                        <div>

                            <h3>Senha</h3>
                            <div className={style.inputPassWord}>

                                <input
                                    type={visible ? 'text' : 'password'}
                                    name='password'
                                    onChange={(e) => { handleChange(e) }}
                                />
                                {visible

                                    ? <Invisible onClick={() => { handleInput() }} />
                                    : <Visible onClick={() => { handleInput() }} />

                                }

                            </div>

                        </div>
                    </div>

                    <button type='submit'>Entrar</button>

                </form>
                <div className={style.divLogo}>

                    <img src={img} alt='Logo do Instituto Brasileiro de Formação e Capacitação' />

                </div>

            </div>

            {message &&

                <div className={style.message}>

                    <h4>{message}</h4>

                    <button onClick={() => { setMessage('') }}>OK</button>


                </div>

            }

        </div>

    );

}

export default Login;