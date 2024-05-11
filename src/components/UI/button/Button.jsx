import React from "react";
import "./button.css";

const Button = (props) => {
    return (
        <button className="btn" onClick={props.deleted}>
            حذف
        </button>
    );
};

export default Button;
