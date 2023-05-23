import react, {useState, useEffect} from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";


function SellerProductCard(props){

    async function removeProduct(){
            await fetch("http://localhost:5001/seller/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({product: props.id})
            })
    }

    return(
        <div className="card">
            <h1>{props.title}</h1><p>Price: {props.price}</p>
            <div>
                <button onClick={removeProduct} className="btn btn-dark">remove</button>
            </div>
        </div>
    )
}
export default SellerProductCard;