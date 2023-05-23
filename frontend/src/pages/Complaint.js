import react from "react";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";

function Complaint(){

  const handleSubmit = function(req){
    axios.post("http://localhost:5001")
    req.preventDefault()
    // console.log(req.nativeEvent.srcElement.input.value);
  }

  return(
    <>
    <NavbarComponent />
    <div>
      <h1>Customer Service</h1>
      <form action="http://localhost:5001/complain" method="POST" className="myForm">
        <label>Your email</label>
        <input type="email" name="email"></input>
        <label>Complaint</label>
        <textarea name="complaint"></textarea>
        <button className="btn btn-primary" type="submit">submit</button>
      </form>
    </div>
    </>
  )
}

export default Complaint;
