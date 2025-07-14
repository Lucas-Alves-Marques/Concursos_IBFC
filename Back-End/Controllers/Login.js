import express from "express";
import service from "../Services/LoginService.js";

const route = express.Router();

route.post("/", async (request, response) => {

  const { name, password } = request.body;

  const user = await service.login(name, password);

  if (user.length == 0) {

    return response.status(401).send({ message: 'Usuário ou senha inválidos.' });

  };

  return response.status(200).send(user[0]);

});

export default route;