import Grocery from "../products/groceries/Grocery.js";
import Bread from "../products/groceries/Egg.js";
import Cheese from "../products/groceries/Cheese.js";
import Egg from "../products/groceries/Egg.js";
import Milk from "../products/groceries/Milk.js";
import Meat from "../products/groceries/Meat.js";
const groceryTypes = {BREAD : "BREAD", CHEESE : "CHEESE", EGG : "EGG", MILK : "MILK", MEAT : "MEAT"}

class GroceriesFactory {
    

    createProduct(productType)
    {
        if(productType === groceryTypes.BREAD)
            return new Bread(); 
        if(productType === groceryTypes.CHEESE)
            return new Cheese();
        if(productType === groceryTypes.EGG)
            return new Egg();
        if(productType === groceryTypes.MILK)
            return new Milk();
        if(productType === groceryTypes.MEAT)
            return new Meat();
    }
}

export default GroceriesFactory;