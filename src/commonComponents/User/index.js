import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./styles.css"

const User = ({ name }) => {
    return (<div className="user">
        <span>{name}</span>
        <Avatar />
    </div>)
}

export default User;