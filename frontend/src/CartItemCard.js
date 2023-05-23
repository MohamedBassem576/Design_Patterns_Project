import React from "react";
import { Button } from "react-bootstrap";

function CartItemCard(props){
    return(
        <div className="card modal-card">
            <h5>Name: {props.itemName}</h5>
            <h5>Price: {props.itemPrice}</h5>
            <h5>quantity: {props.itemQuantity}</h5>
            <button onClick={props.removeProduct} className="btn btn-danger my-btn">-</button>
            <button onClick={props.addProduct} className="btn btn-primary my-btn">+</button>
        </div>
    )

}
export default CartItemCard;