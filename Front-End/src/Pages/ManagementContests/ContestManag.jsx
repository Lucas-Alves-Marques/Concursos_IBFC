import { useNavigate } from 'react-router-dom';
import Style from './ContestManag.module.css';
import { useEffect, useState } from 'react';

function ContestManag() {

    const [contestsOpen, setContestsOpen] = useState([]);

    const [contestsClosed, setContestsClosed] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetch('http://localhost:3333/Contest/list')
            .then(response => response.json())
            .then(data => {

                const Open = [];
                const Closed = [];

                data.message.forEach((cont) => {

                    if (cont.status === 'Open') {

                        Open.push(cont);

                    } else {

                        Closed.push(cont);

                    }
                });

                setContestsOpen(Open);

                setContestsClosed(Closed);

            })
            .catch((err) => console.log(err));

    }, []);

    const editContest = (Contest) => {

        navigate('/management/Contests/form', { state: { Cont: Contest } });

    };

    const newContest = () => {

        navigate('/management/Contests/form');

    };

    return (

        <div className={Style.body}>

            <div className={Style.cardsWrapper}>

                <h1>Concursos Abertos</h1>
                <div className={Style.cards}>

                    {contestsOpen.map((contest) => {

                        return (

                            <div className={Style.card} key={contest.id}>

                                <h3>{contest.position}</h3>
                                <p>{contest.customer}</p>
                                <p>{contest.location}</p>
                                <p>Salário: R$ {contest.salary}</p>

                                <button onClick={(e) => { e.preventDefault(); editContest(contest) }}>Editar</button>


                            </div>

                        )

                    })}

                    <div className={Style.card}>

                        <h3>Novo Concurso</h3>

                        <button onClick={(e) => { e.preventDefault(); newContest() }}>Adicionar</button>

                    </div>

                </div>

            </div>
            <div className={Style.cardsWrapper}>

                <h1>Concursos Encerrados</h1>
                <div className={Style.cards}>

                    {contestsClosed.length !== 0 ? (

                        contestsClosed.map((contest) => {

                            return (

                                <div className={Style.card} key={contest.id}>

                                    <h3>{contest.position}</h3>
                                    <p>{contest.customer}</p>
                                    <p>{contest.location}</p>
                                    <p>Salário: R$ {contest.salary}</p>

                                    <button onClick={(e) => { e.preventDefault(); editContest(contest) }}>Editar</button>


                                </div>

                            )

                        })

                    ) : (

                        <div className={Style.card}>

                            <h3>Sem Concursos</h3>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default ContestManag;