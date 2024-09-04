import React from 'react'
import { BsTrash } from 'react-icons/bs';

const Todo = ({deleteTodo , checkTodo , todoItem}) => {

  function deleteTodoHandler(id){
    deleteTodo(id);
  }

  const inputChangeHandler = (id)=>{
    checkTodo(id);
 }
  return (
    <div>
        <li style={{textDecoration: `${todoItem.checked ? 'line-through' : ''}`}}> 
            <input className='bin' type="checkbox" onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked} />
            <span className='id'> ID: {todoItem.id} --- Task:{todoItem.todo} </span>
            <span className='bin' onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrash/></span>
        </li>
    </div>
  )
}

export default Todo