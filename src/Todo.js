import React from 'react';

const Todo = (props) => {
    const {id, title, completed, complet} = props;

    return (
        <div id={id}>
        <b>{title}</b> &nbsp;
        {completed ? 'done' : <button onClick={() => complet(id)}> set to done</button>}   
        </div>
    )
};

export default Todo;