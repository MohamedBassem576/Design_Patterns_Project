import User from "./user.js";
import axios from "axios"

class CustomerService extends User {
    constructor(name, email)
    {
        super(name, email);
    }
    
    async respondToComplain(res)
    {
        try{
        var {email,response} =res
       var newRes = await axios.patch("http://localhost:5001/api/complaint",{"email":email,"response":response})
       return newRes
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async reviewComplain()
    {
        try{
        var records =await axios.get("http://localhost:5001/api/complaint")
        return records;

        }
        catch(e){

            console.log(e.message);
        }
    }


}

export default CustomerService;