import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
    return (
        <div className="todo">
            <TodoForm  />
            <TodoList />
        </div>
    )
}

export default App;
