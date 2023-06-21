const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = "";
const load = "";

let tasks = ["Coder en Python", "Coder en C#", "Ne pas coder en JavaScript"];

// let prexifedTasks = tasks.map(task => `Tâche: ${task}`)
tasks = tasks.map(task => {
    return task.replace("Coder", "Développer")
})

// tasks = tasks.filter(task => {
//     return task.length > 17
// })

console.log(tasks);

// Fonctions

function taskToDom(task) {
    console.log(task)
    if (typeof task === "string" && task) {
        const li = document.createElement("li")
        const remove = document.createElement("button")

        li.textContent = task
        remove.textContent = "REMOVE"

        remove.addEventListener("click", event => {
            remove.parentNode.remove()
            // li.remove()
            // list.removeChild(remove.parentNode)
        })

        li.append(remove)
        list.append(li)
    }
}

function newTask(task) {
    if (task != "") {
        taskToDom(input.value)
        input.focus()
        input.value = ""
    }
}

// Chargement de la page
tasks.forEach(e => taskToDom(e))

// Gestion événements globaux
input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        newTask()
    }
})
add.addEventListener("click", event => newTask)
clear.addEventListener("click", event => list.innerHTML = "")

