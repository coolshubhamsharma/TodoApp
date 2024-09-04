import React from 'react'
import Todo from './Todo'

const TodoList = ({todos , deleteTodo , checkTodo}) => { // pehle yahan pe khaali props hi tha baad me hamne props ko destructure kardiya
 
  //  const allTodos =  props.todos.map((item , index)=>{ //before destructureing props
  //     return <Todo key={index} id={item.id} todo={item.todo} index={index} deleteTodo={props.deleteTodo} />
  //  })

   const allTodos =  todos.map((item , index)=>{
      return <Todo key={index} id={item.id} todoItem={item} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
   })
  


  return (
    <section>
        <ul>
             {allTodos}
        </ul>
    </section>
  )
}

export default TodoList