import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux"

import "./index.css";
import "antd/dist/antd.css";

import AppRouter from "router";

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById("root")
);

