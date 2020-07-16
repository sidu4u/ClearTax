import React from "react";
import Asignee from "./Asignee";
import DueDate from "./DueDate";
import Description from "./Description";
//import Paper from '@material-ui/core/Paper';
import "./styles.css";

const Card = ({ description, dueDate, assignee }) => {
    return (<div className="cardContainer"  >
        <Description description={description} />
        <DueDate dueDate={dueDate} />
        <Asignee name={assignee} />
    </div>)
}


export default Card;