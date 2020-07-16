import React from "react";
import Icon from '@material-ui/core/Icon';
import "./styles.css"

const AddButton = ({ onClick }) => {
    return <div className="addButton" onClick={onClick}>
        <span>Add another Task:</span>
        <span><Icon>add_circle</Icon></span>
    </div>
}


export default AddButton;