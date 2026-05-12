const express = require("express")

const userContrller = require("./controllers/userControllers")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

app.get("/", callbackDaRaiz)

app.get("/users", userContrller.getAllUsers)

app.post("/users", userContrller.createUser )

module.exports = app