import React from "react";
import User from "../commonComponents/User";
import "./styles.css";

const Asignee = ({ name }) => {
    return <div className="asignee">
        <User name={name} />
    </div>
}

export default Asignee;