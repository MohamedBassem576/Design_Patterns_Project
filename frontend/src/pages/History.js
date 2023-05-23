import react from "react";
import NavbarComponent from "../NavbarComponent";
import { useState } from "react";

function History(){
  const [email,setEmail] = useState("");
  function handleChange(e){
    var input = e.target.value
    setEmail(input)
  }
  async function getHistory(){
    await fetch("http://localhost:5001/history/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({email: email})
            }).then(res => {
              console.log(res.body)
            })
  }
  return(
    <div>
        <NavbarComponent />
        <h1>history</h1>
        <label>Email</label><br />
        <input type="email" onChange={handleChange} placeholder="email"></input><br />
        <button onClick={getHistory} className="btn btn-dark">See history</button>
    </div>
    
  )
}

export default History;
