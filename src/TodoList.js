import React, {useState} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

function TodoList () {
const [todo, setTodo] = useState([
    { 
        itemId: 1,
        displayText: 'laundry',
        done:false
        },
        { 
        itemId: 2,
        displayText: 'grocery shopping',
        done:false
        },
        { 
        itemId: 3,
        displayText: 'take a dentist appointment',
        done:true
        },
        
])

const toggleComplete = id =>{
    const updateTodo = todo.map((rec,index)=>{
        if(parseInt(rec.itemId)===parseInt(id)){
            
           rec.done=!rec.done
        }
      return rec
    })
    console.log(updateTodo)
    setTodo(updateTodo)
}

const todoList = todo && todo.length>0 && todo.map((rec)=>(
    <Todo
        key= {rec.itemId}
        todo={rec}
        toggleComplete={toggleComplete}

    />
))

const create = newTodo =>{
    setTodo([...todo,newTodo])
}

const handleDelete =()=>{
    let data  = todo;
    let deleted = []
    let ids = []
    todo.filter((rec)=>{
        if(rec.done===true){
            ids.push(rec.itemId)
        }
    })

    deleted = data.filter((item) => {
        return ids.indexOf(item.itemId) === -1;
    });

    setTodo(deleted)
    }


    return(

        <div>
            <h1>
                Todo List
            </h1>

            <ul>
            {todoList}
            </ul>
            <NewTodoForm
            todo={todo}
                createTodo={create}
            />
            <button onClick={handleDelete}>
          Delete
            </button>
        </div>
    )
}


export default TodoList;