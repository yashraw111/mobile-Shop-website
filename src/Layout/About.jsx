import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Header></Header>
      <div className="img">
        <img
          src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2017/03/cropped-our-slider-03-1.jpg"
          alt=""
          className="img-fluid w-100"
          style={{ height: "200px" }}
        />
      </div>

      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-6">
            <h2 className="text-uppercase fw-bold">Who We Are</h2>
            <p className="my-4 ">
              Duis lacinia convallis semper. Donec ac ligula eget velit accumsan
              posuere. Mauris fermentum lacus in nulla pulvinar, et consequat
              neque gravida. Proin posuere tellus non finibus sodales.
              Vestibulum sit amet consectetur nisi, sit amet sagittis nibh.
              Donec maximus tellus rhoncus auctor viverra. Curabitur scelerisque
              urna cursus erat cursus vehicula. Morbi eu urna id diam aliquam
              aliquam. Praesent porttitor orci in elit facilisis mattis id eu
              elit. Maecenas interdum, mauris eu fermentum vulputate, diam nibh
              laoreet ex, ut condimentum sapien orci ut turpis. <br /> <br />
              Cras sagittis odio varius nisi iaculis, id tempor massa eleifend.
              Nullam efficitur lobortis venenatis. Duis in bibendum nibh.
              Maecenas turpis felis, dictum at dui ut, porttitor pharetra ipsum.
              Vivamus dapibus posuere enim, eget feugiat est condimentum sit
              amet. Maecenas malesuada, odio sed venenatis interdum, dui orci
              suscipit turpis, id auctor enim orci in risus. Aenean neque
              lectus, feugiat.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://live.staticflickr.com/65535/51830636215_a9ca4935de.jpg"
              className="img-fluid ms-5 p-5"
              alt=""
            />
          </div>
        </div>


        <div className="process mt-5 p-4 ">
          <h3 className="fw-bold">OUR PROCESS</h3>
          <div className="row mt-5 g-0 lh-base">
            <div className="col-3 card p-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/sos.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title my-3 text-uppercase fw-bold">
                <span className="text-danger">1.</span> You call us
                </h4>
                <p>
                  You may call us at any time convenient for you. Our consultant
                  will record the cause of failure of the gadget, your contact
                  details and direct to you the wizard.
                </p>
              </div>
            </div>
            <div className="col-3 card p-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/diagnosis.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title my-3 text-uppercase fw-bold">
                <span className="text-danger">2.</span> Arrival and diagnosis
                </h4>
                <p>
                After the arrival of the master diagnose gadget. Depending on the complexity of the repair, will make repairs on the spot or take away the gadget in the workshop.
                </p>
              </div>
            </div>
            <div className="col-3 card p-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2017/03/IMG_2538-360x185.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title my-3 text-uppercase fw-bold">
                <span className="text-danger">3.</span> Repair

                </h4>
                <p>
                Produced careful repair with replacement of parts only of the original production. You can not worry about the integrity of the data on the phone.
                </p>
              </div>
            </div>
              <div className="col-3 card p-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/van-2002079-2-360x185.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title my-3 text-uppercase fw-bold">
                <span className="text-danger">4.</span> Return to the specified address
                </h4>
                <p>
                After a repair is completed our consultant will contact You and specify address and delivery time. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
<div className="back p-5">
      <div className="container mt-5">
      
          <h3 className="fw-bold">GALLERY</h3>
          <div className="row mt-5 g-0 lh-base">
            <div className="col-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/IMG_2460-1024x683.jpg"
                className="img-fluid"
                alt="..."
              />
             
            </div>
            <div className="col-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/IMG_2546-1024x683.jpg"
                className="img-fluid"
                alt="..."
              />
              
            </div>
            <div className="col-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/MG_2238-1024x683.jpg"
                className="img-fluid"
                alt="..."
              />
              
            </div>
              <div className="col-3">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/IMG_2559-1024x683.jpg"
                className="img-fluid"
                alt="..."
              />
             
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      
    </>
  );
}

export default About;
