var http = require('http')
var {conn} = require("./connection.js");

http.createServer((req, res) => {

    console.log(conn.state);

}).listen(5553)