import React from "react";
import { useParams } from "react-router-dom";

function User () {
    const {userid} = useParams()
    return (
        <div>User: {userid}</div>
    )
}

export default User


// The user component is not displayed on header, but can be accessed by giving its path in the local host link as /user/(any value- may be strig or number)