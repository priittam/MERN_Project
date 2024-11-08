import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();
  
  const [user, setUser]=useState({
    name:"",email:"",phone:'',work:"", password:"", cpassword:""
  });

  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});

  }

  const PostReg = async (e) => {
    const { name, email, phone, work, password, cpassword } = user;
  
    try {
      const response = await axios.post('/register', {
        name,
        email,
        phone,
        work,
        password,
        cpassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = response.data;
  
      if (data.status === 404 || !data) {
        window.alert('Invalid Registration');
        console.log('Invalid Registration');
      } else {
        window.alert('Registration Successful');
        navigate('/');
        console.log('Successfully Registered');
      }
    } catch (error) {
      // Handle any error that may occur during the request
      console.error('Error during registration:', error);
      window.alert('Error during registration');
    }
  };






  const containerStyle = {
    backgroundColor: '#eee',
  };

  const cardStyle = {
    borderRadius: '25px',
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
      <form action="/register" method="POST">
        <section className="vh-100" style={containerStyle}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={cardStyle}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example1c" style={regStyle}>Your Name</label>
                              <input  type="text" name="name" id="name" 
                             value={user.name} onChange={handleInputs} className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c" style={regStyle}>Your Email</label>
                              <input  type="email" name="email" id="email" 
                               value={user.email} 
                               onChange={handleInputs} className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c" style={regStyle}>Your Number</label>
                              <input  type="number" name="phone" id="phone" 
                              value={user.phone} 
                              onChange={handleInputs} className="form-control" />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4c" style={regStyle}>Work</label>
                              <input  type="text" name="work" id="work" 
                              value={user.work} 
                              onChange={handleInputs} className="form-control" />
                            </div>
                          </div>


                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4c" style={regStyle}>Password</label>
                              <input  type="password" name="password" id="password" 
                              value={user.password} 
                              onChange={handleInputs} className="form-control" />
                            </div>
                          </div>

                         


                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4cd" style={regStyle}>Repeat your password</label>
                              <input  type="password" name="cpassword" id="cpassword" 
                              value={user.cpassword} 
                              onChange={handleInputs} className="form-control" />
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                            <label className="form-check-label" htmlFor="form2Example3" style={regStyle}>
                              I agree to all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" onClick={PostReg} className="btn btn-primary btn-lg">Register</button>
                          </div>




                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2" style={textStyle}>
                              Already Registered before?
                            </p>
                            <NavLink to="/login">
                              <button type="button" className="btn btn-outline-danger">
                                Login Now
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

export default Register;
