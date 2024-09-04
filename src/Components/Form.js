import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

   const [input , setInput] = useState('');

   function inputChangeHandler(e){
    setInput(e.target.value);
    
   }

   function formSubmitHandler(e){
    e.preventDefault(); //prevents form from getting submited
    const newTodo = {
        id: uuidv4(),
        todo: input,
        checked:false
    };
    props.addTodo(newTodo);
    console.log(input);
    setInput('');
    
   }
   

  return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <input className='form'  onChange={inputChangeHandler} type="text" placeholder='enter your task' value={input} />
        </form>
    </div>
  )
}

export default Form