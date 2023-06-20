const list = document.querySelector("#list");
const input = "";
const add = "";
const clear = "";
const url = "";
const load = "";

let tasks = ["Coder en Python", "Coder en C#", "Ne pas coder en JavaScript"];

function taskToDom(task) {
    console.log(task)
    if (typeof task === "string" && task) {
        const li = document.createElement("li")
        const remove = document.createElement("button")

        li.textContent = task
        remove.textContent = "REMOVE"

        li.append(remove)
        list.append(li)
    }
}

taskToDom("Un truc écrit à la main")

tasks.forEach(e => {
    taskToDom(e)
})

