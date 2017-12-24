/**
 * 1、标题 和 输入框
 */

import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../action";

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <header className="header">
            <h1>Todos</h1>
            <input
                onKeyDown={(e) => {
                    if (input.value && e.keyCode === 13) {
                        dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }}
                ref={node => input = node}
                className="new-todo" type="text" placeholder="接下来做什么？"/>
        </header>
    )
};

// connect 不设置任何参数，默认传入 state dispatch
AddTodo = connect()(AddTodo);

export default AddTodo;