import React from 'react';
import {Link} from 'react-router-dom';
import {TODO_URL} from './constants';

const Todo = (props) => {
    const {id, title, completed, complet} = props;

    const url = TODO_URL.replace(':id', id);

    return (
        <div id={id}>
            <Link to={url}>
                <b>{title}</b>
            </Link>
            &nbsp;{completed ? 'done' : <button onClick={() => complet(id)}> set to done</button>}
        </div>
    )
};

export default Todo;
