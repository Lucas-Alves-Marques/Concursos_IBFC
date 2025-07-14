import { useEffect, useState } from 'react';
import Style from './Inscriptions.module.css';

function Inscriptions() {

    const idUser = localStorage.getItem('idUser');

    const [contests, setContests] = useState([]);

    const [message, setMessage] = useState('');

    const getContests = () => {

        fetch(`http://localhost:3333/Inscription/list/${idUser}`)
            .then(response => {

                if (!response.ok) {

                    throw new Error(response.status)
                }

                return response.json();

            })
            .then(data => setContests(data.message))
            .catch((err) => { console.log(err) });

    };

    const deleteInsc = (idInsc) => {

        fetch(`http://localhost:3333/Inscription/delete/${idInsc}`, {

            method: 'DELETE'

        })
            .then(response => {

                if (response.ok) {

                    setMessage('Inscrição Deletada');

                    getContests();
                }

            })
            .catch((err) => {

                setMessage('Erro ao Excluir Inscrição');

                console.log(err);

            });

    };

    useEffect(() => {

        getContests();

    }, []);



    return (

        <div className={Style.body}>

            <h1>Inscrições Realizadas</h1>
            <div className={Style.cards}>

                {contests.length == 0 ?

                    <div className={Style.alert}>

                        <h3>Sem Inscrições</h3>

                    </div>

                    :

                    contests?.map((contest) => {

                        if (contest.status !== 'Closed') {

                            return (

                                <div className={Style.card}>

                                    <h3>{contest.position}</h3>
                                    <p>{contest.customer}</p>
                                    <p>{contest.location}</p>
                                    <p>Salário: R$ {contest.salary}</p>

                                    <button onClick={(e) => { e.preventDefault(); deleteInsc(contest.id_insc) }}>Excluir</button>


                                </div>

                            )
                        }

                    })

                }

            </div>

            {message &&

                <div className={Style.message}>

                    <h4>{message}</h4>

                    <button onClick={() => { setMessage('') }}>OK</button>


                </div>

            }

        </div>

    );

}

export default Inscriptions;