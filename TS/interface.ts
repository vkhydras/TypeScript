interface User {
    readonly dbId: number,
    email: string,
    userID: number
    // startTrail: ()=>string
    startTrail():string
    getCoupon(couponNmae: string, value: number): number
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vic: User ={dbId:23, email:"sdsdsd", userID:3434, startTrail: ()=> {
    return "Trial started"
}, 
getCoupon: (name: "djjqiw", osos: 2)=>{
    return 10
} }

