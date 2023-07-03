const { readFile } = require("node:fs/promises")

const getAllTodos = async () => {
    const data = await readFile("./datas/todo.json", 'utf-8')
    return JSON.parse(data)
}

const findTodoById = async (id) => {
    return
}

module.exports = { getAllTodos: getAllTodos }