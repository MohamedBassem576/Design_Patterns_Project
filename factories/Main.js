import FactoryOrchestrator from "./FactoryOrchestrator.js";


const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("MEAT");
console.log(egg);