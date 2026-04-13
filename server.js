const express = require("express")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("Olá mundo!")
}

app.get("/", callbackDaRaiz)

app.listen(3000, () => {
    
})