import React from "react";
import "./button.css"
const Button =(props)=>{
    <button className="Button"
    onClick={()=>alert("button clicked")}>

{props.children}
    </button>
}
export default Button;