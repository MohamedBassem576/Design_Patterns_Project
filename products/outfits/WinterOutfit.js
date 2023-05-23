import Product from "../Product.js";

class WinterOutfit extends Product {

    constructor(name, price)
    {
        super(name,price)
        this.type = "WINTER_OUTFIT";
    }  
}

export default WinterOutfit;