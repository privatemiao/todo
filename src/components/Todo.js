import React from 'react';

export const Todo = ({content}) => (
    <li>
        <div className="view">
            <input type="checkbox" className="toggle"/>
            <label>{content}</label>
        </div>
    </li>
);
