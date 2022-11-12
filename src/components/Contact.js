import React from "react";

function Contact() {
  return (
    <>
      <section className="contact">
        <hr className="hr-line mx-auto" />
        <h2 className="text-center">Contact Us and Location</h2>
        <hr className="hr-line mx-auto" />
      </section>

      <div className="container">
        <div className="row">
          <div className="location ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13503.183020294253!2d76.3594618!3d32.2097338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b515a8bf27d85%3A0xa090ae1e527e7953!2sMadhurdarshan%20Homestay!5e0!3m2!1sen!2sin!4v1667929046359!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="container">
            <div className="row my-3">
              <h3 className="fw-bold fs-4 text-decoration-underline mb-4">
                Get in Touch
              </h3>
              <h3 className="fs-4">
                Address:
                <span className="fw-bold fs-5 text-decoration-underline mx-2 ">
                  V.P.O khaniyara Teh-Dharamshala Distt-Kangra Pin-176218
                </span>
              </h3>
              <h3 className="fs-4">
                Phone:
                <span className="fw-bold fs-5 text-decoration-underline mx-2">
                  9816471775
                </span>
              </h3>
              <h3 className="fs-4 ">
                Email:
                <span className="fw-bold fs-5 text-decoration-underline mx-2">
                  sumitthapa90@gmail.com
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
