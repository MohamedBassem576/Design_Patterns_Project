import react from "react";
import { Modal } from "react-bootstrap";

function Navbar(){
  return(
    <nav className="nav">
      <a href="/" className="site-title">sbace</a>
    <ul>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/complaint">Customer Service</a>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar;
