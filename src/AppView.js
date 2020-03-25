import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setDone} from './store/TodoReducer';
import Todo from './Todo';
import Counter from './Counter';

class AppView extends Component {
  render() {
    const {todoList} = this.props;

    const todoComponentsList = todoList.map((item, index) => {
      return (
        <Todo key={index} {...item} complet={this.props.setDone} />
      )
    });

    return (
      <div>
        <Counter/>
        <div>{todoComponentsList}</div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    todoList: store.todo.todos,
  }
};

const mapDispatchToProps = {
  setDone
};

export default connect(mapStoreToProps, mapDispatchToProps)(AppView);
