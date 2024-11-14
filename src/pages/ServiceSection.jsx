import React, { useState } from "react";
import img from "../assets/image/1.jpg"; // Default image
import OurServicesProductData from "../Layout/OurServicesProductData";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ServiceSection = () => {
  const [product, setProduct] = useState(OurServicesProductData);
  const [selectedService, setSelectedService] = useState("");

  const services = product.map((item) => item.title);
  const uniqueServices = [...new Set(services)];
  const filteredData = product.filter((item) =>
    selectedService ? item.title.includes(selectedService) : true
  );

  return (
    <>

    <Header></Header>
      <div className="ServiceSection">
        <div className="image-Sec">
          <div className="Services-img-details container">
            <h1>selectedService</h1>
            <p>Phone Repair / selectedService</p>
          </div>
        </div>

        <div className="container Service-details">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="border-bot">
                {filteredData.length < 2 ? (
                  filteredData.map((item) => (
                    <div key={item.id} className="service-item ">
                      <img src={item.image || img} alt={item.title} />
                      <h3 className="mt-5">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="service-item">
                    <img src={img} alt="jb" />
                    <h3>services</h3>
                    <p>
                      Water damage can be devastating, but we can help restore
                      your device. Our advanced techniques can address issues
                      caused by spills, moisture, and full submersion. We clean,
                      dry, and repair water-damaged components to get your
                      device back in working condition. Don’t let water damage
                      ruin your device—trust us to fix it
                    </p>
                  </div>
                )}
              </div>

              <div className="form mb-5">
                <h1 className="mb-4 mt-5" >Contact Us</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="your-name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="your-name"
                        name="your-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="your-surname" className="form-label">
                        Your Surname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="your-surname"
                        name="your-surname"
                        placeholder="Enter your surname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="your-email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="your-email"
                        name="your-email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="your-subject" className="form-label">
                        Your Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="your-subject"
                        name="your-subject"
                        placeholder="Enter the subject of your message"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="your-message" className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="your-message"
                        name="your-message"
                        rows="5"
                        placeholder="Enter your message here"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="submit"
                            className="btn btn-dark w-100 fw-bold"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          <div className="col-lg-4 our-services">
        <h3>Our Services</h3>
        <ul>
          {uniqueServices.map((service, index) => (
            <li key={index} onClick={() => setSelectedService(service)}>
              {service}
            </li>
          ))}
        </ul>
      </div>
      </div>

        </div>
      </div>

      <Footer>  </Footer>
      
    </>
  );
};

export default ServiceSection;
