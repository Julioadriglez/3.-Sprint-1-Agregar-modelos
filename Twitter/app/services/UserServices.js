const User = require('../models/users')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")

    }
    static getInfo(user){
        return  Object.values(user)
    }
    static updateUserUsername(user, username){
        user.setUsername = username
    }
    static getAllUsernames(user){
       const usersUsernames = user.map(user => user.username)
       return usersUsernames
    }
}


module.exports = UserService