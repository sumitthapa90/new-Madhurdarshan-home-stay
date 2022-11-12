import React, { useState } from "react";
import emailjs from "emailjs-com";

function Form() {
  const [toggle, setToggle] = useState(true);
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const records = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    emailjs
      .sendForm(
        "service_cl00q01",
        "template_c4qssim",
        e.target,
        "LlpK40rUHyx2cYgwA"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBtn = () => {
    console.log("you clicked me");
    setTimeout(() => {
      setToggle(!toggle);
     
    }, 1000);
  };

  return (
    <div className="container">
      <h2 className="form-heading">Fill up you Info</h2>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userRegistration.name}
                    onChange={handleEvent}
                    placeholder="name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userRegistration.email}
                    onChange={handleEvent}
                    placeholder="Email"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone No
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userRegistration.phone}
                    onChange={handleEvent}
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={userRegistration.message}
                    onChange={handleEvent}
                    placeholder="Type Message"
                    required
                  ></textarea>
                </div>

                {toggle ? (
                  <button
                    onClick={handleBtn}
                    className="btn btn-primary btn-block"
                  >
                    Send Mail
                  </button>
                ) : (
                  <div>
                    <p>Your message have been send Kindly refresh the page</p>
                    <p className="send-msg">
                      Sumit Thapa will contact you ASAP
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
