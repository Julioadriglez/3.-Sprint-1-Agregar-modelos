class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()

    }
    getUsername(){
        return `nombre:${this.name}`
    }
    getBio(){
        return `bio: ${this.bio}`
    }
    getDateCreated(){
        return `dateCreated: ${this.dateCreated} `
    }
    getLastUpdated(){
        return `lastUpdated: ${this.lastUpdated}`
    }
}

module.exports = User