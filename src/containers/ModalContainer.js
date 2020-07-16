import React from "react";
import { connect } from "react-redux";
import CardModal from "../CardModal";
import { saveTask } from "../actions"

const CardModalContainer = ({ isOpen, selectedCard, closeModal, onSave }) => {
    if (isOpen) {
        return <CardModal card={selectedCard} closeModal={closeModal} onSave={onSave} />
    }

    return null;
}
const mapDispatchToProps = (dispatch) => ({
    onSave: (description, dueDate, asignee, state) => dispatch(saveTask(description, dueDate, asignee, state))
});

export default connect(() => { }, mapDispatchToProps)(CardModalContainer);