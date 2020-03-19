import React, {Component} from 'react';

import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    this.setState({todos});
  };
  
  complet = (id) => {
    this.setState((state) => {
      const todos = state.todos.map(item => {
        if (item.id != id) {
          return item;
        }

        item.completed = true;

        return item;
      });

      return {todos}
    });
  };


  render() {
    const todos = this.state.todos.map((item, index) => {
      return (
        <Todo key={index} {...item} complet={this.complet} />
      )
    });

    const completedTodos = this.state.todos.filter(item => item.completed).length;

    return (
      <div>

        <div>
          Completed {completedTodos}
        </div>

        <br/>
        
        <div>{todos}</div>
      </div>
    )
  }
}



export default App;
