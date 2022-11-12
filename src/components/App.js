import React from "react";
import "./app.css";
import { Link } from "react-router-dom";
import BootStrapCarousel from "./BootStrapCarousel";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BootStrapCarousel />

        <div>
          <section className="about ">
            <hr className="hr-line mx-auto" />
            <h2 className="text-center">About Us</h2>
            <hr className="hr-line mx-auto" />
          </section>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
                <img
                  src="./images/girl.gif"
                  alt="1"
                  className="about-img w-100 rounded-2"
                />
              </div>

              <div className="col-lg-6 col-md-12  col-12 my-2 col-xxl-6 mx-auto ">
                <h3 className="title">Madhurdarshan</h3>
                <p className="para">
                  Khaniyara got its name because of its slate deposits. It has
                  slate mines and is a sight-seeing place. It is popular among
                  local people as a picnic spot. Our home comes with 2 bedrooms
                  with geysers which is specifically for 4 adults. Parking,
                  Outdoor area, Wifi , Almiras,Badminton, King Size bed,
                  Laundry, Guide(for Tracking),Bonfire, Bed and Breakfast, Mini
                  Fridge,Induction,Kettle,Dinning Table,Cutlerys, Extra bed can
                  be provided. One of the best peaceful and calm place for a
                  vacation trip.
                </p>

                <Link to="/about">
                  <button type="button" className="btn btn-success">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="attractions ">
          <hr className="hr-line mx-auto" />
          <h2 className="text-center">Attractions</h2>
          <hr className="hr-line mx-auto" />
        </section>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-3 col-md-3  col-sm-12 p-1 mx-auto ">
              <div className="card text-white">
                <img
                  src="./images/triund1.jpg"
                  className="card-img "
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Triund</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3  col-sm-12 p-2 mx-auto ">
              <div className="card text-white">
                <img
                  src="./images/aghanger.jpg"
                  className="card-img "
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Aghanger Mahadev</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3   col-sm-12 p-2 mx-auto ">
              <div className="card text-white">
                <img
                  src="./images/karmapa1.png"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Karmapa Monestry</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="rooms">
          <hr className="hr-line mx-auto" />
          <h2 className="text-center">Rooms</h2>
          <hr className="hr-line mx-auto" />
        </section>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3  col-sm-12  p-2 mx-auto">
              <div className="card border-0">
                <img src="./images/room1.jpg" className="card-img" alt="..." />
              </div>
            </div>

            <div className="col-lg-3 col-md-3  col-sm-12  p-2 mx-auto ">
              <div className="card border-0 text-white">
                <img src="./images/room2.jpg" className="card-img" alt="..." />
              </div>
            </div>

            <div className="col-lg-3 col-md-3  col-sm-12  p-2 mx-auto">
              <div className="card border-0 text-white">
                <img src="./images/room3.jpg" className="card-img" alt="..." />
              </div>
            </div>
          </div>
          <div className="text-center mb-5 my-3">
            <Link to="/rooms">
              <button type="button" className="btn btn-success ">
                Check the rooms
              </button>
            </Link>
          </div>
        </div>

        <section className="amenites">
          <hr className="hr-line mx-auto" />
          <h2 className="text-center">Amenites we offer</h2>
          <hr className="hr-line mx-auto" />
        </section>

        <div className="container mx-auto  mb-5 mt-5 ">
          <div className="row ">
            <div className="col-lg-6 col-md-6 my-4 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
              <ol>
                <li className="am-li fs-5">Wifi</li>
                <li className="am-li fs-5">Free Parking</li>
                <li className="am-li fs-5">Geyser</li>
                <li className="am-li fs-5">Breakfast</li>
              </ol>

              <div className="text-center my-3">
                <Link to="/amenites">
                  <button type="button" class="btn btn-success ">
                    Check More Amenites
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <img
                src="./images/amenites-1.webp"
                alt="1"
                className="about-img img-fluid rounded-3  "
              />
            </div>
          </div>
        </div>

        <div className="contact container-fluid my-5">
          <div className="back-img text-center">
            <div>
              <i class="fa-solid fa-earth-africa fs-1 text-white"></i>
            </div>
            <h4 className="contact-h4">
              Luxury is not a place,Its an Experience
            </h4>

            <Link to="/contact">
              <button type="button" class="btn btn-success ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
