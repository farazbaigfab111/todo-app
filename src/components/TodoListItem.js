import React from 'react'

const TodoListItem = (props) => {
 const {todo} = props;

  return (
    <div class="card mb-2 ">
        <div class="card-body d-flex">
            <input class="form-check-input me-2 " type="checkbox" value={todo.checked} />
            <div>
                <h5 class="card-title mb-0 pb-0">{todo.title}</h5>
            </div>
        </div>
    </div>
  )
}

export default TodoListItem