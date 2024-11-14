import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Header></Header>
    <div className="img">
      <img src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2017/03/cropped-our-slider-03-1.jpg" alt="" className="img-fluid w-100" style={{ height: '200px' }}/>
   
    </div>
      <div className="container mt-2 p-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-5">Our Address</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-4 text-danger"></i> 131
                Lonsdale St, Melbourne VIC 3000, Australia
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-4 text-danger"></i>
                <a href="">office-1@example.com</a>
              </li>
              <li className="mb-3">
                <i className="fas fa-clock me-4 text-danger"></i>
                <b>Working hours:</b>
                <br />
                <span className="ms-5">Mon-Fri 08:00-18:00</span>
                <br />
                <span className="ms-5">Sat-Sun 10:00-17:00</span>
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-4 text-danger"></i>{" "}
                <a href="">1-777-555-66666</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="mb-5">Contact Us</h3>
            <form action="" method="post">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name (recuired)"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email (recuired)"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="7"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="btn btn-secondary">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
          <div className="map-responsive">
          <iframe
          title="map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.9683460939054!2d71.73987567480596!3d24.207888171060496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b4320e5b85fa1%3A0x17fa81458006f8e8!2sArbuda%20Mobile%20Paldi..!5e0!3m2!1sen!2sin!4v1730032536250!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

          </div>
        </div>

        <Footer></Footer>
    </>
  );
}

export default Contact;
