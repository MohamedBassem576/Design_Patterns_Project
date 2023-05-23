import React from "react";

function Login(){
    return(
        <div>
            <h1>Login</h1>
            <form action="http://localhost:5001/login" method="POST" className="myForm">
            <label>Your email</label>
            <input type="email" name="email"></input>
            <label>Password</label>
            <input type="password" name="password"></input>
            <button className="btn btn-primary" type="submit">submit</button>
        </form>
        </div>
        
    )
}
export default Login;