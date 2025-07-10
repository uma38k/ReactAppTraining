import React from 'react';
import './Main.css';
import { styles } from './styles';

function Main(props) {

  const subheadingstyle = {
    backgroundColor: '#784545',
    color: '#000',
    padding: '12px',
    margin: '12px 0',
    textAlign: 'center'
  }

  return(<div className='body'>
      <h1>Hello {props.fn} {props.ln}!!</h1>
      
      <h2 style={{backgroundColor: '#784545', color: '#000', padding: '12px', margin: '12px 0', textAlign: 'center'}}>Hello {props.fn} {props.ln}!!</h2>
      
      <h3 style={subheadingstyle}>Welcome to {props.org}!!!</h3>

      <p style={styles.paragraph}>I am paragraph</p>

      <button style={styles.button}>Button</button>
    </div>)
};

export default Main;
