// Software Entities should be open for extension but closed for modification. 
//Before OCP(Open/Closed Principle)
class paymentProcessor{
    process(paymentMethod){
        if(paymentMethod==="CreditCard"){
            //Process credit card
        }
        else if(paymentMethod==="PayPal"){
            //Process Paypal
        }
    }
}

//After OCP
class paymentMethod{
    process(){
        throw new Error ("Method 'process' should be implemented.");
        
    }
}

class CreditCardPayment extends paymentMethod{
    process(){
        console.log("process Credit Card")
    }
}
class PaypalPayment extends paymentMethod{
    process(){
console.log("Process Paypal")
    }
}

class paymentProcessor_OCP{
    process(paymentMethod){
        paymentMethod.process();
    }
}


let process = new paymentProcessor_OCP;
process.CreditCardPayment;

export {paymentProcessor,paymentProcessor_OCP,PaypalPayment,CreditCardPayment}