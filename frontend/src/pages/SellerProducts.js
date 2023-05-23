import react, {useState, useEffect} from "react";
import axios from "axios";
import Outfits from "../Outfits";
import { Row, Col } from "react-bootstrap";
import SellerProductCard from "../SellerProductCard";


function SellerProducts(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5001/products").then(res => {
          setProducts(res.data.map(p => {
            return {
              name: p.name,
              type: p.type,
              price: p.price,
              ssid: p.ssid,
              _id: p._id
            }
          }))
        })
      }, [])
    return(
        <div>
        <h1 className="home-title">Seller Products</h1>
        <div className="products">
        <Row xs={1} md={4} className="g-4 row">
        {products.map((p,idx) =>(<Col key={idx}><SellerProductCard title={p.name} price={p.price} id={p._id} /></Col>))}
        </Row>
        </div>
    </div>
    )
}
export default SellerProducts;