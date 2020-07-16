import React, { useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import "./styles.css"

const Input = ({ value, onChange }) => {
    const changeHandler = useCallback((event) => onChange(event.target.value), [onChange])
    return <TextField value={value} onChange={changeHandler} variant="outlined" className="input" />
}


export default Input;