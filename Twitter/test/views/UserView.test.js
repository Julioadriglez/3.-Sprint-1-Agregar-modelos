const UserView = require('../../app/views/UserView')
describe("Hacer prueba a UserView", () => {
    test("Devuelve un objeto de error cuando intenta crear un nuevo usuario con un payload con propiedades no válidas",() =>{
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });
})