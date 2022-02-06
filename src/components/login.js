import React from "react";

function Login(){
    return(
        <div className="login-page">
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="enter email address here..." />
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="enter your password" />
                </div><br/><br/>
                <p style={{textDecoration:'underline'}}>Forgot password?</p>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
export default Login;