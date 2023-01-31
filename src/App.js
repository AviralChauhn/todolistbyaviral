import React, { useState } from 'react'
import useList from './todo/uselist'
import "./todo/todo.css"

export default function App() {
  const{list,push,pull}=useList()
  const [todo,setTodo]=useState("")
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    push(todo)
    setTodo("")
  }
  return (
    <div id='body'>
      <div id='heading'>
        <h1>MyToDo List</h1>
      </div>
      <div id='container'>
      <header>
        <form onSubmit={(e)=>{onSubmitHandler(e)}}>
          <lable>Add Todo</lable>
          <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} required></input>
          <button type="submit">Add Todo</button>
        </form>
        <h3>
          {list.map((listItem,index)=>{
          return (
          <>
          <li key={index}>{listItem}</li>
          <button onClick={()=>{pull(index)}}>Remove</button>
          </>
          )
          })}
        </h3>
      </header>
      </div>
      </div>
    
  )
}
