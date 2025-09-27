import { paymentProcessor,paymentProcessor_OCP,PaypalPayment,CreditCardPayment } from "./Open_Closed_Principle.js";
import { Bird,Ostrich,Bird_LSP,Ostrich_LSP,sparrow_LSP } from "./LiskovSubstitution.js";
import { Human_ISP, Robot_ISP } from "./InterfaceSegregation.js";
import { Database_DIP, UserService_DIP } from "./DependancyInversionPrinciple.js";
let processor = new paymentProcessor_OCP();
processor.process(new CreditCardPayment());

const ostrich = new Ostrich();
const birds =[new sparrow_LSP(),new Ostrich_LSP()];
birds.forEach(bird=>bird.move());

const human = new Human_ISP();
const robot = new Robot_ISP();
console.log("----------------Interface Segregation-------------------");
human.work();
human.eat();

const myDatase = new Database_DIP;
const userService= new UserService_DIP(myDatase);
userService.getUser();