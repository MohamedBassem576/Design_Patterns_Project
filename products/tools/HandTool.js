import Product from "../Product.js";

class HandTool extends Product {
    constructor(name, price)
    {
        super(name,price)
        this.type = "HAND_TOOLS";
    }    
}

export default HandTool;