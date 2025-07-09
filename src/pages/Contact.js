import React, {useState} from 'react'

function Contact() {
    var [firstname, setFirstname] = useState('Aaron');

    return (<>
        <form method='post'>
            <label>First Name</label><br/>
            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            {firstname !== '' && <p>Your name is {firstname}</p>}
        </form>
    </>)
}

export default Contact;
