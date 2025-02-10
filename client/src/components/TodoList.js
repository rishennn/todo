import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('All') 

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:4444/todos");
            const sortedTodos = data.todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setTodos(sortedTodos);
        } catch (e) {
            console.log(e);
        }
    }

    const handleToggle = async (id) => {
        try {
            const updatedTodos = todos.map(todo =>
                todo._id === id ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);

            await axios.put(`http://localhost:4444/todos/${id}`, {
                completed: updatedTodos.find(todo => todo._id === id).completed
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelete = async (id) => {
        try {
            setTodos(todos.filter(todo => todo._id !== id));
            await axios.delete(`http://localhost:4444/todos/${id}`);
        } catch (e) {
            console.log(e);
        }
    };

    const filteredTodos = () => {
        if (filter === 'Completed') {
            return todos.filter(todo => todo.completed);
        }
        if (filter === 'Pending') {
            return todos.filter(todo => !todo.completed);
        }
        return todos;
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]); 

    return (
        <div className="todoList">
            <div className="filter">
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Completed')}>Completed</button>
                <button onClick={() => setFilter('Pending')}>Pending</button>
            </div>
            
            {filteredTodos().length > 0 ? (
                filteredTodos().map((todo) => (
                    <TodoItem
                        key={todo._id}
                        task={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                "No tasks available"
            )}
        </div>
    );
}

export default TodoList;
