import Customer from "./Customer.js";
import ProductSeller from "./ProductSeller.js";
import CustomerService from "./CustomerService.js";
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";

/*
//SELLER TESTS
var seller = new ProductSeller("Moody","Bassem@gmail");
var product = await seller.addProduct({category:"GROCERIES",type:"EGG",name:"sbace test3",})
console.log(product);
seller.checkProductPerformance();
seller.updateProduct({ssid:product.ssid,name:"sabce test2"});
*/

/*
//CUSTOMER TESTS
const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("EGG");
const meat = groceriesFactory.createProduct("MEAT");
var customer = new Customer("omar","omar@gmail");
//customer.addToCart(egg)
//customer.addToCart(meat)
await customer.customersevice("Delivries are late")
*/



 //CUSTOMER SERVICE TESTS
/*
 var service = new CustomerService("Youssef","Sbace@gmail.com")
 var complaints = await service.reviewComplain()
 console.log(complaints)
 service.reviewComplain({email:"omar@gmail",response:"we are working on it"})
*/
/*
var seller = new ProductSeller("Moody","omar@gmail");
 var res = await seller.checkProductPerformance()
console.log(res)*/