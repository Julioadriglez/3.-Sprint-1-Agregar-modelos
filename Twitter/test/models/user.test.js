const User = require('../../app/models/users')

describe("Unit Tests for User class", () => {
    test('Create an User object',() => {
        //Aqui vas´invocar el código que vas  a usar en tu app 
        const user = new User(1, "carlogilmar", "Carlo", "bio", "dataCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})