const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "react_healthaura"
})

module.exports = db;