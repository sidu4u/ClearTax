import React, { useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import { getCurrentDate } from "../../utils";
import "./styles.css";

const DueDate = ({ dueDate, changeDueDate }) => {
    const changeDateHandler = useCallback((event) => changeDueDate(event.target.value), [changeDueDate]);
    const currentDate = getCurrentDate();

    return <div className="dueDate">
        <span>
            DueDate:
        </span>
        <TextField
            onChange={changeDateHandler}
            type="date"
            defaultValue={currentDate}
            value={dueDate}
        />
    </div>
}


export default DueDate;