import React from 'react';

export const Todo = ({content, onClick, completed}) => (
    <li style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#d9d9d9' : '#4d4d4d'
    }}>
        <div className="view">
            <input onChange={onClick} checked={completed ? 'checked' : ''} type="checkbox" className="toggle"/>
            <label>{content}</label>
        </div>
    </li>
);
