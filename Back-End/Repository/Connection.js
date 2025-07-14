import mySQL from "mysql2/promise";

async function connectDB() {

    const dataBase = await mySQL.createConnection({

        user: "root",
        password: "",
        host: "localhost",
        port: 3306,
        database: "IBFC"

    });

    return dataBase;

};

export default connectDB;