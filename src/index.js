import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

// first component
function Clock() {
  return(<>    
      <h2>Current time is- </h2>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </>)
}

// second component
function Main(props) {
  //console.log(props)
  return(<div>
      <h1>Hello World!! - {props.msg}</h1>
      <h2>Welcome to React!!!</h2>
      {props.children}
      <h2>Contact Us</h2>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
//   <Clock/>
// </Main>);

setInterval(()=> {
  root.render(<Main msg="Capgemini" fn="Hello" ln="World!!">
    <Clock/>
  </Main>);
}, 1000)

//root.render(React.createElement(Main, { msg: "Capgemini", fn: "Hello", ln: "World!" }, "children in createElement"));
//root.render(Main('Capgemini'));
