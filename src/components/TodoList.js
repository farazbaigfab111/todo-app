import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const {todos} = props;

  return (
    <div className='mt-3'>
      {todos.map((todo)=> <TodoListItem todo={todo}/>)}
    </div>
  )
}

export default TodoList
