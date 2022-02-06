import React from "react";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

let Timings = [
    {label: '10Feb 10:00AM', value:0},
    {label: '11Feb 12:30AM', value:1},
    {label: '13Feb 09:15AM', value:2},
    {label: '15Feb 10:25AM', value:3},
    {label: '16Feb 03:50PM', value:4},
]
function BookAppointments(){
    let navigate = useNavigate(); 

    function bookedfunc(){
        window.alert('Booked Appointment Successfully!!!');
        let path = `/`; 
        navigate(path);
    }
    function cancelled(){
        window.alert('Appointment cancelled Successfully!!!');
        let path = `/`; 
        navigate(path);
    }
    return(
        <div className="booking">
            <div className="manage">
                <h1 style={{color:'darkgoldenrod', padding:'150px 0',fontStyle:'italic',margin:'auto',width:'500px'}}>
                    <p style={{backgroundColor:'aliceblue',padding:'20px',borderRadius:'10px'}}>
                    <p style={{paddingTop:'15px'}} className='textSize'><p>No scheduled appointments avaliable... click below link to book an appointment</p><p style={{textDecoration:'underline'}} onClick={bookedfunc}>Book appointment</p></p>
                    <p style={{paddingTop:'15px',textDecoration:'underline'}} className='textSize' onClick={cancelled}>Cancel appointment</p>
                    </p>
                </h1>
                
            </div>
        </div>
    )
}
export default BookAppointments;