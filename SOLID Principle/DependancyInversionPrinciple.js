// DIP says that high level module should not depend on low-level modules. Both should depend on abstractions. Also, abstractions should not depend on details. Details should depend on abstractions. 
class Database{
    connect(){
        console.log('connected to database');
    }
}
class UserService{  //User Service directly depends upon database
    constructor(){
        this.database= new Database();
    }
    getUser(){
        this.database.connect();
        console.log("Fetching User...");
    }
}

//After DIP

class Database_DIP{
    connect(){
        console.log("connected to the database");
    }
}
class UserService_DIP{
    constructor(database){ //database injected through constructor
        this.database =database
    }
    getUser(){
        this.database.connect();
        console.log("Fetching User");
    }
}

export{Database_DIP, UserService_DIP};

