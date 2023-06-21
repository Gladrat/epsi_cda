class ArrayStorage {
    constructor(key_name) {
        this.key_name = key_name
        this.list = this.get()
    }

    get() {
        if (! localStorage.getItem(this.key_name)) {
            localStorage.setItem(this.key_name, "[]")
        }
        return JSON.parse(localStorage.getItem(this.key_name))
    }

    set(task) {
        this.list.push(task)
        localStorage.setItem(this.key_name, JSON.stringify(this.list))
    }

    clear() {
        localStorage.removeItem(this.key_name)
    }

    remove(task) {
        const index = this.list.indexOf(task)
        this.list.splice(index, 1)
        localStorage.setItem(this.key_name, JSON.stringify(this.list))
    }
}

// const ma_liste = new ArrayStorage("ma_liste")