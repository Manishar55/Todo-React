import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){

    const {todos, setTodos}=useContext(TodoContext);  //to access the document use the hook useContext
    const[todoText, setTodoText]=useState('');
    

    return(
        <>
            <input  placeholder="Add a new todo..."
            onChange={(e)=>setTodoText(e.target.value)}
            value={todoText}
            
            />
            <button onClick={()=>{
                let nextId=todos.length+1;
                setTodos([...todos, {id: nextId, text:todoText, isFinished:false}])
                setTodoText('');
            }}>Submit</button>
        </>
    )
}

export default AddTodo;