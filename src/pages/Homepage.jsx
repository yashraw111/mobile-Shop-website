import React from 'react'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <main>

    <div className="home-page">
      
      <div className="container details">
       <h1>Bring your gadget <br />
       back to life</h1>
       <p className='mt-1'>Vivamus ut rhoncus sem, eget suscipit ex: <br />
       Ut tempus gravida nunc eget tempor.</p>
       <button>SEE ALL SERVICES</button>
      </div>

    </div>

    </main>

    <div className="ContactUsPage">
      <div className="container">
        <div className="details d-flex justify-content-between">
        <h5>Return the original form to your gadget. Call us</h5>
        <NavLink><button>Contact Us</button></NavLink>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default Homepage