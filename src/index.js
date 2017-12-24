import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from "./components/TodoApp";
import "todomvc-app-css/index.css";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={TodoApp}></Route>
        </Router>
    </Provider>,
    document.getElementById('root'));
