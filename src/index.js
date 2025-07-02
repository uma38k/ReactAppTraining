import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

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
function Main(props) {
  console.log(props)
  var [toggle, setToggle] = useState(true)
  function handleClick() {
    setToggle(!toggle);
  }
  return(<div>
      <h1>Hello World!! - {props.msg}</h1>
      <h2>Welcome to React!!!</h2>
      <Counter/>
      <hr/>
      {toggle ? <Counter/> : ""}
      <hr/>
      <button onClick={handleClick}>Toggle second counter</button>
      <h2>Contact Us</h2>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
  
</Main>);

// setInterval(()=> {
//   root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
//     <Clock/>
//   </Main>);
// }, 1000)

//root.render(React.createElement(Main, { msg: "Capgemini", fn: "Hello", ln: "World!" }, "children in createElement"));
//root.render(Main('Capgemini'));
