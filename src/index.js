import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import CountCalculation from './UseEffect';
import Component1 from './UseContext';
import ToDoList from './ToDoList';
import Counter from './Counter';
import Clock from './Clock';
import Main from './Main';
import ListKey from './ListKey';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<CountCalculation />);
// root.render(<Component1 />);
// root.render(<ToDoList />);
// root.render(<Counter />);
// root.render(<Clock />);
root.render(<ListKey />);

