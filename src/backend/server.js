const express = require('express');
const cors = require('cors')
const { conn } = require("./connection.js");

const server = express();
server.use(express.json());
server.use(cors());

const port = 5553;

server.get("/todos", (request, response) => {
    conn.query("SELECT * FROM todos", (err, result) => {
        if (err) throw err;
        response.header("Access-Control-Allow-Origin", "*"); 
        response.header("Content-Type", "application/json");
        response.send(JSON.stringify(result));
    })
})

server.delete("/delete", (request, response) => {
    const { body } = request;
    // console.log(body);
    const sql = `DELETE FROM todos WHERE id = ${body.id}`;
    conn.query(sql, function (err, result) {
        if (err) throw err;
            response.header("Access-Control-Allow-origin", "*");
            // response.header("Content-Type", "application/json");
            response.send(JSON.stringify(result));
    });
})

server.patch("/input", (request, response) => {
    const sql = "INSERT INTO todos (id, task, created, isDone) VALUES ?";
    const { body } = request;
    //console.log(body);

    const values = [
        [body.id, body.title, new Date(`${body.month} ${body.day}, ${body.year}`), body.completed],
    ];
    conn.query(sql, [values], function (err, result) {
        if (err) {
            console.log(err);
            response.write(JSON.stringify({ success: false }));
            response.end();
        }
        console.log("Number of records inserted: " + result.affectedRows);
        if (result.affectedRows === 0) {
            response.write(JSON.stringify({ success: false }));
            response.end();
        } else {
            response.write(JSON.stringify({ success: true }));
            response.end();
        }
    });
})

server.patch("/update", (request, response) => {
    const { body } = request;
    //console.log(body);
    const sql = `UPDATE todos SET isDone = ${body.isDone} WHERE id = ${body.id}`;
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            response.write(JSON.stringify({ success: false }));
            response.end();
        }
        console.log("Number of records inserted: " + result.affectedRows);
        if (result.affectedRows === 0) {
            response.write(JSON.stringify({ success: false }));
            response.end();
        } else {
            response.write(JSON.stringify({ success: true }));
            response.end();
        }
    });
})

server.get("/completed", (request, response) => {
    conn.query("SELECT * FROM todos WHERE isDone = 1", (err, result) => {
        if (err) throw err;
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Content-Type", "application/json");
        response.send(JSON.stringify(result));
    })
})


server.listen(port, () => console.log(`Todo server running on port ${port}!`))
