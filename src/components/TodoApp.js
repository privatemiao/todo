import React from 'react';
import {Footer} from "./Footer";
import VisibleTodoList from "../containers/visibleTodoList";
import AddTodo from "../containers/AddTodo";

export const TodoApp = () => (
    <section className="todoapp">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </section>
);
