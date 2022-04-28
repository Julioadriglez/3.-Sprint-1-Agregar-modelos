const User = require('../models/users')

class UserServices {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")

    }
    static getInfo(user){
        return  Object.values(user)
    }
}

const user = UserServices.create(1, "carlogilamar", "Carlo")
const userInfoInList = UserServices.getInfo(user)
console.log(userInfoInList)


module.exports = UserServices