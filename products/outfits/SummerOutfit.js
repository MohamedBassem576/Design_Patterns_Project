import Product from "../Product.js";

class SummerOutfit extends Product
{
    constructor(name, price)
    {
        super(name,price)
        this.type = "SUMMER_OUTFIT";
    }
   

}

export default SummerOutfit;