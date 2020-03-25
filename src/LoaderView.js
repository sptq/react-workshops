import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodos} from './AppService';
import {Redirect} from 'react-router-dom';
import {TODO_LIST_URL} from './constants';

class LoaderView extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.todoList.length === 0) {
      return (
        <div>Loading... {this.props.todoList.length}</div>
      )
    }

    return (
      <Redirect to={TODO_LIST_URL}/>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todos
  }
};

const mapDispatchToProps = {
  getTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderView);




