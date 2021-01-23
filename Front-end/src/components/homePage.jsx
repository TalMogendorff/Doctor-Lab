import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <header>
            <div className="headerCont mt-3">
              <div className="headerBGCont">
                <h1 className="headerBgcText rounded text-white text-center p-2">
                  Welcome to Sheba EMR lab Site !
                </h1>
                <img
                  className="headerBgImg"
                  src="https://jnj-content-lab.brightspotcdn.com/82/87/1f02f86a4ddfb68d44840e7d8cf5/lede-doctorfrontlineschina.jpg"
                  alt=""
                />
              </div>
            </div>
          </header>
        </div>

        <div className="container">
          <h1 className="text-center my-5">About Us</h1>
          <hr className="my-3 pinkyBGC" />
          <div className="card mb-3 border-white mt-3 ">
            <div className="row no-gutters">
              <div className="col-md-8 pr-2">
                <div className="card-body">
                  <h4 className="card-title ">EMR LAB</h4>
                  <p className="card-text h4 font-weight-normal  pt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nostrum, ducimus tempore autem dolorem, accusantium maiores
                    voluptate sequi ullam sed ipsum est pariatur saepe
                    cupiditate dolorum atque deleniti! Excepturi, mollitia quis?
                  </p>
                  <div className="card-text mt-5">
                    <h5>
                      Sincercly yours, Doctor
                      <i className="fas fa-hospital-user ml-2"></i>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Safra_Children_Hospital%2C_Tel_Hashomer.JPG/250px-Safra_Children_Hospital%2C_Tel_Hashomer.JPG"
                  className="d-block w-100 h-120"
                  alt="building"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bp margin-10"></div>

        <div className="projects ">
          <div className="container-fluid mt-2 ">
            <div className="card mb-3 mt-3 border-white ">
              <div className="row no-gutters">
                <div className=" col-xl-4 mt-5 ">
                  <div className="ourProjectImgCont">
                    <img
                      src="https://eng.sheba.co.il/webfiles/fck/image/headers/ad5a6a82544fac5a57026d29d7bb815c.jpg"
                      className="d-block w-100 h-120 "
                      alt="building"
                    />
                  </div>
                </div>
                <div className="col-xl-8 pr-3">
                  <div className="card-body">
                    <h1 className="card-title text-center  mt-2 pb-3">
                      Our Projects
                    </h1>
                    <p className="card-text h4 font-weight-normal  pt-3 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis vitae illum est. Tempore rerum quis unde odio
                      nobis ducimus ut earum nisi nulla, architecto error
                      voluptatum ipsa. Aperiam, et molestias. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Facilis consectetur
                      dolorum cum tenetur! Accusantium incidunt voluptas
                      voluptatem nulla? Earum necessitatibus consectetur dolor
                      aliquid fuga ratione optio labore architecto in
                      repudiandae! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Nostrum, ducimus tempore autem dolorem,
                      accusantium maiores voluptate sequi ullam sed ipsum est
                      pariatur saepe cupiditate dolorum atque deleniti!
                      Excepturi, mollitia quis?
                    </p>
                    <div className="card-text mt-5">
                      <div className="text-center ">
                        <Link
                          to="/all-projects"
                          className="btn btn-primary my-2  text-white"
                        >
                          <span> </span>
                          <span className="h5 mx-2 ">More Projects </span>
                          <i className="fas fa-notes-medical h4 "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="bl margin-5"></div>

        <div className="lab  ">
          <div className="container-fluid ">
            <div className="card mb-3 mt-5 border-white ">
              <div className="row no-gutters">
                <div className=" col-xl-8 pr-2">
                  <div className="card-body">
                    <h1 className="card-title text-center ">EMR LAB</h1>
                    <p className="card-text h4 font-weight-normal  pt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sunt cumque accusamus maxime odit, ut repudiandae eos
                      molestiae aspernatur saepe porro esse placeat asperiores
                      nobis illum praesentium? Dolore totam nulla pariatur.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non dolorum, sed tempora repellendus nihil quis aliquid
                      recusandae ex odit, vero modi quo animi eius! Voluptate
                      vero commodi earum iste ratione? Lorem ipsum, dolor sit
                    </p>
                  </div>
                </div>
                <div className=" col-xl-4 mt-3">
                  <div className="emrLabImgConti">
                    <img
                      src="https://medicine.wustl.edu/wp-content/uploads/WomanRadiationTherapy-700x467.jpg"
                      className="d-block w-100 h-120"
                      alt="building"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span id="pub"></span>
            <div className="bp margin-5"></div>
          </div>
        </div>

        <br />

        <div className="container">
          <h1 className="text-center mb-5">Publications</h1>
          <hr className="my-3 pinkyBGC" />
          <div className="card-deck my-5">
            <div className="card border-white">
              <div className="card-body text-center">
                <p className="card-text">
                  <i className="fas fa-clinic-medical fa-3x"></i>
                </p>
                <p className="card-text">Star</p>
              </div>
            </div>
            <div className="card border-white">
              <div className="card-body text-center">
                <p className="card-text">
                  <i className="fas fa-microscope fa-3x"></i>
                </p>
                <p className="card-text">Star</p>
              </div>
            </div>
            <div className="card border-white">
              <div className="card-body text-center">
                <p className="card-text">
                  <i className="fas fa-star-of-life fa-3x"></i>
                </p>
                <p className="card-text">Star</p>
              </div>
            </div>
            <div className="card border-white">
              <div className="card-body text-center">
                <p className="card-text">
                  <i className="fas fa-shield-virus fa-3x"></i>
                </p>
                <p className="card-text">Star</p>
              </div>
            </div>
            <div className="card border-white">
              <div className="card-body text-center">
                <p className="card-text">
                  <i className="fas fa-diagnoses fa-3x"></i>
                </p>
                <p className="card-text">Star</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bp footerBGC">
          <div className="container">
            <h1 className="text-center pt-3 ">Contact</h1>
            <br />
            <br />
            <span id="contact"></span>
            <div className="row text-center">
              <div className="mx-auto mb-2">
                <ul className="text-center footerUl pt-3">
                  <li className="my-2 h5">Mail</li>
                  <li className="my-2 h5">Phone</li>
                  <li className="my-2 h5">Address</li>
                  <li className="my-2 h5">Service Time</li>
                </ul>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13527.332209956623!2d34.842852!3d32.04671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81d1075dcacc6c30!2sSheba%20Medical%20Center!5e0!3m2!1sen!2sil!4v1609802378009!5m2!1sen!2sil"
                width="300"
                height="150"
                title="Iframe"
                frameBorder="0"
                className="mx-auto my-2"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <br />
            <br />
            <div className="text-center">
              <p className="h6 mb-0 pb-2">
                Built by © Tal Mogendorff Fullstack Developer
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
