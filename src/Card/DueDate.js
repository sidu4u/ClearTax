import React from "react";
import "./styles.css";

const DueDate = ({ dueDate }) => {
    return (<div className="dueDateDisplay">
        <span>Due Date: </span>
        <span>{dueDate}</span>
    </div>);
}

export default DueDate;