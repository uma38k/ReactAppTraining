import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//import Counter from './Counter';

// first component
// function Clock() {
//   var [time, setTime] = useState(new Date().toLocaleTimeString());

//   console.log('Entering the Clock component');

//   function handleClick() {
//     setInterval(()=> {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     console.log(time)
//   }

//   return(<>
//       {console.log('Entering the clock return')}
//       <h2>Current time is- </h2>
//       <h2>{time}</h2>
//       <button onClick={handleClick}>
//         Start timer/show current time
//       </button>
//     </>)
// }

// second component
// function Main(props) {
//   console.log(props)
//   var [toggle, setToggle] = useState(true)
//   function handleClick() {
//     setToggle(!toggle);
//   }
//   return(<div>
//       <h1>Hello World!! - {props.msg}</h1>
//       <h2>Welcome to React!!!</h2>
//       <Counter/>
//       <hr/>
//       {toggle ? <Counter/> : ""}
//       <hr/>
//       <button onClick={handleClick}>Toggle second counter</button>
//       <h2>Contact Us</h2>
//     </div>)
// };

// const tasks = ["Write an article", "Review code", "Fix bugs"];

// function TaskList() {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index}>{task}</li>
//       ))}
//     </ul>
//   );
// }

// const tasks1 = [
//   { id: 1, name: "Write an article1" },
//   { id: 2, name: "Review code" },
//   { id: 3, name: "Fix bugs" }
// ];
 
// function TaskList1() {
//   return (
//     <ul>
//       {tasks1.map(task => (
//         <li key={task.id}>{task.name}</li>
//       ))}
//     </ul>
//   );
// }

function TaskManager(props) {
  console.log(props);
  const [tasks, setTask] = useState([
    {id:1,name:"Aaron"},
    {id:2,name:"Brown"}
  ]);

  const addTask = ()=> {
    var newTask = {id:Date.now(), name:"Charlie"};
    setTask([...tasks, newTask]);
  }

  const removeTask = ()=> {
    setTask(tasks.filter(task => task.id !== 1));
  };

  return(
    <>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
  
// </Main>);
root.render(<TaskManager id="1">
  
</TaskManager>);

// setInterval(()=> {
//   root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
//     <Clock/>
//   </Main>);
// }, 1000)

//root.render(React.createElement(Main, { msg: "Capgemini", fn: "Hello", ln: "World!" }, "children in createElement"));
//root.render(Main('Capgemini'));
