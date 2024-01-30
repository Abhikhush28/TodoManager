import { useState , useEffect } from 'react'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoProvider } from './context/TodoContext';
import { Footer, NavBar } from './components';
function App() {
  const  [todos, setTodos] = useState([]) 


  const addTodo = (todo) => {
    setTodos((prev) => [{id : Date.now(), ...todo}, ...prev])
  }


  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) =>{
    setTodos((prev) => 
        prev.map((prevTodo) => 
          prevTodo.id === id ? {...prevTodo, 
            completed: !prevTodo.completed } : prevTodo ))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    // Yeha par value ko destructure kar raha hu
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <NavBar/>
      <div className="bg-[#38d9a9] min-h-screen py-8 flex flex-wrap justify-evenly items-center">


        <div className="w-full max-w-lg rounded-lg px-4 py-3 text-white flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold text-center">Todo Manager</h1>
          <img src="./img/todo.png" alt=" todo image" />
        </div>



        <div className='w-full max-w-2xl rounded-lg px-4 py-3 shadow-md'>

          <div className="mb-4 px-4 py-3">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>

          <div className="flex gap-y-3 overflow-y-scroll h-96 flex-col p-3 relative">
           
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=> {
         
               return (<TodoItem key={todo.id} todo={todo}/>)

            } )}
          </div>


        </div>



      
      </div>
      <Footer/>
    </TodoProvider>
  
  )
}

export default App;
