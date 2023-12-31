import React from "react";
import '../css/View.css';
import { useNavigate } from "react-router-dom";
import Logo2 from '../images/9.jpg';
import Logo200 from '../images/17.jpg';
import Logo201 from '../images/18.jpg';
import Logo202 from '../images/19.jpg';
import Logo203 from '../images/20.jpg';
import Navbar from './Navbar'; 
import { useState, useEffect } from 'react';
import axios from 'axios';


function Viewalldoctor()
{

   const navigate = useNavigate();
   const handleSubmit = (evt) => {
      evt.preventDefault();
      navigate('/register')
}




const [Doclist, setDocList] = useState([]);
useEffect(() => {
    axios.get('https://pardhu-mahidhar.onrender.com/Doc')
        .then(response => {
            console.log(response.data)
            setDocList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}, [])




function viewDocList() {
  return Doclist.map((currentrow, index) => {
      return (
       
        <div className="container" id="View5" key={index} >
        <form onSubmit={handleSubmit}>
         <img src={Logo2} id="View1"/>
    <ui id="View2">
     <li id="View3">Name : {currentrow.Doctorname}</li>
     <li id="View3">Medical Speaciality:{currentrow.DoctorMs}</li>
     <li id="View3">Experience:{currentrow.DoctorExperience}</li>
     <li id="View3">Age:{currentrow.DoctorAge}</li>
     <li id="View3">Gender:{currentrow.DoctorGender}</li>
     <li id="View3">Degree:{currentrow.DoctorDegree}</li>
     <li id="View3">Time Slot:{currentrow.DoctorTs}</li>
     <br/>
    
     <input type="submit" value="Book Appoointment" id="View4"></input>
    
    </ui>
    </form>
      </div>
      );
  });
}


    return(
      <div>
       <Navbar/>
   
         <br/>
       <div className="container" id="View" >
         <form onSubmit={handleSubmit}>
          <img src={Logo2} id="View1"></img>
     <ui id="View2">
      <li id="View3">Name : Pardhu Mahidhar Vuppala</li>
      <li id="View3">Medical Speaciality:Ophthalmologist</li>
      <li id="View3">Experience:31 Years</li>
      <li id="View3">Age:56</li>
      <li id="View3">Gender:Male</li>
      <li id="View3">Degree:MBBS,MS,DOMS</li>
      <li id="View3">Time Slot:8:00 to 20:00</li>
      <br/>
     
      <input type="submit" value="Book Appoointment" id="View4"></input>
     
     </ui>
     </form>
       </div>






       <br/>
       <div className="container" id="View">
          <img src={Logo201} id="View1"></img>
          <form onSubmit={handleSubmit}>
     <ui id="View2">
      <li id="View3">Name : Ganga Nakhul</li>
      <li id="View3">Medical Speaciality:Neurologist</li>
      <li id="View3">Experience:35 Years</li>
      <li id="View3">Age:61</li>
      <li id="View3">Gender:Male</li>
      <li id="View3">Degree:MBBS,MD</li>
      <li id="View3">Time Slot:8:00 to 18:00</li>
      <br/>
      <input type="submit" value="Book Appoointment" id="View4"></input>
     </ui>
     </form>
       </div>












       <br/>
       <div className="container" id="View">
          <img src={Logo200} id="View1"></img>
          <form onSubmit={handleSubmit}>
     <ui id="View2">
      <li id="View3">Name : Leela Kiran</li>
      <li id="View3">Medical Speaciality:Orthologist</li>
      <li id="View3">Experience:37</li>
      <li id="View3">Age:62</li>
      <li id="View3">Gender:Male</li>
      <li id="View3">Degree:MBBS,MS,MD</li>
      <li id="View3">Time Slot:8:00 to 20:00</li>
      <br/>
      <input type="submit" value="Book Appoointment" id="View4"></input>
     </ui>
     </form>
       </div>










       <br/>
       <div className="container" id="View">
          <img src={Logo203} id="View1"></img>
          <form onSubmit={handleSubmit}>
     <ui id="View2">
      <li id="View3">Name : Bhuvan</li>
      <li id="View3">Medical Speaciality:Dentist</li>
      <li id="View3">Experience:38 Years</li>
      <li id="View3">Age:63</li>
      <li id="View3">Gender:Male</li>
      <li id="View3">Degree:Bachelor of Dental Surgery</li>
      <li id="View3">Time Slot:8:00 to 19:00</li>
      <br/>
      <input type="submit" value="Book Appoointment" id="View4"></input>
     </ui>
     </form>
       </div>










       <br/>
       <div className="container" id="View">
          <img src={Logo202} id="View1"></img>
          <form onSubmit={handleSubmit}>
     <ui id="View2">
      <li id="View3">Name : Sharath</li>
      <li id="View3">Medical Speaciality:Otolayngologist</li>
      <li id="View3">Experience:40 Years</li>
      <li id="View3">Age:70</li>
      <li id="View3">Gender:Male</li>
      <li id="View3">Degree:MBBS,MS in ENT</li>
      <li id="View3">Time Slot:11:00 to 22:00</li>
      <br/>
      <input type="submit" value="Book Appoointment" id="View4"></input>
     </ui>
     </form>
       </div>


     
    <div className="App890">
   
      {viewDocList()
       }
   
    </div>
    <br></br>
    


       </div>


    )
}
export default Viewalldoctor