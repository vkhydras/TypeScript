function addTwo(num:number): number{
    return num+2
}

function getUpper(val:string): string{
    return val.toUpperCase()
}

function singUp(name:string, email:string, password:number){

}

let loginUser = (name:string, email:string, isPaid:boolean = false)=>{}

const heros: string[] = ["thor", "spiderman", "ironman"]

heros.map(hero => {
    return `hero is ${hero}`
})

addTwo(5)
getUpper("s")

singUp("we","sd",3)
loginUser("h","shs")

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export{}