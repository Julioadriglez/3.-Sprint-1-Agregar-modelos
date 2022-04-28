const UserServices = require('../../app/services/UserServices')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
    const user = UserServices.create(1,"carlogilmar", "Carlo") 
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    })
})