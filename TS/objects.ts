// const User ={
//     name: "bsdhbds",
//     email:"dgcdscuhsduichsduc",
//     isActive:true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name:"hdisd", isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "ReactJs", price: 923}
// }

type User = {
    readonly _id: string 
    name: string,
    email: string,
    isActive: boolean
    creditCardDetails?:string
}

type cardNUmber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}
type cardDetails = cardNUmber & cardDate & {cvv: number}

let myUser: User ={
    _id: "1234",
    name:"s",
    email:"dasd.com",
    isActive:false
}

myUser.email = "siid@gmail.com"

// createUser({name:"", email: "", isActive: true})

