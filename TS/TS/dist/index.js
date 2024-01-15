"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string = ""
//     constructor(email: string, name: string){
//         this.email =email,
//         this.name = name
//     }
// }
// const vic = new User( "adad@kdks.com", "Vic")
// // vic.city
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const vic = new User("adad@kdks.com", "Vic");
// vic.city
