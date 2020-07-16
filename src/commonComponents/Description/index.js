import React, { useCallback } from "react";
import Input from "../Input"

const Description = ({ description, changeDescription }) => {
    const changeDescHandler = useCallback(event => changeDescription(event.target.value), [changeDescription]);
    return <Input value={description} onChange={changeDescHandler} />
}


export default Description;