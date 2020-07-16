import React, { useState, useCallback } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Description from "./Description";
import Button from '@material-ui/core/Button';
import AsigneeSelect from "./AssigneeSelect";
import StateWithDueDate from "./StateWithDueDate";
import "./styles.css";

const CardModal = ({ card, onSave, closeModal }) => {

    const [description, changeDescription] = useState(card?.description ?? "");
    const [asignee, changeAsignee] = useState(card?.asignee ?? "");
    const [state, changeState] = useState(card?.state ?? "");
    const [dueDate, changeDueDate] = useState(card?.dueDate ?? "");
    const saveTask = useCallback(() => {
        onSave(
            description,
            dueDate,
            asignee,
            state
        );
        closeModal();
    }, [onSave, description, asignee, state, dueDate, closeModal]);

    return (

        <Dialog open={true} >
            <div>
                <div className="cardModalContent">
                    <Description value={description} changeDescription={changeDescription} />
                    <StateWithDueDate dueDate={dueDate} changeDueDate={changeDueDate} selectedState={state} changeState={changeState} />
                    <AsigneeSelect selectedAsignee={asignee} changeAsignee={changeAsignee} />
                </div>
                <DialogActions>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button onClick={saveTask}>Save</Button>
                </DialogActions>
            </div>
        </Dialog>

    );
}

export default CardModal;