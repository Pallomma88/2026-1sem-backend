const userModel = require("../models/userModel")

function getAllUsers(request, response) {
    const users = userModel.findAll()
        
    return response.json(users)
    }

    function createUser ( req, res )  {
    // const name = req.body.name

    const { name } = req.body

    const newUser = {
        id: Date.now(),
        name: name
    }
    

   const createdUser =  userModel.creat(newUser)

    return res.status(201).json(createdUser)
}

const getUserById = (rep, res) => {


    const id = Number (rep.params.id)

    const user = userModel.findById(id)

    if ( !user) {
        return res.status (404).json({
            message: "Usuario não encontrado"
        })
    }

    return res.json(user)
}

    module.exports = {
        createUser,
        getAllUsers,
        getUserById
}