//LSP says that object of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. 
//Before LSP
class Bird{
    fly(){
        console.log("Flying");
    }
}
class Ostrich extends Bird{
    fly(){
        throw new Error("Ostriches cannot FLy");
}}


//After LSP
class Bird_LSP {
    move(){
        console.log("moving...");
    }
}

class sparrow_LSP extends Bird{
    move(){
        console.log("Flying...");
    }

}

class Ostrich_LSP extends Bird{
    move(){
        console.log("Running");
    }
}
export {Bird, Ostrich, Bird_LSP,sparrow_LSP,Ostrich_LSP}
