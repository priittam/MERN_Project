import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
   <>
    <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
                </div>
                <h2>We are sorry, Page Not Found!</h2>
                <p className='mb-5'>The Page you are looking for might have been removed and may had its name changed to any other which is temperory unavailable...</p>
                <NavLink to="/">Back To Homepage </NavLink>
           
        </div>
    </div>
   </>
  )
}

export default Error