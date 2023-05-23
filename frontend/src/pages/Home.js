import react, {useState, useEffect} from "react";
import Outfits from "../Outfits";
import Search from "../Search";
import { Row, Col } from "react-bootstrap";
import CartProvider from "../cartContext";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";

function Home(){
  const [cart, setCart] = useState([])
  const [initialProducts, setInitialProducts] = useState([])
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
      console.log(res.data)
      setInitialProducts(res.data.map(p => {
        return {
          name: p.name,
          type: p.type,
          price: p.price,
          ssid: p.ssid,
          _id: p._id
        }
      }))
      // setProducts(res.data.results.map(p => p.name))
      // setInitialProducts(res.data.results.map(p => p.name))
    })
  }, [])

  console.log(products)
  var summerOutfits = products.filter(p => p.type === "SUMMER_OUTFIT")
  var winterOutfits = products.filter(p => p.type === "WINTER_OUTFIT")
  var groceries = products.filter(p => p.type === "GORCERY")
  var handTools = products.filter(p => p.type === "HAND_TOOLS")
  var powerTools = products.filter(p => p.type === "POWER_TOOLS")

  function filter(e){
    const search = e.target.value;
    if(search !== ''){
      var filteredProducts = initialProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      setProducts(filteredProducts)
    }else{
      setProducts(initialProducts)
    }
  }

  return(
    <CartProvider>
    <NavbarComponent />
    <div>
        <h1 className="home-title">Products</h1>
        <div className="searchBar">
          <input onChange={filter} placeholder="Search for an item" />
        </div>
        {/* <Search products={products} setProducts={setProducts} /> */}
        <div className="products">
        <h1>Outfits</h1>
        <h5>Winter Outfits ⛄</h5>
        <Row xs={1} md={4} className="g-4 row">
        {winterOutfits.map((p,idx) =>(<Col key={idx}><Outfits title={p.name} price={p.price} id={p._id} /></Col>))}
        </Row>
        {/* <div className="products">{products.map(p =>(<Outfits title={p} content="black t-shirt"/>))}</div> */}
        <h5>Summer Outfits ☀️</h5>
        <Row xs={1} md={4} className="g-4">
        {summerOutfits.map((p,idx) =>(<Col key={idx}><Outfits title={p.name} price={p.price} id={p._id}/></Col>))}
        </Row>
        <h1>Groceries 🛒</h1>
        <Row xs={1} md={4} className="g-4 row">
        {groceries.map((p,idx) =>(<Col key={idx}><Outfits title={p.name} price={p.price} id={p._id}/></Col>))}
        </Row>
        <h1>Tools</h1>
        <h5>Hand Tools 🛠️</h5>
        <Row xs={1} md={4} className="g-4 row">
        {handTools.map((p,idx) =>(<Col key={idx}><Outfits title={p.name} price={p.price} id={p._id}/></Col>))}
        </Row>
        <h5>Power Tools 🛠️</h5>
        <Row xs={1} md={4} className="g-4 row">
        {powerTools.map((p,idx) =>(<Col key={idx}><Outfits title={p.name} price={p.price} id={p._id}/></Col>))}
        </Row>
        </div>
    </div>
    </CartProvider>
  )
}

export default Home;
