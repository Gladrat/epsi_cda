const { readFile, writeFile } = require("node:fs/promises");
const { v4: uuidv4 } = require("uuid");

const getAllTodos = async () => {
    const data = await readFile("./datas/todo.json", "utf-8");
    // Recupérer toutes les todos depuis une BDD (MySql)
    return JSON.parse(data);
};

const findTodoById = async (id) => {
    const data = await getAllTodos();
    return data.find((el) => el.id === id);
};

const countTodos = async () => {
    const data = await getAllTodos();
    return data.length;
};

const createTodo = async ({ name, due_date }) => {
    const id = uuidv4();
    const closed = false;
    const todo = { id, name, due_date, closed };
    let todos = await getAllTodos();
    todos = [...todos, todo];
    console.log(todos);
    await writeFile("./datas/todo.json", JSON.stringify(todos));
    return todo;
};

module.exports = {
    getAllTodos: getAllTodos,
    findTodoById: findTodoById,
    countTodos: countTodos,
    createTodo: createTodo,
};
