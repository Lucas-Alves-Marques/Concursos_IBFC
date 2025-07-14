import express from 'express';
import service from "../Services/InscriptionService.js";
import serviceCont from '../Services/ContestService.js';

const route = express.Router();

route.get('/list/:id', async (request, response) => {

    const { id } = request.params;

    try {

        const data = await service.listInscriptionUser(id);

        const inscriptions = [];

        for (const insc of data) {

            const [result] = await serviceCont.listContestUser(insc.id_contest);

            result.id_insc = insc.id;

            inscriptions.push(result);

        };

        return response.status(200).send({ message: inscriptions });

    } catch (err) {

        return response.status(500).send({ err });

    };

});

route.post('/create/:id_user', async (request, response) => {

    const { id_user } = request.params;

    const { id_contest } = request.body;

    try {

        const data = await service.listInscriptionUser(id_user);

        for (const insc of data) {

            if (insc.id_user == id_user && insc.id_contest == id_contest) {

                return response.status(403).send({ message: `Inscrição já realizada` })

            }

        };

        await service.createInscription(id_user, id_contest);

        return response.status(200).send({ message: 'Inscrição Realizada' });

    } catch (err) {

        console.log(err)

        return response.status(500).send({ message: `${err}` })

    };

});

route.delete('/delete/:id', async (request, response) => {

    const { id } = request.params;

    try {

        await service.deleteInscription(id);

        return response.status(200).send({ message: 'Inscrição Excluida' });

    } catch (err) {

        return response.status(500).send({ message: `${err}` })

    };

});

export default route;
