import React from "react";
import { useNavigate } from "react-router-dom";

function OperationsVaccinations(){
    let navigate = useNavigate(); 

    function bookVac(){
        window.alert('Your vaccination slot booked Successfully!!!');
        let path = `/`; 
        navigate(path);
    }
    return(
        <div>
            <br/><br/>
            <div className="ops">
                <h2>Operations details</h2>
                <h5>You don't have any Operations scheduled.... Thank you!!!</h5><br/><br/>
                <div>
                <h2><a onClick={bookVac} style={{color:'blue', textDecoration:'underline', cursor:'pointer'}}>Book vaccination here</a></h2>
            </div>
            </div>
        </div>
    )
}
export default OperationsVaccinations;