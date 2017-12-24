import React from 'react';
import {AddTodo} from "./AddTodo";
import todos from "../store";
import {Footer} from "./Footer";
import {TodoList} from "./TodoList";

export const TodoApp = () => (
  <section className="todoapp">
      <AddTodo/>
      <TodoList todos={todos}/>
      <Footer/>
  </section>
);
