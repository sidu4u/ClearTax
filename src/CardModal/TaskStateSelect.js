import React, { useCallback } from "react";
import Menu from "../commonComponents/Menu";
import "./styles.css";

const TASK_STATES = ["Done", "Started", "Planned"];

const TaskStateSelect = ({ selectedState, changeState }) => {
    const changeStateHandler = useCallback(event => changeState(event.target.value), [changeState]);

    return (<div>
        <Menu items={TASK_STATES} selected={selectedState} onChange={changeStateHandler} label="State"/>
    </div>);
}

export default TaskStateSelect;
