let score: number | string = 33

type User = {
    name: string,
    id: number
}

type Admin ={
    userName: string,
    id: number
}

let vic: User | Admin = {name:"Victor", id: 212}

function getDbId(id: number | string){
    console.log(`Db id is:  ${id}`)
}
