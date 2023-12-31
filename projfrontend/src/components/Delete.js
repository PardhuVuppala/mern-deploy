import React, { useState } from 'react'
//import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function Delete() {
    const [msg, setMessage] = useState("");
    const [eemail, setEmpEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('https://pardhu-mahidhar.onrender.com/reg/remove/' + eemail)
            .then(res => {
                console.log(res.data)
                setMessage('EMPLOYEE SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
            })

        setEmpEmail('')
    }

    let usertp = sessionStorage.getItem('Usertype')
    if (usertp == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <>
               
                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR DELETE</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={eemail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value=" Remove User" className="btn btn-danger" />
                </form>
            </>)
    }
}
export default Delete