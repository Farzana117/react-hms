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
    return(
        <div className="booking">
            <form>
                <h3>Book Appointment</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" />
                </div><br/>
                <div className="form-group">
                    <label>Date of birth</label>
                    <input type="date" id="start" name="dob" value="2018-07-22"/>
                </div><br/>
                <div className="form-group">
                    <label>select from available timings</label>
                    <Select options={Timings} style={{color:'black'}}/>
                </div><br/>
                <div className="form-group">
                    <label>Reason</label>
                    <textarea type="text" className="form-control" placeholder="Enter reason for appointment" />
                </div><br/><br/>
                <button type="submit" className="btn btn-primary btn-block" onClick={bookedfunc}>Book Appointment</button>
            </form>
        </div>
    )
}
export default BookAppointments;