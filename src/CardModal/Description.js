import React from "react";
import Input from "../commonComponents/Input";
import "./styles.css"

const Description = ({ description, changeDescription }) => {

    return <div className="description">
        <Input value={description} onChange={changeDescription} />
    </div>;
};

export default Description;
