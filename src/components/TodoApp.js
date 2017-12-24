import React from 'react';
import {AddTodo} from "./AddTodo";
import {Footer} from "./Footer";
import VisibleTodoList from "../containers/visibleTodoList";

export const TodoApp = () => (
    <section className="todoapp">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </section>
);
