import React, {useState} from 'react'

function Clock() {
    var [time, setTime] = useState(new Date().toLocaleTimeString());
  
    function handleClick() {
      setInterval(()=> {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }
  
    return(<>
        <h2>Current time is- </h2>
        <h2>{time}</h2>
        <button onClick={handleClick}>
          Start timer/show current time
        </button>
      </>)
}

export default Clock;
