import React from 'react';

const Todo = ({content}) => (
    <li>
        <div className="view">
            <input type="checkbox" className="toggle"/>
            <label>{content}</label>
        </div>
    </li>
);

export default Todo;