import React, {Component} from 'react';
import {connect} from 'react-redux'; 

import {setDone, attatchData} from './store/TodoReducer';
import { getTodos } from './AppService';
import Todo from './Todo';
import Counter from './Counter';

class App extends Component {

  async componentDidMount() {
    this.props.getTodos();
  };
  
  render() {
    const {todos, isLoading} = this.props;

    const todosList = todos.map((item, index) => {
      return (
        <Todo key={index} {...item} complet={this.props.setDone} />
      )
    });

    return (
      <div>
        <Counter/>

        <div>{isLoading ? 'Loading...' : todosList}</div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    todos: store.todo.todos,
    isLoading: store.todo.isLoading
  }
}

const mapDispatchToProps = {
  setDone,
  getTodos
};

export default connect(mapStoreToProps, mapDispatchToProps)(App);
