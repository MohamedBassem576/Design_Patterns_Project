import GroceriesFactory from "./GroceriesFactory.js";
import HandToolFactory from "./HandToolFactory.js";
import PowerToolFactory from "./PowerToolFactory.js";
import WinterFactory from "./WinterFactory.js";
import SummerFactory from "./SummerFactory.js";


const factoryTypes = { SUMMER_OUTFIT: "SUMMER_OUTFIT", WINTER_OUTFIT: "WINTER_OUTFIT", GROCERIES: "GROCERIES", HAND_TOOLS: "HAND_TOOLS", POWER_TOOLS: "POWER_TOOLS" };
class FactoryOrchestrator {


    createFactory(type) {
        {

            if (type === factoryTypes.SUMMER_OUTFIT)
                return new SummerFactory();

            if (type === factoryTypes.WINTER_OUTFIT)
                return new WinterFactory();

            if (type === factoryTypes.GROCERIES)
                return new GroceriesFactory();
                
            if (type === factoryTypes.POWER_TOOLS)
                return new PowerToolFactory();

            if (type === factoryTypes.HAND_TOOLS)
                return new HandToolFactory();
        }
    }
}

export default FactoryOrchestrator;