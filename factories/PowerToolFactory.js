import Drill from "../products/tools/Drill.js";
import Saw from "../products/tools/Saw.js";

const toolTypes = { DRILL: "DRILL", SAW: "SAW" };

class PowerToolFactory {


    createProduct(productType) {
        if (productType === toolTypes.DRILL)
            return new Drill();
        if (productType === toolTypes.SAW)
            return new Saw();
    }
}

export default PowerToolFactory