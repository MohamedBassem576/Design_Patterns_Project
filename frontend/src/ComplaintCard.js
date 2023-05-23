import React from "react";
import { useState } from "react";

function ComplaintCard(props){
    const [showReply, setShowReply] = useState(false);

    function reply(){
       setShowReply(!showReply);
    }

    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.body}</p>
            <button onClick={reply} className="btn btn-dark">Reply</button>
            {showReply === true?
                <form action="http://localhost:5001/reply/" method="POST">
                    <textarea name="reply" className="txt-area-reply" placeholder="reply"></textarea>
                    <button type="submit" className="btn btn-outline-dark">Send reply</button>
                </form>
                :
                <></>
            }
        </div>
    )
}

export default ComplaintCard;