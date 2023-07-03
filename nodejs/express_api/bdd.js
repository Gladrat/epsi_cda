const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/db.sqlite",
});

async function InitializeDb() {
    db = await sequelize.sync();
    console.log("DB connected !");
    return db;
}

const task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    closed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    due_date: {
        type: DataTypes.STRING,
        defaultValue: "01/01/1970",
        allowNull: true
    },
}, {
    tableName: "tasks"
})

module.exports = {
    InitializeDb: InitializeDb
}