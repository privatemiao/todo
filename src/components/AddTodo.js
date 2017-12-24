/**
 * 1、标题 和 输入框
 */

import React from 'react';

const AddTodo = () => (
    <header className="header">
        <h1>Todos</h1>
        <input className="new-todo" type="text" placeholder="接下来做什么？"/>
    </header>
);

export default AddTodo;