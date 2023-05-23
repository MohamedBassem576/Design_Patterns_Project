import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class Product {
    constructor(name, price,seller)
    {
        this.name = name;
        this.seller = seller
        this.price = price;
        this.ssid = ssid;
    }
    setPrice(price){
        this.price=price;
    }
    setName(name){
        this.name=name;
    }
    setImage(image){
        this.image=image
    }
    setSeller(seller){
        this.seller=seller
    }

}

export default Product;