import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import taskReducers from "../reducers";


export default function () {
    return createStore(taskReducers, composeWithDevTools(applyMiddleware()));
}
