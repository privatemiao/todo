/**
 * 2、列表
 */

import React from 'react';
import {Todo} from "./Todo";

export const TodoList = ({todos, onTodoClick}) => (
    <ul className="todo-list">
        {todos.map((todo) => (
            <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} content={todo.content}/>
        ))}
    </ul>
);
