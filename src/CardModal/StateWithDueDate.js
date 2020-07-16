import React from "react";
import DueDate from "../commonComponents/DueDate";
import TaskStateSelect from "./TaskStateSelect";
import "./styles.css";

const StateWithDueDate = ({ dueDate, selectedState, changeState, changeDueDate }) => {
    return (<div className="stateWithDueDate">
        <DueDate dueDate={dueDate} changeDueDate={changeDueDate} />
        <TaskStateSelect selectedState={selectedState} changeState={changeState} />
    </div>);
}

export default StateWithDueDate;