
//Definition:- A class or module should have one and only one reason to change. Means class should have only one job or responsibilty
class UserService_BeforeSRP {
createUser(user){
    //create user in the database
}
sendEmail(user){

}
logError(error){
    //log errors
}
}

//AfterSRP 

class UserService{
    createUser(user){
        //create user in the database
    }
}
class EmailService{
    sendEmail(user){
        //send welcome email to the user
    }
}
class Logger{
    logError(){
        //Log errors
    }
}

//Now each class has single responsibility. 

