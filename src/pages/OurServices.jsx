import React from 'react'
import OurServicesData from '../Layout/OurservicesData'
import OurServicesCard from '../Layout/OurServicesUi'
import { NavLink } from 'react-router-dom'

const OurServices = () => {
  return (
    <>
    <section>

        <div className="OurServices">
            <div className="container py-5 ">
            <h1 className='text-center'>Our Services</h1>
                <div className="row">
                    {
                        OurServicesData.map((ele,index)=>{
                            return(
                                <div className="col-lg-4 card-sec">
                                    <OurServicesCard  title={ele.title}  image={ele.image}></OurServicesCard>
                                </div>
                            )

                        })
                    }
                </div>
                <div className="align-item-center text-center">

              <NavLink to="/Services">  <button>SEE ALL SERVICES</button></NavLink>
                </div>
                

            </div>

        </div>
    </section>
    </>

  )
}

export default OurServices