import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pritampic from '../Images/pritam.jpg'
import aboutpic from '../Images/aboutpic.png'
import axios from 'axios';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData]=useState({});

  const callAboutPage = async () => {
    try {
      
      const response = await axios.get('http://localhost:8000/about', {
        withCredentials: true, 
      });

      if (response.status === 200) {
        const data = response.data;
        setUserData(data);
      } else {
        throw new Error(response.error);
      }
    } catch (e) {
      console.log(e);
      navigate('/login');
    }
  };
  

  useEffect(() => {
    callAboutPage();
  }, [userData])
  


  



  const [activeTab, setActiveTab] = useState('home'); 

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };




  return (
<>
<div className='container emp-profile'>
  <form method='GET'>
    <div className='row'>
    <div className='col-md-4'>
    <div className='profile-img'>
    <img src={userData.name==="Pritam Kumar sarangi" ? pritampic : aboutpic}  alt="pritam" />
    </div>
    </div>
    <div className='col-md-6'>
      <div className='profile-head'>
      <h1>{userData.name}</h1>
      <h3>{userData.work}</h3>
      <p className='profile-rating mt-3 mb-5'>RANKINGS : <span> 1/10</span></p>
      


      <ul className="nav" role='tablist'>
       <li className="nav-item">
       <a className={`nav-link ${activeTab === 'home' ? 'active' : ''} about-tab`}
          onClick={() => handleTabChange('home')} > About </a>

        </li>
        <li className="nav-item">
        <a className={`nav-link ${activeTab === 'profile' ? 'active' : ''} timeline-tab`}
          onClick={() => handleTabChange('profile')} >Timeline</a>    
        </li>
          
      </ul>

      </div>
    </div>

    <div className='col-md-2'>
    <input type="text"  className='profile-edit-btn' name='btnAddMore' value="Edit  Profile" />

    </div>

    </div>

    <div className='row'>
      {/* left side url */}
      <div className='col-md-4'>
        <div className='profile-work'>
          <p>Work Link</p>
          <a href="https://github.com/Prrriiitam" target="_blank">GITHUB</a><br />
          <a href="https://github.com/Prrriiitam" target="_blank">GITHUB</a><br />
          <a href="https://github.com/Prrriiitam" target="_blank">GITHUB</a><br />
          <a href="https://github.com/Prrriiitam" target="_blank">GITHUB</a><br />



        </div>
      </div>

      {/* right side url */}
      <div className='col-md-8 pl-5 about-info'>
      <div className='tab-content profile-tab' id='myTabContent'>
      <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id='home' role='tabpanel' aria-labelledby='home-tab'>
          <div className='row'>
            <div className='col-md-6'>
              <label>User Id</label>
            </div>
            <div className='col-md-6 cyan'>
            <p>8393920320392302</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label>Name</label>
            </div>
            <div className='col-md-6 cyan'>
            <p>{userData.name}</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label>Email Id</label>
            </div>
            <div className='col-md-6 cyan'>
            <p>{userData.email}</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 '>
              <label>Phone</label>
            </div>
            <div className='col-md-6 cyan'>
            <p>{userData.phone}</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label>Profession</label>
            </div>
            <div className='col-md-6 cyan'>
            <p>Web Developer</p>
            </div>
          </div>

        </div>

        <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id='profile' role='tabpanel' aria-labelledby='profile-tab'>
        <div className='row'>
            <div className='col-md-6'>
              <label>Experience</label>
            </div>
            <div className='col-md-6'>
            <p>Moderator</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label>Work Rate</label>
            </div>
            <div className='col-md-6'>
            <p>100$/day</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label>Total Projects</label>
            </div>
            <div className='col-md-6'>
            <p>3</p>
            </div>
          </div>

        </div>
      </div>

      </div>
    </div>
  </form>
</div>
</>  )
}

export default About