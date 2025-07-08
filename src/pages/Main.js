import React from 'react';

function Main(props) {
  return(<div>
      <h1>Hello {props.fn} {props.ln}!!</h1>
      <h2>Welcome to {props.org}!!!</h2>
    </div>)
};

export default Main;
