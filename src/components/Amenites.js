import React from "react";

function Amenites() {
  return (
    <>
      <section className="amenites">
        <hr className="hr-line mx-auto" />
        <h2 className="text-center">Amenites we offer</h2>
        <hr className="hr-line mx-auto" />
      </section>

      <div className="container  mb-5 mt-5">
        <div className="row  ">
          <div className="col-lg-6 col-md-6 my-4 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
            <ol>
              <li className="am-li fs-4">Wifi</li>
              <li className="am-li fs-4">Free Parking</li>
              <li className="am-li fs-4">Geyser</li>
              <li className="am-li fs-4">Complementry Breakfast</li>
              <li className="am-li fs-4">Space for yoga</li>
              <li className="am-li fs-4">Min Fridge</li>
              <li className="am-li fs-4">Co-Space</li>
              <li className="am-li fs-4">Bonefire (if Needed)</li>
              <li className="am-li fs-4">Kitchen</li>
            </ol>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
            <img
              src="./images/amenites-2.jpg"
              alt="1"
              className="about-img img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Amenites;
