import React from "react";
import { useNavigate } from "react-router-dom";

function ManageAppointments(){
    let navigate = useNavigate(); 

    function cancelfunc(){
        window.alert('Your appointment has been cancelled Successfully!!!');
        let path = `/`; 
        navigate(path);
    }
    return(
        <div>
            <div className="noAppointments" style={{display:'none'}}>
                <h1 style={{color:'darkgoldenrod', padding:'150px 0',fontStyle:'italic',fontSize:'70px'}}><p style={{backgroundColor:'aliceblue'}}>You dont have any scheduled appointments!!!</p></h1>
            </div>
            <div className="manage">
                <h1 style={{color:'darkgoldenrod', padding:'150px 0',fontStyle:'italic',margin:'auto',width:'500px'}}>
                    <p style={{backgroundColor:'aliceblue',padding:'20px',borderRadius:'10px'}}>Scheduled Appointments: 
                    <p style={{paddingTop:'15px'}} className='textSize'>Date and Time : 10 Feb,2022 11:00AM</p>
                    <button className="btn-cancel" onClick={cancelfunc}>Cancel Appointment</button>
                    </p>
                </h1>
                
            </div>
        </div>
    )
}
export default ManageAppointments;