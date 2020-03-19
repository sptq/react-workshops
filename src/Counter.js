import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {
    const items = props.todos.filter(item => item.completed).length;

    return (
        <div>Done: {items} </div>
    )
};


const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

export default connect(mapStateToProps)(Counter);