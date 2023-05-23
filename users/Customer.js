import User from "./user.js";
import axios from "axios"

class Customer extends User {

    cart = []

    constructor(name, email) {
        super(name, email);
    }

    addToCart(product) {
        this.cart.push(product);
    }

    removeFromCart(product) {
        let index = 0;

        for (i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === product) {
                index = i;
                break;
            }
        }

        this.cart.splice(index, 1);
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (i = 0; i < this.cart.length; i++)
            totalPrice = totalPrice + this.cart[i].price;
        return totalPrice;
    }

    async buy() {
        var total = this.calculateTotalPrice()
        try {
            await axios.patch("http://localhost:5001/api/products/buy",{"items":this.cart,"email":this.email,"total":total})
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async review(ssid,score){

        try{
        await axios.patch("http://localhost:5001/api/review", { "ssid":ssid,"score":score });
        }
        catch(e){
            console.log(e.message)
        }

    }
    async customersevice(complaint){
        try{
        await axios.post("http://localhost:5001/api/complaint", { "email":this.email, "complaint":complaint });
        }
        catch(e){
            console.log(e.message)
        }
    }

}

export default Customer;