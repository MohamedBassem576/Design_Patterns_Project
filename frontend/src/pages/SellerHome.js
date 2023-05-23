import react, { useState } from "react";
import NavbarSeller from "../NavbarSeller";


function SellerHome(){
    const [showSummer, setShowSummer] = useState(false);
    const [showWinter, setShowWinter] = useState(false);
    const [showGroc, setShowGroc] = useState(false);
    const [showH, setShowH] = useState(false);
    const [showP, setShowP] = useState(false);
    
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productType, setProductType] = useState("");

    function handleName(e){
        var input = e.target.value;
        setProductName(input);
    }
    function handlePrice(e){
        var input = e.target.value;
        setProductPrice(input);
    }
    function handleCategory(e){
        var input = e.target.value;
        setProductCategory(input);
    }
    function handleType(e){
        var input = e.target.value;
        setProductType(input);
    }
    function createProduct(e){
        console.log(e.target);
    }

    console.log(productCategory)
    console.log(productType)
    return(
        <>
        <NavbarSeller />
        <div>
            <div className="myForm">
                <label>Product Name</label>
                <input onChange={handleName} name="name" placeholder="product name" />
                <label>Price</label>
                <input onChange={handlePrice} name="price" placeholder="product Prcie" />
                <label>Product Category</label>
                <select onChange={handleCategory} name="category">
                    <option value="SUMMER_OUTFIT">Summer Outfit</option>
                    <option value="WINTER_OUTFIT">Winter Outfit</option>
                    <option value="GORCERY">Groceries</option>
                    <option value="HAND_TOOLS">Hand Tools</option>
                    <option value="POWER_TOOLS">Power Tools</option>
                </select>
                {productCategory === "SUMMER_OUTFIT"?
                <div>
                <label>Product Type</label>
                <select onChange={handleType} name="category">
                    <option value="TSHIRT">T shirt</option>
                    <option value="SHORT">Short</option>
                </select>
                </div>
                :
                <></>
                }
                {productCategory === "WINTER_OUTFIT"?
                <div>
                <label>Product Type</label>
                <select onChange={handleType} name="category">
                    <option value="COAT">Coat</option>
                    <option value="SCARF">Scarf</option>
                </select>
                </div>
                :
                <></>
                }
                {productCategory === "GORCERY"?
                <div>
                <label>Product Type</label>
                <select onChange={handleType} name="category">
                    <option value="BREAD">Bread</option>
                    <option value="CHEESE">Cheese</option>
                    <option value="EGG">Egg</option>
                    <option value="MILK">Milk</option>
                    <option value="MEAT">Meat</option>
                </select>
                </div>
                :
                <></>
                }
                {productCategory === "HAND_TOOLS"?
                <div>
                <label>Product Type</label>
                <select onChange={handleType} name="category">
                    <option value="HAMMER">Hammer</option>
                    <option value="SCREW_DRIVER">Screw Driver</option>
                </select>
                </div>
                :
                <></>
                }
                {productCategory === "POWER_TOOLS"?
                <div>
                <label>Product Type</label>
                <select onChange={handleType} name="category">
                    <option value="DRILL">Drill</option>
                    <option value="SAW">Saw</option>
                </select>
                </div>
                :
                <></>
                }
                <button onClick={createProduct} type="submit" className="btn btn-primary">add</button>
                
                
            </div>
        </div>
        </>
    )
}
export default SellerHome;