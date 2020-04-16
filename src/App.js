import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from './Pages/component/Head';
import Todos from './Pages/Todos';
import About from './Pages/About';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'write page',
        complete: false,
      },
      {
        id: 2,
        title: 'write css',
        complete: false,
      },
      {
        id: 3,
        title: 'write js',
        complete: true,
      },
    ]
  }

  onChangebox = (id) => {
    const todos = this.state.todos.map(item => {
      if (id === item.id) {
        item.complete = !item.complete;
      }
      return item;
    })
    this.setState({
      todos
    });
  }

  onClickDel = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  onSubmit = (value) => {
    this.setState({
      todos: [
        {
          id: this.state.todos.length + 1,
          title: value,
          complete: false,
        },
        ...this.state.todos,
      ]
    })
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <Head />
              <Route 
                path="/" 
                exact 
                render={() => {
                  return (
                    <Todos
                      todos={this.state.todos}
                      onClickDel={this.onClickDel}
                      onChangebox={this.onChangebox}
                      onSubmit={this.onSubmit}
                    /> 
                  )
                }}
              />
              <Route path="/about" exact component={About} />
          </React.Fragment>
        </Router>
    )
  }
}

export default App;
