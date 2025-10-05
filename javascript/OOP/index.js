const person ={
    name: "Prem",
    address:"Sydney",
    bio(){
        return `Hey this is ${name}, lives in ${address}`
    },
}
console.log(person.bio());
