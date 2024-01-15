const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean| number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type):Type{
    return val
}

// identityThree("Ff")

function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>()

function getSearchProducts<T>(products: T[]):T{
    //db operations
    const myIndex =3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    //db oper
    const myIndex = 4
    return products[myIndex]
}

interface Db {
    connection: string,
    username: string,
    password: string
}

function Func<T, U extends Db>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

// Func(3, {connection:"qqw",username:"qwq",password:"asa"})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    cubjetc: string
}

class Sellable<T> {
    public cart: T[] = []

    addTocART(product: T){
        this.cart.push(product)
    }
} 