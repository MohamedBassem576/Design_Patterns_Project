import Grocery from './Grocery.js';

class Bread extends Grocery {

    constructor() {
        super("Bread", 10)
        this.image ="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/8-3-large.jpg?itok=fRNQugY8"
    }
}

export default Bread;