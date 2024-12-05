const myysql = require('mysql');

const HostName = "localhost";
const HostAdmin ="root";
const HostPassword ="";
const HostDatabase ="";

const MysqlConnectionData = myysql.createConnection({
    host: HostName,
    user: HostAdmin,
    password: HostPassword,
    database: HostDatabase
})

MysqlConnectionData.connect((err) => {
    if(err) throw err;
    console.log("Connected to the MySQL Server");
})

module.exports = MysqlConnectionData;