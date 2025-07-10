import React, {useState} from 'react'
import styles from './Counter.module.css'

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
    return (<div className={styles.body}>
            <h3 className={styles.heading}>Counter = {counter}</h3>
            <button className={styles.cta} onClick={handleClick}>Increase counter</button>
        </div>)
}
