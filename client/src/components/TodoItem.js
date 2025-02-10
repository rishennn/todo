import React from 'react';

const TodoItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className='todoItem'>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggle(task._id)} 
            />
            
            <span style={{textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task}
            </span>
            
            <button onClick={() => onDelete(task._id)}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
