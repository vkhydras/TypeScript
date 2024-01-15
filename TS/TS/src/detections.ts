function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Pls provide id")
        return
    }
    id.toLowerCase()
}

// function printAll(str: string | string[] | null) {

// }

interface User {
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    } else {
        pet
        return "bird Food"
    }
}


interface Circle{
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind:"rectangle"
    length: number
    width: number
}

type Shape = Circle | Square 

function getShape(shape: Shape){
    if(shape.kind ==="circle"){
        return Math.PI * shape.radius**2
    }
    return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius**2
            
        case "square":
            return shape.side * shape.side

        default:
            const _default: never = shape
            return _default
            
    }
}