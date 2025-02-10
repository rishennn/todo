import React from 'react'
import axios from "axios"

const TodoForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const task = e.target.task.value;



        const fetchData = async () => {
            try{
                if(task.length === 0) {
                    return
                }
                await axios.post("http://localhost:4444/todos", {task})
                e.target.task.value = '';                
            }catch(e) {
                console.log(e);
            }
        }
        fetchData()
    }
  return (
    <form onSubmit={handleSubmit} className='todoForm'>
        <input type='text' name='task' placeholder='Write your task'/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
