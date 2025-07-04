import React, {useEffect, useState} from 'react'

export default function CountCalculation() {
    var [count, setCount] = useState(0);
    var [calculation, setCalculation] = useState(0);

    useEffect (()=> {
        setCalculation(()=> count*2);
    }, [count])

    return (<>
            <p>Count: {count}</p>
            <button onClick={() => setCount((count) => count+1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>)
}
