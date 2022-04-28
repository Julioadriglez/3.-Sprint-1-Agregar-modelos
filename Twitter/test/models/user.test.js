const User = require('../../app/models/users')

describe("Unit Tests for User class", () => {
    test('1) Create empty object', () => { 
        const user = new User()
        expect(user.id).toBeUndefined
        expect(user.username).toBeUndefined
        expect(user.name).toBeUndefined
        expect(user.bio).toBeUndefined
        expect(user.dateCreated).toBeUndefined
        expect(user.lastUpdated).toBeUndefined
    });
    test('2) Create an User object',() => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
    });

    test('3) Create an User object',() => {
        //Aqui vas´invocar el código que vas  a usar en tu app 
        const user = new User(1, "carlogilmar", "Carlo", "bio")
        //Aquí validas los resultados  de ese código
        //Esta es una comparación que va a igualar  el valor  de la izquierda con el valor de la derecha (Valor esperado) 
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("bio")
        expect(user.dataCreated).toBeUndefined() //Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('4) Add setters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})