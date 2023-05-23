import react from "react";
import Navbar from "./Navbar";
import "./styles.css";
import Cart from "./pages/Cart";
import Complaint from "./pages/Complaint";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SellerHome from "./pages/SellerHome";
import NavbarComponent from "./NavbarComponent";
import { Container } from "react-bootstrap";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CustomerService from "./pages/CustomerService";
import History from "./pages/History";
import SellerProducts from "./pages/SellerProducts";

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/seller" element={<SellerHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/history" element={<History />} />
        <Route path="/seller-products" element={<SellerProducts />} />
      </Routes>
    </>
  );
}

export default App;
