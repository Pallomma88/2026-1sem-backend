const userList = require("../data/users")

const findAll = () => {
    return userList
}
const  creat = (user) => {
    userList.push(user)

    return user
}

const findById = (id) => {
    return userList.find(user => user.id === id)
    
}


module.exports = {
    findAll,
    creat,
    findById
}