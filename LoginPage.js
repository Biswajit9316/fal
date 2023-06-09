import React, { useState } from "react"
import {Navigate, useHistory, useNavigate} from 'react-router-dom' 
import image from '../assets/images/falcon-logo.png'
import dashboard from "./Dashboard"
import image1 from '../assets/images/bnnr-falcon-1.png'
import { handleLogin } from '../App';


function Login({ }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isTextboxClicked, setTextboxClicked] = useState(false);
  const navigate = useNavigate(); 

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make the API request
    const response = await fetch("http://15.207.9.210:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login successful, perform desired actions
      console.log("Login successful!", data);
      // Redirect to the dashboard page
      handleLogin();
    } else {
      // Login failed, display error message
      console.log("Login failed. Please try again.", data);
    }
  };
  return (

    <div className="full-screen" style={{ height: '100vh', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '500px', padding: '20px', boxShadow: '0 0 50px #642f2f', borderRadius: '20px', backgroundColor: '#fff' }}>
          <img src={image} alt="Logo" style={{ height: '100px', width: 'auto', marginBottom: '20px' }} />
          <h3 style={{ fontWeight: 'bold', color: '#000', marginBottom: '20px' }}>Login to your account</h3>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '20px' }}>
            <div className={`form-outline mb-4 ${isTextboxClicked ? "clicked" : ""}`}>
              <label className="form-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', float: 'left' }}>Username</label>
              {/* <input onChange={(e) => setEmail(e.target.value)} type="email" id="loginName" className="form-control" style={{ border: '1px solid #949495', width: '100%' }} placeholder="Email Address" /> */}
              <input onChange={(e) => setUsername(e.target.value)} type="text" id="loginName" className="form-control" style={{ border: '1px solid #949495', width: '100%' }} placeholder="Username" />
            </div>
            <div className={`form-outline mb-4 ${isTextboxClicked ? "clicked" : ""}`}>
              <label className="form-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', float: 'left' }}>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="loginPassword" placeholder='Password' className="form-control" style={{ border: '1px solid #949495', width: '100%' }} />
            </div>
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-start">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" style={{ marginRight: '10px' }} />
                  <label className="form-check-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black' }}>Remember me</label>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <a href="#!" style={{ fontSize: '14px', textDecoration: 'none' }}>Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              style={{
                minWidth: '0',
                width: '100%',
                height: '40px',
                borderRadius: '5px',
                backgroundColor: '#00a5da',
                border: '1px solid #cfe2f2',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '15px',
                fontFamily: 'inherit',
                fontWeight: 'bold'

              }} onClick = {handleSubmit}
              className="btn btn-primary btn-block mb-4"
            >
              Login
            </button>
          </form>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Join our test automation community</p>
        </div>
      </div>
    </div>





  )




}







export default Login;