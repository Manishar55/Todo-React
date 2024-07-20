
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

function App() {

  const [todos, setTodos]=useState([
    // {id: 1, text:'todo1', isFinished: true},
    // {id: 2, text:'todo2', isFinished: false}
  ])

  // function addTodos(todoText){
  //   let nextId=todos.length+1;
  //   setTodos([...todos, {id: nextId, isFinished:false, text: todoText}]);
  // }

  return (
    <>
    {/*it takes a common store for you and extract it out so that you can exess it from anywhere
     context api allows you to make a common state or common document that multiple components can simultaneouly read and write 
    to access it you have to create a context object i.e create a new doc now that doc should be shared bet only a set of components
    */}
      <TodoContext.Provider value={{todos, setTodos}}>
        <AddTodo/>
        <TodoList/>
      </TodoContext.Provider>
    </>
  )
}

export default App
