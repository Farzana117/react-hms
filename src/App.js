import React from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Login from './components/login';
import Signup from './components/signup';
import BookAppointments from './components/bookAppointments';
import ManageAppointments from './components/manageAppointments';
import OperationsVaccinations from './components/opandVaccine';
import ConsultationsCheckup from './components/consultandCheckup';
import Prescriptions from './components/prescriptions';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <div className="navbar" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"} style={{ color: 'white', textDecoration: 'underline' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/appointments"} style={{ color: 'white', textDecoration: 'underline' }}>Book Appointment</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/prescriptions"} style={{ color: 'white', textDecoration: 'underline' }}>My prescriptions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"} style={{ color: 'white', textDecoration: 'underline' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"} style={{ color: 'white', textDecoration: 'underline' }}>Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="auth">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointments" element={<BookAppointments />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
