import React, {useState} from 'react'

export default function Counter() {
    var [counter, setCounter] = useState(0);

    function handleClick() {
        // setCounter(counter+1) // becomes 1
        // setCounter(counter+1) // becomes 1
        // setCounter(counter+1) // becomes 1

        setCounter((counter)=> counter+1) // becomes 1
        setCounter((counter)=> counter+1) // becomes 2
        setCounter((counter)=> counter+1) // becomes 3
    }
    return (<>
        <div>Counter = {counter}</div>
        <button onClick={handleClick}>Increase counter</button>
        </>)
}
