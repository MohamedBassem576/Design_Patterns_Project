import Grocery from './Grocery.js';
class Meat extends Grocery{
    constructor()
    {
        super("Meat",200)
        this.image="https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg"
    }
}

export default Meat;