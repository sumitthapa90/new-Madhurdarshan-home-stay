import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function BootStrapCarousel() {
  return (
    <>
      <div className="container-fluid">
        <div className="carousel">
          <Carousel fade className="h-75">
            <Carousel.Item interval={1000}>
              <img
                className="c-img d-block w-100"
                src="./images/homepage.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="carasol-h3">Madhurdarshan</h3>

                <button className="booking-link">
                  <Link className="text-decoration-none text-dark" to="/forms">
                    <h1 className="link">Book your stay</h1>
                  </Link>
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                className=" c-img d-block w-100"
                src="./images/triund.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="carasol-h3">Triund</h3>
                <button className="booking-link">
                  {/* <a
                  className="text-decoration-none text-dark"
                  href="https://www.booking.com/hotel/in/cheerful-2-bhk-home-with-free-parking-amp-nature-view.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4As64spgGwAIB0gIkMTkzMGQ4MDQtOTk0ZC00ODYwLWJjY2QtMTAxNTY2NmRkMWQ52AIG4AIB&sid=826be4e2d27ea8eabede9af8cb3e47bd&dest_id=900051114;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661770845;srpvid=20ce4d6ed6cb05a7;type=total;ucfs=1&#hotelTmpl"
                >
                  Book your stay with us
                </a> */}
                  <Link className="text-decoration-none text-dark" to="/forms">
                    <h1 className="link">For Booking fill up the Form</h1>
                  </Link>
                </button>
                <h3 className="carasol-h3">
                  Triund is a small hill station in the Kangra district in the
                  state of Himachal Pradesh, India. Triund is a part of
                  Dharamkot. Triund is at the foot of the Dhauladhar ranges and
                  is at a height of 2,828
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                className="c-img d-block w-100"
                src="./images/ropeway.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="carasol-h3">Ropeway</h3>
                <button className="booking-link">
                  {/* <a
                  className="text-decoration-none text-dark"
                  href="https://www.booking.com/hotel/in/cheerful-2-bhk-home-with-free-parking-amp-nature-view.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4As64spgGwAIB0gIkMTkzMGQ4MDQtOTk0ZC00ODYwLWJjY2QtMTAxNTY2NmRkMWQ52AIG4AIB&sid=826be4e2d27ea8eabede9af8cb3e47bd&dest_id=900051114;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661770845;srpvid=20ce4d6ed6cb05a7;type=total;ucfs=1&#hotelTmpl"
                >
                  Book your stay with us
                </a> */}
                  <Link className="text-decoration-none text-dark" to="/forms">
                    <h1 className="link">For Booking fill up the Form</h1>
                  </Link>
                </button>
                <h3 className="carasol-h3">
                  The new ropeway between Dharamshala and Mcleodganj will help
                  relieve the traffic on the road connecting these two places.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                className="c-img d-block w-100"
                src="./images/paragliding.webp"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="carasol-h3">Paragliding </h3>
                <button className="booking-link">
                  {/* <a
                  className="text-decoration-none text-dark"
                  href="https://www.booking.com/hotel/in/cheerful-2-bhk-home-with-free-parking-amp-nature-view.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARjIAQzYAQHoAQH4AQuIAgGoAgS4As64spgGwAIB0gIkMTkzMGQ4MDQtOTk0ZC00ODYwLWJjY2QtMTAxNTY2NmRkMWQ52AIG4AIB&sid=826be4e2d27ea8eabede9af8cb3e47bd&dest_id=900051114;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661770845;srpvid=20ce4d6ed6cb05a7;type=total;ucfs=1&#hotelTmpl"
                >
                  Book your stay with us
                </a> */}
                  <Link className="text-decoration-none text-dark" to="/forms">
                    <h1 className="link">For Booking fill up the Form</h1>
                  </Link>
                </button>
                <h3 className="carasol-h3">
                  Paragliding is the recreational and competitive adventure
                  sport of flying paragliders
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default BootStrapCarousel;
