import React, {useState, useReducer} from 'react'
import { Component } from 'react';


function NewTodoForm ({todo, createTodo}) {
    console.log(todo)
const [userInput, setUserInput] = useState(
   
    {
        task:''
    }
    
)
const handleChange = e=>{
    setUserInput({ [e.target.name]: e.target.value})
}

const handleSubmit = e =>{
    e.preventDefault();
    console.log(userInput)
    const newTodo = {itemId: todo.length +1, displayText: userInput.displayText, done: false}
    console.log(newTodo)
    createTodo(newTodo)
    setUserInput({task:''})
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    New To do
                </label>
                <input
                    value={userInput.task}
                    onChange={handleChange}
                    id="displayText"
                    name="displayText"

                />
<button>Add</button>
            </form>
        </div>
    )

}


export default NewTodoForm;