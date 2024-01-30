import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();


    const add = (e) =>{
        e.preventDefault();

        if(!todo) return
        addTodo({todo:todo, completed:false})
        setTodo("");
    }

    return (
        <div>
            <h1 className="text-white text-center mb-6 text-5xl font-bold ">Manage Your Todos</h1>
            <form
                onSubmit={add}  
                className="flex">
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-4 outline-none duration-150 bg-white/20 py-2 text-green-700 text-2xl tracking-wide"
                />
                <button type="submit" className="rounded-r-lg px-5 py-2 bg-green-600 hover:bg-green-500 text-white shrink-0 text-2xl transition-all">
                    Add
                </button>
            </form>
        </div>
    );
}

export default TodoForm;

