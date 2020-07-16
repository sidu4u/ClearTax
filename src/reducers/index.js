import { SAVE_TASK } from "../actionTypes"

const initialState = { tasks: {} }


export default function (state = initialState, action) {
    const { payload = {} } = action;
    const { id } = payload;
    switch (action.type) {
        case SAVE_TASK: {
            const { [id]: task, ...rest } = state.tasks;
            return {
                tasks: { [id]: payload, ...rest }
            }
        }
        default: return state;
    }
}