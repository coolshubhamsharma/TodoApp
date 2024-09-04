import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {useEffect , useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const TodoApp = () => {

    let arrayDummy = JSON.parse(window.localStorage.getItem('todos') || "[]");

    let [todos , setTodos] =  useState(arrayDummy);

    const addTodo = (todo)=>{
        setTodos([...todos , todo]);
    }

    console.log('inside this app component sam');

    useEffect(()=>{
        //console.log('inside useEffect hook');
        localStorage.setItem('todos' , JSON.stringify(todos));
    } , [todos])

    // const deleteTodo = (id)=>{
    //    const newTodo = todos.filter((todo)=>todo.id !== id);
    //    setTodos(newTodo);
    // }
    // in react we have one move way to do the uper code that is using the previous state

    const deleteTodo = (id)=>{
       setTodos((prevState)=>{ //previous state is actually the previous array and we can perform the same operation on it
        return prevState.filter((todo)=>todo.id !== id); //jo bhi ab change hoga isme vo wapas se usi variable me aa jayega i.e previousState , matlab jo bhi change hoga previousState me vo usi me save ho jaayega

       });
    }

    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            // if  item id equal hai id ke to checked ki value reverse kar denge
            return prevState.map((item , index)=>item.id === id ? {...item ,checked: !item.checked}: item ); ///yahan pe spread operator ye kaam kar rha hai ki item ke andar jo bhi values hai unko khol dega aur fir hamne comma laga ke jo checked ki value hai usko define kar diya hai 
        })
    }

  return (
    <div>
        <h1 style ={{textAlign:'center'}}>Todo list for shubham</h1>
        <Form addTodo={addTodo} todos={todos}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo ={checkTodo}/> 
    </div>
  )
}

export default TodoApp