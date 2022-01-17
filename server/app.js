const express = require("express");
const db = require("./db/db");
const cors = require("cors")
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

// Connecting to db
db.getConnection((err,connection) => {
    if(err){
        throw err;
    }
    else{
        console.log("Connection to db is successful");
    }
})

const authRouters = require("./router/auth/auth.router");

app.use("/auth", authRouters)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})