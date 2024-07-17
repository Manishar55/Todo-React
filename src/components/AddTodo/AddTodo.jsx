import { useState } from "react";

function AddTodo({addTodos}){

    const[todoText, setTodoText]=useState("");

    return(
        <>
            <input  placeholder="Add a new todo..."
            onChange={(e)=>setTodoText(e.target.value)}
            
            ></input>
            <button onClick={()=>{
                addTodos(todoText);
                setTodoText('');
            }}>Submit</button>
        </>
    )
}

export default AddTodo;