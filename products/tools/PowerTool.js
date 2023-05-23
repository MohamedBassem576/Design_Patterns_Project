import Product from "../Product.js"

class PowerTool extends Product
{
    constructor(name, price)
    {
        super(name,price)
        this.type = "POWER_TOOLS";
    }
}

export default PowerTool;