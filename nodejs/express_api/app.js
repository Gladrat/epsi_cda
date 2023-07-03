const express = require("express");
const { getAllTodos } = require("./todo");

const app = express();
const port = 8080;

// getAllTodos()

app.get("/", async (req, res) => {
    const data = await getAllTodos();
    res.json(data);
});

// Strictement equivalent à 

// app.get("/", async (req, res) => res.json(await getAllTodos()));

app.get("/todo/:id", (req, res) => {
    // console.log(req);
    console.log(req.params);
    res.send(`Details of task id: ${req.params.id}`);
});

app.get("/date/:yyyy/:mm/:dd", (req, res) => {
    const { yyyy, mm, dd } = req.params;
    res.send(`List of tasks at date: ${yyyy}/${dd}/${mm}`);
});

app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
});
