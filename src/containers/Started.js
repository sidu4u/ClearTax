import React from "react";
import { connect } from "react-redux";
import Card from "../Card";
import AddButton from "../commonComponents/AddButton";
import CardContianerHeader from "../CardContainerHeader";
import "./styles.css";

const Started = ({ tasks, openModal }) => {
    return (<div className="taskContainer">
          <CardContianerHeader heading="Started" />
        {tasks.map(task => (<Card description={task.description} assignee={task.asignee} dueDate={task.dueDate} />))}
        <AddButton onClick={openModal} />
    </div>);
};

const mapStateToProps = ({ tasks }) => ({ tasks: Object.values(tasks).filter(task => task.state === "Started") });
// const mapDispatchToProps = (dispatch) => ({
//     openModal: task => dispatch({ type: "OPEN_MODAL", data: task })
// });

export default connect(mapStateToProps)(Started);