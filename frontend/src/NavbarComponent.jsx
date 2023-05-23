import react from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import CartItemCard from "./CartItemCard";

function NavbarComponent(){
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);
  const [email, setEmail] = useState("");

  function handleChange(e){
    var input = e.target.value
    setEmail(input);
  }

  const checkout = async()=>{
    await fetch("http://localhost:5001/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({items: cart.items, email: email, total: cart.getTotalCost()})
    })
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity,0)
  return(
    <div>
    <Navbar className="nav2" expand="sm">
      <Navbar.Brand href="/">sbace_inc</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant="warning" className="cart-btn" onClick={handleShow}>Cart {productsCount} items</Button>
        <ul>
          <li>
          <a href="/complaint">Customer Service</a>
          </li>
          <li>
          <a href="/history">Purchase history</a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {productsCount > 0 ?
        <>
          <p>Items</p>
          {cart.items.map((p,idx)=>(
            <CartItemCard itemName={p.id} itemQuantity={p.quantity} itemPrice={p.price} removeProduct={()=> cart.removeOneFromCart(p.id) } addProduct={()=> cart.addOneToCart(p.id) } />
            
            
          ))}
          <h1>Total: {cart.getTotalCost()}</h1>
          <Button variant="success" onClick={checkout}>Checkout</Button><br />
          <label>Email</label><br />
          <input onChange={handleChange} placeholder="email"></input>
        </>
        :
        <h1>No items</h1>
      }
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default NavbarComponent;
