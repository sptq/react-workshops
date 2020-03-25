import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {TODO_LIST_URL} from './constants';

const TodoView = (props) => {
  const id = props.match.params.id;
  const todo = props.todoList.filter(item => item.id === parseInt(id))[0];

  return (
    <div>
      <Link to={TODO_LIST_URL}>Back to Todo List</Link>
      <div>Todo: {todo.title}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todos
  }
};

export default withRouter(connect(mapStateToProps)(TodoView));
