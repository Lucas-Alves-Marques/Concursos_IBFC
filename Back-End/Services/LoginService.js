import dataBase from '../Repository/Connection.js';

async function login(name, password) {

    const SQL = "select * from users where name = ? and password = ?";

    const body = [name, password];

    const conn = await dataBase();

    const [rows] = await conn.query(SQL, body);

    return rows;

};

export default { login };