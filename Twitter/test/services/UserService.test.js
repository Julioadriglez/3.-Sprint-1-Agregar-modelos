const UserService = require('../../app/services/UserServices')

describe("Test for UserService", () => {

    test("1. Crear un nuevo usuario usando el UserService", () => {
    const user = UserService.create(1,"carlogilmar", "Carlo") 
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    });
    test("2. Obtener todos los datos de usuario en una lista", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("Carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
    });
    test("3. Actualizar  username",() => {
        const user = UserService.create(1,"carlogilmar", "Carlo")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")
    });
    test("4. Dada una lista de usuarios, dame la lista de username ", () => {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    });

})
