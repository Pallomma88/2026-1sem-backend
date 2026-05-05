const express = require("express")

const userContrller = require("./controllers/userControllers")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

app.get("/", callbackDaRaiz)

app.get("/users", userContrller.getAllUsers)

module.exports = app