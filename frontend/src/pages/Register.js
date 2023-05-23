import React from "react";

function Register(){
    return(
        <div>
            <h1>Register</h1>
            <form action="http://localhost:5001/register" method="POST" className="myForm">
            <label>Your email</label>
            <input type="email" name="email"></input>
            <label>User type</label>
            <select name="role">
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="service">Service</option>
            </select>
            <label>Password</label>
            <input type="password" name="password"></input>
            <button className="btn btn-primary" type="submit">submit</button>
        </form>
        </div>
        
    )
}
export default Register;