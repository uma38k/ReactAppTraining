import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loadable from 'react-loadable';
import Nav from './pages/Nav';
import CountCalculation from './pages/UseEffect';
import Component1 from './pages/UseContext';
//import ToDoList from './components/ToDoList';
import Counter from './pages/Counter';
import Clock from './pages/Clock';
import Main from './pages/Main';
import ListKey from './pages/ListKey';
//import WeatherApp from './components/WeatherApp';

function Loading({error}) {
 if (error) {
  return 'Oh No!!'
 } else {
  return <h3>Loading...</h3>
 }
}

const ToDoList = Loadable ({
  loader: ()=> import('./components/ToDoList'),
  loading: Loading
});

const WeatherApp = Loadable ({
  loader: ()=> import('./components/WeatherApp'),
  loading: Loading
});

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav />}>
            <Route index element={<Main org="Capgemini" fn="Aaron" ln="Brown" />} />
            <Route path="listkey" element={<ListKey />} />
            <Route path="clock" element={<Clock />} />
            <Route path="counter" element={<Counter />} />
            <Route path="usecontext" element={<Component1 />} />
            <Route path="useeffect" element={<CountCalculation />} />
            <Route path="todoapp" element={<ToDoList />} />
            <Route path="weatherapp" element={<WeatherApp />} />
            <Route path='*' element={<h2>404 - Page not found</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
