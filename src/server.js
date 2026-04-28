const express = require("express")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

function callbackDaRaiz(request, response) {
    const listaUsuarios = [
        {
            id: 1,
            name:"Pallomma"
        }
    ]
        
     response.json(listaUsuarios)
    }


app.get("/", callbackDaRaiz)

app.get("/users", callbackDaRaiz)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})