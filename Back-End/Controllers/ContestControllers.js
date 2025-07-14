import express from 'express';
import service from "../Services/ContestService.js";

const route = express.Router();

route.get('/list', async (request, response) => {

    try {

        const constest = await service.listContest();

        return response.status(200).send({ message: constest });

    } catch (err) {

        return response.status(500).send({ message: `${err}` })

    };

});

route.post('/create', async (request, response) => {

    const { position, customer, salary, location, status } = request.body;

    try {

        await service.createContest(position, customer, salary, location, status);

        return response.status(200).send({ message: 'Concurso Cadastrado' });

    } catch (err) {

        return response.status(500).send({ message: `${err}` })

    };

});

route.put('/update/:id', async (request, response) => {

    const { id } = request.params;

    const { position, customer, salary, location, status } = request.body;


    try {

        await service.updateContest(position, customer, salary, location, status, id);

        return response.status(200).send({ message: 'Concurso Atualizado' });

    } catch (err) {

        return response.status(500).send({ message: `${err}` })

    };

});

route.delete('/delete/:id', async (request, response) => {

    const { id } = request.params;

    try {

        await service.deleteContest(id);

        return response.status(200).send({ message: 'Concurso Excluido' });

    } catch (err) {

        return response.status(500).send({ message: `${err}` })

    };

});

export default route;
