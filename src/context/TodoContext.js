import {createContext, useContext} from "react";


/*
Create context ke andar ham log basically object pass karte hai


*/

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoText : "Txt Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) =>{},
});


// Wrapping Krne ke liye Ham Provider ko yeha se export krayenge
export const TodoProvider = TodoContext.Provider;



// custom hook  bol sakte ho
export const useTodo = () => {
    return useContext(TodoContext);
}
