import React, {useState} from 'react';
import './css/todolist.css';

function ToDoList() {
    const [task, setTask] = useState('');
    const [lists, setLists] = useState([]);
    const addItem = ()=> {
        if (task.trim() === '') {
            alert("Input field is empty");
            return;
        }
        setLists([...lists, {id:crypto.randomUUID(), name:task.trim(), completed:false}]);
        setTask('');
    }
    const toggleComplete = (id)=> {
        setLists(
            lists.map((task) => 
                task.id === id ? { ...lists, completed:!task.completed} : task
            )
        );
    };
    const removeItem = (id)=> {
        setLists(lists.filter((task) => task.id !== id));
    };
    return (
        <div className='todo-list'>  
            <h3>To Do List</h3>
            
            <input 
                type="text" 
                placeholder='Enter a text'
                value={task} 
                onChange={(e) => setTask(e.target.value)} />
            <button onClick={addItem}>Add Item</button>

            <hr/>
            
            <ul>
                {lists.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''} >
                        <span className='toggle-complete' onClick={()=> toggleComplete(task.id)}></span>
                        <span>{task.name}</span>
                        <button onClick={(e)=> {
                            e.stopPropagation();
                            removeItem(task.id)
                        }}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
