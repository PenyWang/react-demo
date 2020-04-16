import React from 'react';

import CreateItem from './component/CreateItem';
import TodoItem from './component/TodoItem';

export default class Todos extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CreateItem onSubmit={this.props.onSubmit}/>
        {
          this.props.todos.map( item => {
            return (
              <TodoItem 
                key={item.id} 
                todoItem={item} 
                onClickDel={this.props.onClickDel} 
                onChangebox={this.props.onChangebox}
              />
            )
          })
        }
      </React.Fragment>
    )
  }
}