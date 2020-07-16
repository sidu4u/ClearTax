import React, { useCallback } from "react";
import Menu from "../commonComponents/Menu";
import "./styles.css";

const ASIGNEE = ["Rahul", "Jai", "Priya"];

const AsigneeSelect = ({ selectedAsignee, changeAsignee }) => {
    const changeAsigneehandler = useCallback(event => changeAsignee(event.target.value), [changeAsignee]);

    return (<div className="asigneeSelect">
        <Menu items={ASIGNEE} selected={selectedAsignee} onChange={changeAsigneehandler} label="Asignee"/>
    </div>);
}

export default AsigneeSelect;