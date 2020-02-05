const mysql = require("mysql");

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'AreelDev',
    password: 'AyeAxeMen7',
    port: '3306',
    database: "main_schema"
});

conn.connect((err)=> {
    if (err) throw(err);
});

module.exports = {
    conn
};