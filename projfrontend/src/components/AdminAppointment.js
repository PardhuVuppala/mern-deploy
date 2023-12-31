import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate } from "react-router-dom";
import axios from 'axios'
function Adminapp()
{
    let usertp = sessionStorage.getItem('Usertype')
    const [Patlist, setPatList] = useState([]);

    useEffect(() => {
        axios.get('https://pardhu-mahidhar.onrender.com/Pat')
            .then(response => {
                console.log(response.data)
                setPatList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewPatList() {
        return Patlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.regname}</td>
                    <td>{currentrow.regnumber}</td>
                    <td>{currentrow.reggender}</td>
                    <td>{currentrow.regrpv}</td>
                    <td>{currentrow.regemail}</td>
                    <td>{currentrow.regage}</td>
                    <td>{currentrow.regdescription}</td>
                </tr>
            );
        });
    }
    if (usertp == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div id="Admin111">
                <div>
                <Navbar/>
                </div>
            <div className='container'>
                <br />
                <h3>ALL PATIENTS DETAILS</h3>

                <table className="table table-bordered table-hover" align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>Previously visted</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Description</th>
                   
                        
                        </tr>
                    </thead>

                    <tbody>
                        {viewPatList()}
                    </tbody>
                </table>
            </div>
            </div>)
    }
}

export default Adminapp