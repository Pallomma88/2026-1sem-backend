const userList = require("../data/users")

const findAll = () => {
    return userList
}
const  creat = (user) => {
    userList.push(user)

    return user
}




module.exports = {
    findAll,
    creat
}