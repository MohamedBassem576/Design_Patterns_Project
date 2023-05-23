import react, {useState} from "react";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Form, Row, Card, Button, Col } from "react-bootstrap";

function Outfits(props){
  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);
  const [showReply, setShowReply] = useState(false);
  function review(){
    setShowReply(!showReply);
  }

  const cart2 = useContext(CartContext);
  const productQuantity = cart2.getProductQuantity(props.title);
  const item = {title: props.title, price: props.price}

  const buyNow = async()=>{
    await fetch("http://localhost:5001/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: props.title, price: props.price, _id: props.id})
    })
  }
  
  
  console.log(cart2.items)
  return(
    <>
  <div className="card">
    <h1>{props.title}</h1><p>Price: {props.price}</p>
    <div>
    {productQuantity > 0 ? 
      <>
      <Form as={Row}>
        <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
        <Col sm="6">
          <Button sm="6" onClick={()=> cart2.addOneToCart(props.title)} className="mx-2">+</Button>
          <Button sm="6" onClick={()=> cart2.removeOneFromCart(props.title)} className="mx-2 ">-</Button>
        </Col>  
      </Form>
      <button onClick={()=> cart2.deleteFromCart(props.title)} className="btn btn-outline-danger">Remove from cart</button>
      </>
      :
      <button onClick={() => cart2.addOneToCart(props.title, props.price, props.id)} className="btn btn-outline-warning my-btn">Add to cart</button>
    }
    
    <a href="/checkout"><button className="btn btn-outline-danger my-btn" onClick={buyNow}>Buy now</button></a>
    <button onClick={handleShow} className="btn btn-secondary my-btn">View</button>
    <button onClick={review} className="btn btn-secondary my-btn">Review</button>
    {showReply === true?
                <form action="http://localhost:5001/review/" method="POST">
                    <textarea name="review" className="txt-area-reply" placeholder="review"></textarea>
                    <button type="submit" className="btn btn-outline-dark">Add review</button>
                </form>
                :
                <></>
            }
    </div>
  </div>
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Price: {props.price}</h1>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default Outfits;
