import React, {useState} from 'react';
import './css/todolist.css';

function ToDoList() {
    const [task, setTask] = useState('');
    const [lists, setLists] = useState([]);
    const [count, setCount] = useState(0);

    const addItem = ()=> {
        if (task.trim() === '') {
            alert("Input field is empty");
            return;
        }
        setLists([...lists, {id: crypto.randomUUID(), name: task.trim(), completed: false}]);
        setTask('');
        setCount(lists.length+1);
    }

    const toggleComplete = (id)=> {
        setLists(lists =>
            lists.map(task => 
                task.id === id 
                ? {...task, completed: !task.completed} 
                : task
            )
        );
    };

    const removeItem = (id)=> {
        setLists(lists.filter((task) => task.id !== id));
        setCount(lists.length-1);
    };

    return (
        <div className='todo-app'>  
            <h3 className='heading'>To Do List</h3>
            
            <div className='input-action-container'>
                <input 
                    id="new-task"
                    type="text" 
                    placeholder='Enter new task here'
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} />
                <button className="add-task" onClick={addItem}>+</button>
            </div>

            <hr/>
            
            <ul className='todo-list'>
                {lists.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''} >
                        <span className='toggle-complete' onClick={()=> toggleComplete(task.id)}></span>
                        <span>{task.name}</span>
                        <button onClick={()=> {
                            removeItem(task.id)
                        }}>
                            x
                        </button>
                    </li>
                ))}
            </ul>

            <div className='task-count'>Task Count {count}</div>
        </div>
    );
}

export default ToDoList;
