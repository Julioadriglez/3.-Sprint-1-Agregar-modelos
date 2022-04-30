const UserView = require('../../app/views/UserView')
describe("Hacer prueba a UserView", () => {
    test("1.Devuelve un objeto de error cuando intenta crear un nuevo usuario con un payload con propiedades no válidas",() => {
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    });
    test("2. Devuelve un objeto de error cuando intenta crear un nuevo usuario con payload con propiedades faltantes", () => {
        const payload = {username: null, name:12, id:"id"}
        const result  = UserView.createUser(payload)
        expect(result.error).toMatch(/nesecitan tener un valor válido/)
    });
    test("3. crear un usuario por un payload válida dada", () => {
        const payload = {username:"Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

})