import React from "react";
import '../css/Content.css'

const Content = ({titulo, children}) =>{
    return (
        <div  className="Content">
            <h1>{titulo}</h1>
            <div>{children}</div>
        </div>
    )
 }

export default Content;