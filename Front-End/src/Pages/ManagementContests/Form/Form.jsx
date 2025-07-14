import { useState } from 'react';
import Style from './Form.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTrash as Trash } from "react-icons/fa";
import { FaArrowLeft as Arrow } from "react-icons/fa";

function Form() {

    const location = useLocation();

    const contestEdit = location.state?.Cont;

    const navigate = useNavigate();

    const [contest, setContest] = useState({

        id: contestEdit?.id || null,
        position: contestEdit?.position || null,
        customer: contestEdit?.customer || null,
        salary: contestEdit?.salary || null,
        location: contestEdit?.location || null,
        status: contestEdit?.status || 'Open'

    });

    const [message, setMessage] = useState('');

    const handleContest = (e) => {

        setContest(prev => ({

            ...prev,

            [e.target.name]: e.target.value

        }));

    };

    const validForm = (e) => {

        e.preventDefault();

        const validField = Object.values(contest).some(value => String(value).trim() == '');

        if (validField) {

            return setMessage('Preencha Todos os Campos')

        };

        const cleanValue = Object.entries(contest).map(([key, value]) => {

            if (key === 'salary') {

                return [key, parseFloat(value)];

            } else if (key !== 'id') {

                return [key, value.trim()];

            }

            return [key, value];

        });

        const newObj = Object.fromEntries(cleanValue);

        saveForm(newObj);

    };

    const saveForm = (form) => {

        console.log(form);

        if (form.id) {

            fetch(`http://localhost:3333/Contest/update/${contest.id}`, {

                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)

            })
                .then(response => {

                    return response.json();

                })
                .then(data => {

                    setMessage('Concurso Salvo')

                })
                .catch((err) => { console.log(err); setMessage('Erro na Atualização') })

        }

        else {

            fetch(`http://localhost:3333/Contest/create`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)

            })
                .then(response => {

                    return response.json();

                })
                .then(data => {

                    setMessage('Concurso Salvo')

                })
                .catch((err) => { console.log(err); setMessage('Erro na Atualização') })

        }


    };

    const messages = (e) => {

        e.preventDefault();

        if (message == 'Concurso Salvo' || message == 'Concurso Excluido') {

            setMessage('')

            navigate('/management/Contests')

        }

        setMessage('');

    };

    const deleteContest = (e) => {

        e.preventDefault();

        fetch(`http://localhost:3333/Contest/delete/${contest.id}`, {

            method: 'DELETE',

        })
            .then(response => {

                return response.json();

            })
            .then(data => {

                setMessage('Concurso Excluido')

            })
            .catch((err) => { console.log(err); setMessage('Erro na Exclusão') })


    };

    return (

        <div className={Style.body}>

            <form onSubmit={validForm}>

                <div className={Style.header}>

                    <Arrow onClick={() => { navigate('/management/Contests') }} />
                    <h1>Edição de Concurso</h1>
                    <div>

                        {contest.id && <Trash onClick={() => { setMessage('Deseja exlcuir o concurso?') }} />}

                    </div>

                </div>
                <div className={Style.fields}>

                    <div className={Style.widthDefaultDiv}>

                        <h3>Cargo: </h3>
                        <input
                            className={Style.widthPosiInp}
                            name='position'
                            value={contest.position}
                            onChange={(e) => { handleContest(e) }}
                        />

                    </div>
                    <div className={Style.widthDefaultDiv}>

                        <h3>Cliente: </h3>
                        <input
                            name='customer'
                            value={contest.customer}
                            onChange={(e) => { handleContest(e) }}
                        />

                    </div>

                </div>
                <div className={Style.fields}>

                    <div className={Style.widthDefaultDiv}>

                        <h3>Salário: </h3>
                        <input
                            name='salary'
                            type='number'
                            value={contest.salary}
                            onChange={(e) => { handleContest(e) }}
                        />

                    </div>
                    <div className={Style.widthDefaultDiv}>

                        <h3>Localização: </h3>
                        <input
                            name='location'
                            value={contest.location}
                            onChange={(e) => { handleContest(e) }}
                        />

                    </div>

                </div>
                <div className={Style.fields}>

                    <div>

                        <h3>Status: </h3>
                        <select
                            name='status'
                            value={contest.status}
                            onChange={(e) => { handleContest(e) }}
                        >

                            <option value=''></option>
                            <option value='Open'>Em Aberto</option>
                            <option value='Closed'>Encerrado</option>

                        </select>


                    </div>

                </div>

                <button type='submit'>Salvar</button>

            </form>

            {message &&

                <div className={Style.message}>

                    <h4>{message}</h4>

                    {message == 'Deseja exlcuir o concurso?'

                        ? <div className={Style.btnsMessages}>

                            <button onClick={(e) => { deleteContest(e) }}>Sim</button>
                            <button onClick={(e) => { messages(e) }} >Não</button>

                        </div>

                        : <button onClick={(e) => { messages(e) }}>OK</button>


                    }



                </div>

            }

        </div>

    );

}

export default Form;