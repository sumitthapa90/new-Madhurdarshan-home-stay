import React from "react";

function About() {
  return (
    <>
      <section className="about">
        <hr className="hr-line mx-auto" />
        <h2 className="text-center">About Madhurdarshan</h2>
        <hr className="hr-line mx-auto" />
      </section>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
            <img
              src="./images/frount.jpg"
              alt="1"
              className="about-img img-fluid rounded-2"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-12 my-2 col-xxl-6 ">
            <h3 className="title">Madhurdarshan</h3>
            <p className="para">
              Khaniyara got its name because of its slate deposits. It has slate
              mines and is a sight-seeing place. It is popular among local
              people as a picnic spot. Our home comes with 2 bedrooms with
              geysers which is specifically for 4 adults. Parking, Outdoor area,
              Wifi , Almiras,Badminton, King Size bed, Laundry, Guide(for
              Tracking),Bonfire, Bed &amp; Breakfast, Mini
              Fridge,Induction,Kettle,Dinning Table,Cutlerys, Extra bed can be
              provided. One of the best peaceful and calm place for a vacation
              trip.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
