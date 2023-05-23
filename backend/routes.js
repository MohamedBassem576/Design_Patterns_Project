import express from 'express'
import Product from "./model/products.js";
import Complaint from "./model/complaints.js"
import User from './model/users.js';

const router = express.Router()
//landing page gets all products
router.get("/products", async (req, res) => {
    try {
        const records = await Product.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//get product by ssid
router.get("/products/:ssid", async (req, res) => {
    try {
        var  ssid  = req.params.ssid
        const records = await Product.find({ ssid: ssid });
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//get product of a seller
router.get("/products/seller/:email", async (req, res) => {
    try {
        var  email  = req.params.email
        const records = await Product.find({ seller: email });
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//method used for product seller to create new product
router.post("/products", async (req, res) => {
    try {
        var product = req.body
        await Product.insertMany(product)
        res.json(product)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//update products by seller
router.patch("/products", async (req, res) => {
    try {

        var { ssid, price, name, image } = req.body
        var product = await Product.findOneAndUpdate({ ssid: ssid }, { $set: req.body, }, { new: true });
        res.json(product);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//when customer buys the qunatity sold is updated and purchase is added to his history
router.post("/products/buy", async (req, res) => {
    try {

        var { items,email,total } = req.body
        for(var i=0;i<items.length;i++ ){
            console.log(items[i])
        var product =await Product.findByIdAndUpdate(items[i]._id, { $inc: { quantitysold: items[i].quantity } }, { new: true });
        console.log(product)
    }
    var user = await User.findOneAndUpdate({ email: email }, { $push: { history: { items ,total} } }, { new: true });
    res.json(user);

    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//removing a product by seller
router.delete("/products/:ssid", async (req, res) => {
    try {
        var  ssid  = req.params
        console.log(ssid)
        var product = await Product.findOneAndDelete({ ssid: ssid });
        res.json(product);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }

});
//landing page for customer-service gets all complaints 
router.get("/complaint", async (req, res) => {
    try {
        const records = await Complaint.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//complaint sending for customers
router.post("/complaint", async (req, res) => {
    try {
        var complaint = req.body
        await Complaint.insertMany(complaint)
        res.json(complaint)
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//reviewing products by users
router.patch("/review", async (req, res) => {
    try {

        var { ssid, score } = req.body

        var review = await Product.findOneAndUpdate({ ssid: ssid }, { score: score} , { new: true });
        res.json(review);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//reply to complaint by customer service
router.patch("/complaint", async (req, res) => {
    try {
        var { response,email } = req.body
        var complaint = await Complaint.findOneAndUpdate({ email: email }, { response: response }, { new: true })
        res.json(complaint)
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }

});
//fetching purchase history of a customer
router.get("/customer/:email", async (req, res) => {
    try {

        var  email = req.params.email
        var user = await User.findOne({ email: email });
        res.json(user.history);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }});

   //initializing a new user in database 
    router.post("/user",async (req, res) => {
        try {
    
            var { email, name,type} = req.body
            var user = new User({name:name,email:email,type:type });
            user.save()
            res.json(user);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }});

export default router;