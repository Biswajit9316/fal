import React, { useState } from "react";
import image from '../assets/images/falcon-logo.png';
import image1 from '../assets/images/bnnr-falcon-1.png';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTextboxClicked, setTextboxClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="full-screen"
      style={{
        height: '100vh',
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center', // vertically center the content
      }}
    >
      <img
        src={image}
        alt="Logo"
        style={{
          height: '100px',
          width: 'auto',
          position: 'absolute',
          top: '55px',
          right: '40%',
        }}
      />

      <div
        style={{
          marginLeft: '23%',
          marginRight: '23%',
          display: 'flex',
          fontSize: '15px',
          color: '#959595',
          backgroundColor: '#fff',
          width: '50%',
          boxShadow: '0 0 50px #642f2f',
          borderRadius: '20px',
          height: '55vh', // set the height to 50% of the screen
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            fontFamily: 'sans-serif',
            border: '1px solid #ccc',
            padding: '50px',
            width: '100%',
          }}
        >
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <h3
              style={{
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '20px',
              }}
            >
              Login to your account
            </h3>
            <div className={`form-outline mb-4 ${isTextboxClicked ? "clicked" : ""}`} >
                <label className="form-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', float: 'left' }}>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="loginName" className="form-control" style={{ border: '1px solid #949495', width: '350px' }} placeholder="Email Address" />
            </div>
            <div className={`form-outline mb-4 ${isTextboxClicked ? "clicked" : ""}`}>
                <label className="form-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', float: 'left' }}>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="loginPassword" placeholder='Password' className="form-control" style={{ border: '1px solid #949495' }} />
            </div>
            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" style={{position: 'relative',right: '30px'}} />
                        <label className="form-check-label" style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', position: 'relative', right: '27px' }}> Remember me </label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
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
                fontWeight: 'bold',
              }}
              className="btn btn-primary btn-block mb-4"
            >
              Login
            </button>
          </form>
        </div>

        <div
          style={{
            display: 'flex',
            width: '20%',
            backgroundColor: '#f5f9fd',
            minWidth: '400px',
            minHeight: '50vh',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            justifyContent: 'right',
          }}
        >
          <p
            style={{
              display: 'flex',
              color: 'black',
              paddingRight: '70px',
              paddingBottom: '20px',
              alignSelf: 'flex-end',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Join our test automation community
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
