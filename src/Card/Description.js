import React from "react";
import "./styles.css";

const Description = ({ description }) => {
    return (<div className="descriptionDisplay">
        <span>{description}</span>
        </div>)
}

export default Description;