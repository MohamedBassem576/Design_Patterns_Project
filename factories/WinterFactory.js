import Coat from "../products/outfits/Coat.js";
import Scarf from "../products/outfits/Scarf.js";

const outfitTypes = { COAT: "COAT", SCARF: "SCARF"}

class WinterFactory{

    createProduct(productType) {
        if (productType === outfitTypes.COAT)
            return new Coat();
        if (productType === outfitTypes.SCARF)
            return new Scarf();
    }

}
export default WinterFactory