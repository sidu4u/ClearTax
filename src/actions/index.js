import { v4 as uuidv4 } from 'uuid';
import { SAVE_TASK } from "../actionTypes"

export function saveTask(description, dueDate, asignee, state) {

    return {
        type: SAVE_TASK,
        payload: {
            id: uuidv4(),
            description,
            dueDate,
            asignee,
            state
        }
    }
}