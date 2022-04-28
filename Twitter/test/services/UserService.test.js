const UserServices = require('../../app/services/UserServices')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
    const user = UserServices.create(1,"carlogilmar", "Carlo") 
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all user data in a list", () => {
        const user = UserServices.create(1, "carlogilmar", "Carlo")
        const userInfoInList = UserServices.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("Carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
})
