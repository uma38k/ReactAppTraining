import { Outlet, Link } from "react-router-dom";
import '../css/nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listkey">List & Key</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/usecontext">UseContext</Link>
          </li>
          <li>
            <Link to="/useeffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/todoapp">ToDo App</Link>
          </li>
          <li>
            <Link to="/weatherapp">Weather App</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;