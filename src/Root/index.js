import * as React from "react";
import { Provider } from "react-redux";
import createStore from "../store"
import Layout from "../Layout";

let store = createStore();

export default function () {

    return <Provider store={store}>
        <Layout />
    </Provider>;
}