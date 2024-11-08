import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const userLogin=async (e)=>{
    e.preventDefault();

  //  const res= await fetch('/login',{
  //   method:"POST",
  //   headers:{
  //     "Content-Type": "application/json"
  //   },
  //   body:JSON.stringify({
  //     email, password
  //   })
  //  });
try{

  const res = await axios.post('/register', {
    email,
    password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

   const data=await res.json();

   if(data.status===404 || !data){
    window.alert("Invalid Credentials");
   }
   else{
    window.alert("Login Successfull");
    navigate('/');
   }
  }catch (error) {
    // Handle any error that may occur during the request
    console.error('Error during Login:', error);
    window.alert('Error during Login');
  }

  }
  



  const containerStyle = {
    backgroundColor: '#eee',
  };

  const imageStyle = {
    width: '185px',
  };

  const textStyle = {
    fontSize: '20px', // Adjust the font size as needed
    fontFamily: 'Piazzolla, serif',
  };
  const regStyle = {
    fontSize: '13px', // Adjust the font size as needed
    fontFamily: 'Piazzolla, serif',
  };

  return (
    <>
      <form action="/login" method="POST">
        <section className="h-100 gradient-form" style={containerStyle}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={imageStyle}
                            alt="logo"
                          />
                          <h4 style={textStyle} className="mt-1 mb-5 pb-1">
                            We are The Lotus Team
                          </h4>
                        </div>
                        <form>
                          <p style={textStyle}>Please login to your account</p>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example11" style={regStyle}>
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              id="email"
                              className="form-control"
                              placeholder="Phone number or email address"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22" style={regStyle}>
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                              id="password"
                              className="form-control"
                            />
                          </div>
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                              style={{
                              height:'30px',
                              width:'80px',
                              borderRadius: '5px', // Adjust the border radius as needed
                              textAlign: 'center', // Center the text
                               }}

                               onClick={userLogin}
                            >
                              Log in
                            </button>
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2" style={textStyle}>
                              Don't have an account?
                            </p>
                            <NavLink to="/register">
                              <button type="button" className="btn btn-outline-danger">
                                Create new
                              </button>
                            </NavLink>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
