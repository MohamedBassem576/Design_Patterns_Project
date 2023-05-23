import React from "react";
import ComplaintCard from "../ComplaintCard";

function CustomerService(){
    return(
        <div>
            <h1>Customer complaints</h1>
            <ComplaintCard name="omar El barbary" body="can we postpone the deadline" />
            <ComplaintCard name="moamen yasser" body="can we postpone the deadline" />
            <ComplaintCard name="sbace" body="can we postpone the deadline" />
            <ComplaintCard name="bassem" body="can we postpone the deadline" />
        </div>
    )
}

export default CustomerService;