import React from "react";

function Rooms() {
  return (
    <>
      <section className="rooms">
        <hr className="hr-line mx-auto" />
        <h2 className="text-center">Rooms</h2>
        <hr className="hr-line mx-auto" />
      </section>

      <div className="container text-center">
        <div className="row mb-4">
          <div className="col col-lg-6 col-md-12 col-12">
            <img src="./images/room1.jpg" alt="room1" className="img-fluid" />
            <img src="./images/room2.jpg" alt="room2" className="img-fluid" />
            <img src="./images/room3.jpg" alt="room3" className="img-fluid" />
            <img src="./images/room4.jpg" alt="room4" className="img-fluid" />
          </div>

          <div className="col col-lg-6 col-md-6 col-12">
            <img src="./images/1.jpg" alt="1" className="img-fluid" />
            <img src="./images/room6.jpg " alt="room6" className="img-fluid" />
            <img
              src="./images/sittingPlace.jpg"
              alt="st"
              className="img-fluid"
            />
            <img src="./images/room5.jpg" alt="room5" className="img-fluid" />
          </div>

          <div className="col col-lg-6 col-md-6 col-12">
            <img src="./images/loan.jpg" alt="loan" className="img-fluid" />
            <img src="./images/ketchen.jpg" alt="ket" className="img-fluid" />
            <img src="./images/frount.jpg" alt="frount" className="img-fluid" />
          </div>
        </div>

        <button type="button" className="btn btn-success mb-2">
          <a
            className="text-decoration-none text-dark"
            href="https://www.booking.com/hotel/in/cheerful-2-bhk-home-with-free-parking-amp-nature-view.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4As64spgGwAIB0gIkMTkzMGQ4MDQtOTk0ZC00ODYwLWJjY2QtMTAxNTY2NmRkMWQ52AIG4AIB&sid=826be4e2d27ea8eabede9af8cb3e47bd&dest_id=900051114&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661770845&srpvid=20ce4d6ed6cb05a7&type=total&ucfs=1&activeTab=photosGallery"
          >
            Get Link
          </a>
        </button>
      </div>
    </>
  );
}

export default Rooms;
