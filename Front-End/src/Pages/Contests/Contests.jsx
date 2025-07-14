import { useEffect, useState } from 'react';
import Style from './Contests.module.css';

function Contests() {

    const idUser = localStorage.getItem('idUser');

    const [contests, setContests] = useState([]);

    const [message, setMessage] = useState('');

    useEffect(() => {

        fetch('http://localhost:3333/Contest/list')
            .then(response => {

                if (!response.ok) {

                    throw new Error(response.status)
                }

                return response.json();

            })
            .then(data => {

                const ContestsOpen = data.message.filter(contest => contest.status == 'Open');

                setContests(ContestsOpen)

            })
            .catch((err) => console.log(err));

    }, []);

    const signUp = (idContest) => {

        console.log(idUser);

        console.log(idContest);

        fetch(`http://localhost:3333/Inscription/create/${idUser}`, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                id_contest: idContest

            })
        })
            .then(response => {

                if (response.ok) {

                    setMessage('Inscrição realizada');
                }

                if (response.status == 403) {

                    setMessage('Inscrição Já Cadastrada')
                }

                else {

                    console.log(response);
                }

            })
            .catch((err) => {

                setMessage('Erro ao salvar a inscrição');

                console.log(err);

            });

    };

    return (

        <div className={Style.body}>

            <h1>Concursos</h1>
            <div className={Style.cards}>

                {contests.length > 0 ?

                    contests.map((contest) => (

                        <div className={Style.card}>

                            <h3>{contest.position}</h3>
                            <p>{contest.customer}</p>
                            <p>{contest.location}</p>
                            <p>Salário: R$ {contest.salary}</p>

                            <button onClick={(e) => { e.preventDefault(); signUp(contest.id) }}>Inscrever-se</button>

                        </div>

                    ))

                    :

                    <div className={Style.card}>

                        <h3>Sem Concursos Disponiveis</h3>

                    </div>

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

export default Contests;