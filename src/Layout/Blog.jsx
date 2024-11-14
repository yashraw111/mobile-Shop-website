import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Blog() {
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

      <div className="container p-5">
        <div className="row">
          <div className="col-7">
            <div class="card p-4 shadow">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-01-1024x507.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title my-3 text-uppercase fw-bold">
                  How to choose headphones for your smartphone
                </h5>
                <div class="metadata my-4">
                  <span class="date">
                    <i class="fas fa-calendar-alt"></i> December 9, 2016
                  </span>
                  <span class="pen">
                    <i class="fas fa-pen"></i> arman
                  </span>
                  <span class="category">
                    <i class="fas fa-folder"></i> Phone
                  </span>
                  <span class="tags">
                    <i class="fas fa-tags"></i> Data, Repair, Replace
                  </span>
                  <span class="comments">
                    <i class="fas fa-comment"></i> 1 Comment
                  </span>
                </div>
                <p class="card-text my-4">
                  Quisque fringilla, nisl non pretium vehicula, leo felis
                  lobortis ipsum, et congue odio tellus vitae lacus. Nunc eget
                  odio eget orci finibus rutrum ac ac neque. Curabitur consequat
                  pulvinar ipsum, quis interdum tellus malesuada quis. Vivamus
                  laoreet arcu sit amet finibus consectetur. Aliquam pulvinar,
                  dolor eu pharetra tempus, turpis nibh aliquet ipsum, iaculis
                  consectetur ipsum dui sodales augue. Suspendisse potenti. Nunc
                  purus erat, tristique ut magna sed, finibus auctor purus.
                  Integer bibendum ligula lobortis sem condimentum rutrum. In
                  hac habitasse platea dictumst. Vivamus eu felis ut est
                  dignissim eleifend.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  className="my-5 text-decoration-none"
                >
                  <b>READ MORE</b>
                </a>
              </div>
            </div>
          </div>
          <div className="col-5 p-5 mt-5">
            <div className="right ">
              <div className="inpt">
                <input type="text" placeholder="Search here...." />
              </div>

              <div class="recent-posts my-5">
                <h4 class="fw-bold mb-4">
                  <h3 class="border-start border-3 border-danger ps-3">
                    RESENT POSTS
                  </h3>
                </h4>

                <div className="my-5">
                  <div class="post d-flex">
                    <img
                      src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-01-70x70.jpg"
                      alt="Headphones"
                    />

                    <div>
                      <p>
                        How to choose headphones <br /> for your smartphone
                        <br /> <span>December 9, 2016</span>
                      </p>
                    </div>
                  </div>

                  <div class="post d-flex mt-3">
                    <img
                      src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-1-70x70.jpg"
                      alt="Phone"
                    />
                    <div>
                      <p>
                        The transfer of data from <br /> tablet to phone
                        <br />
                        <span>December 2, 2016</span>
                      </p>
                    </div>
                  </div>

                  <div class="post d-flex mt-3">
                    <img
                      src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-2-70x70.jpg"
                      alt="phone"
                    />

                    <div>
                      <p>
                        Terms of use of phones and <br /> tablets in hot
                        countries <br />
                        <span>December 2, 2016</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 my-5">
            <div class="card p-4 shadow">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title my-3 text-uppercase fw-bold">
                  The transfer of data from tablet to phone
                </h5>
                <div class="metadata my-4">
                  <span class="date">
                    <i class="fas fa-calendar-alt"></i> December 9, 2016
                  </span>
                  <span class="pen">
                    <i class="fas fa-pen"></i> arman
                  </span>
                  <span class="category">
                    <i class="fas fa-folder"></i> Phone, Tablet
                  </span>
                  <span class="tags">
                    <i class="fas fa-tags"></i> Monitor, Stilus
                  </span>
                  <span class="comments">
                    <i class="fas fa-comment"></i> 1 Comment
                  </span>
                </div>
                <p class="card-text my-4">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Aliquam nec blandit magna. Proin hendrerit molestie porttitor.
                  Donec finibus libero ut odio imperdiet, in mollis dolor
                  suscipit. Maecenas efficitur vestibulum tortor ornare
                  vestibulum. Nullam eu suscipit dolor.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  className="my-5 text-decoration-none"
                >
                  <b>READ MORE</b>
                </a>
              </div>
            </div>
          </div>

          <div className="col-3 ms-5 ">
            <h4 class="fw-bold mb-4">
              <h3 class="border-start border-3 border-danger ps-3">
                INSTAGRAM
              </h3>
            </h4>

            <div class="row g-2 social-img">
              <div class="col-4 ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689607810126-68dc3eed28f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D"
                  class="img-fluid"
                  alt="image 1"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D"
                  class="img-fluid"
                  alt="image 2"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww"
                  class="img-fluid"
                  alt="image 3"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://media.istockphoto.com/id/1618342150/photo/influencer-live-streaming-her-cosmetic-review-and-recommendation-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=folYextDqf9_v_nwtVEyjytmKGLlzPV-h4nGuSkD4lw="
                  class="img-fluid"
                  alt="image 4"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://media.istockphoto.com/id/1501183990/photo/nurses-taking-a-break-and-looking-at-social-media-at-the-cafeteria.webp?a=1&b=1&s=612x612&w=0&k=20&c=3SrCRU1d-9k7zhez1TYsDyqvXifIPJP6dBF3cRtqW5c="
                  class="img-fluid"
                  alt="image 5"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1462841764092-352b1d22ced3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww"
                  class="img-fluid"
                  alt="image 6"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww"
                  class="img-fluid"
                  alt="image 7"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww"
                  class="img-fluid"
                  alt="image 8"
                />
              </div>
              <div class="col-4">
                <img
                  src="https://media.istockphoto.com/id/2040237491/photo/businessman-evaluating-information-on-smartphone-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=CpvU8LOJNe3ZzTqpHGEMCdcdGShWsX24pC9IBBY6gXI="
                  class="img-fluid"
                  alt="image 9"
                />
              </div>
            </div>
            <div className="col-12  my-5">
              <div class="container mt-5">
                <h3 class="border-start border-3 border-danger ps-3">TAGS</h3>

                <div class="my-4">
                  <div className="btn-one d-flex gap-3">
                    <button class="btn btn-outline-danger">Button</button>
                    <button class="btn btn-outline-danger">Crash</button>
                    <button class="btn btn-outline-danger">Data</button>
                    <button class="btn btn-outline-danger">Monitor</button>
                  </div>
                  <div className="btn-two d-flex gap-3 my-3">
                    <button class="btn btn-outline-danger">Repair</button>
                    <button class="btn btn-outline-danger">Replace</button>
                    <button class="btn btn-outline-danger">Stilus</button>
                    <button class="btn btn-outline-danger">Table</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="banner-img">
                <img
                  src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2017/03/banner.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-7">
            <div class="card p-4 shadow">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-2.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title my-3 text-uppercase fw-bold">
                  Terms of use of phones and tablets in hot countries
                </h5>
                <div class="metadata my-4">
                  <span class="date">
                    <i class="fas fa-calendar-alt"></i> December 9, 2016
                  </span>
                  <span class="pen">
                    <i class="fas fa-pen"></i> arman
                  </span>
                  <span class="category">
                    <i class="fas fa-folder"></i>Phone, Tablet
                  </span>
                  <span class="tags">
                    <i class="fas fa-tags"></i> Button, Crash,Table
                  </span>
                  <span class="comments">
                    <i class="fas fa-comment"></i> 1 Comment
                  </span>
                </div>
                <p class="card-text my-4">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Aliquam nec blandit magna. Proin hendrerit molestie porttitor.
                  Donec finibus libero ut odio imperdiet, in mollis dolor
                  suscipit. Maecenas efficitur vestibulum tortor ornare
                  vestibulum. Nullam eu suscipit dolor.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  className="my-5 text-decoration-none"
                >
                  <b>READ MORE</b>
                </a>
              </div>
            </div>
          </div>
          <div className="col-7 my-5">
            <div class="card p-4 shadow">
              <img
                src="https://demo.brothersthemes.com/phone-repair/wp-content/uploads/sites/3/2016/12/blog-3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title my-3 text-uppercase fw-bold">
                  From phone to tablet
                </h5>
                <div class="metadata my-4">
                  <span class="date">
                    <i class="fas fa-calendar-alt"></i> December 9, 2016
                  </span>
                  <span class="pen">
                    <i class="fas fa-pen"></i> arman
                  </span>
                  <span class="category">
                    <i class="fas fa-folder"></i> Tablet
                  </span>
                  <span class="tags">
                    <i class="fas fa-tags"></i> Button, Data, Table
                  </span>
                  <span class="comments">
                    <i class="fas fa-comment"></i> 1 Comment
                  </span>
                </div>
                <p class="card-text my-4">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Aliquam nec blandit magna. Proin hendrerit molestie porttitor.
                  Donec finibus libero ut odio imperdiet, in mollis dolor
                  suscipit. Maecenas efficitur vestibulum tortor ornare
                  vestibulum. Nullam eu suscipit dolor.
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  className="my-5 text-decoration-none"
                >
                  <b>READ MORE</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  );
}

export default Blog;
