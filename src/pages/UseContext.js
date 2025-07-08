import React, {useState, createContext, useContext} from 'react'

const UserContext = createContext();

function Component1() {
    var [user, setUser] = useState("Aaron Brown");

    return (
        <UserContext.Provider value={user}>
            <h3>Component 1</h3>
            <h4>Hello {user}!</h4>
            <Component2 user={user}/>
        </UserContext.Provider>
    )
}

function Component2() {
    return (
        <>
            <h3>Component 2</h3>
            <Component3/>
        </>
    )
}

function Component3() {
    return (
        <>
            <h3>Component 3</h3>
            <Component4/>
        </>
    )
}

function Component4() {

    var user = useContext(UserContext);
    return (
        <>
            <h3>Component 4</h3>
            <h4>Hello again {user}!</h4>
        </>
    )
}

export default Component1;