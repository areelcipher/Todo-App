var mysql = require("mysql");

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'AreelDev',
    password: 'AyeAxeMen7',
    port: '3306',
});

conn.connect((err)=> {
    if (err) {
        console.log(err);
    }
});

module.exports = {
    conn: conn
}