import dataBase from '../Repository/Connection.js';

async function listInscription() {

    const SQL = 'select * from inscription';

    const conn = await dataBase();

    const [rows] = await conn.query(SQL);

    conn.end();

    return rows;

};

async function listInscriptionUser(id) {

    const SQL = 'select * from inscription where id_user = ?';

    const conn = await dataBase();

    const [rows] = await conn.query(SQL, id);

    conn.end();

    return rows;

};

async function createInscription(id_user, id_contest) {

    const SQL = 'insert into inscription(id_user, id_contest) values(?,?)';

    const body = [id_user, id_contest];

    const conn = await dataBase();

    await conn.query(SQL, body);

    conn.end();

};

async function deleteInscription(id) {

    const SQL = 'delete from inscription where id = ?';

    const conn = await dataBase();

    await conn.query(SQL, id);

    conn.end();

};

async function deleteInscriptionByUser(id_user) {

    const SQL = 'delete from inscription where id_user = ?';

    const conn = await dataBase();

    await conn.query(SQL, id_user);

    conn.end();

};

export default { listInscription, listInscriptionUser, createInscription, deleteInscription, deleteInscriptionByUser };