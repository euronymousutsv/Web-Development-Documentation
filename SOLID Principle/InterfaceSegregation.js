//Says that clients should not be forced to depend on interfaces they don't use. We'll split an interface into smaller, more focused one 
class Worker{
    work(){
        console.log("Working..");
    }
    eat(){
        console.log("eating...");
    }
}
class Robot extends Worker{
    eat(){
        throw new Error("Robots do not eat");
    }}

//After ISP
class Workable_ISP{
    work(){
        console.log("working .....");
    }
}
class Eatable_ISP{
    eat(){
        console.log("Eating....");
    }
}
class Human_ISP extends Workable_ISP{
eat(){
    console.log("eating");
}
}

class Robot_ISP extends Workable_ISP{

}

export{Workable_ISP,Human_ISP,Robot_ISP,Eatable_ISP};