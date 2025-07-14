import dataBase from '../Repository/Connection.js';

async function listContest() {

    const SQL = 'select * from contest';

    const conn = await dataBase();

    const [rows] = await conn.query(SQL);

    conn.end();

    return rows;

};

async function listContestUser(id) {

    const SQL = 'select * from contest where id = ?';

    const conn = await dataBase();

    const [rows] = await conn.query(SQL, id);

    conn.end();

    return rows;

}

async function createContest(position, customer, salary, location, status) {

    const SQL = 'insert into contest(position, customer, salary, location, status) values(?,?,?,?,?)';

    const body = [position, customer, salary, location, status];

    const conn = await dataBase();

    await conn.query(SQL, body);

    conn.end();

};

async function updateContest(position, customer, salary, location, status, id) {

    const SQL = 'update contest set position = ? , customer = ?, salary = ?, location = ?, status = ? where id = ?';

    const body = [position, customer, salary, location, status, id];

    const conn = await dataBase();

    await conn.query(SQL, body);

    conn.end();

};

async function deleteContest(id) {

    const SQL = 'delete from contest where id = ?';

    const conn = await dataBase();

    await conn.query(SQL, id);

    conn.end();

};

export default { listContest, listContestUser, createContest, updateContest, deleteContest };