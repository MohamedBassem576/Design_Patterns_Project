import Hammer from "../products/tools/Hammer.js";
import ScrewDriver from "../products/tools/ScrewDriver.js";

const toolTypes = { HAMMER: "HAMMER", SCREW_DRIVER: "SCREW_DRIVER" }

class HandToolFactory {
    createProduct(productType) {
        if (productType === toolTypes.HAMMER)
            return new Hammer();
        if (productType === toolTypes.SCREW_DRIVER)
            return new ScrewDriver();
    }
}
export default HandToolFactory