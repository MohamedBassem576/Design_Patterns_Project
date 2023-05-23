import Product from "../Product.js"

class Grocery extends Product
{

    constructor(name, price)
    {
        super(name,price)
        this.type = "GROCERIES";
    }
    
}

export default Grocery;