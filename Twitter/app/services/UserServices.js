const User = require('../models/users')

class UserServices {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")

    }
}

module.exports = UserServices