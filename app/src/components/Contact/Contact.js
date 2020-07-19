import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { firebaseConfig } from "../Firebase";

function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const date = new Date().toLocaleString();
  console.log(date);

  function messageUs(e) {
    e.preventDefault();

    if (!(name && email && message)) {
      alert("Fill All Forms");
    } else {
      //Setting the messages to current date and time
      firebase
        .database()
        .ref("Messages/" + `${date}`)
        .set({
          Name: name,
          Email: email,
          Message: message,
        });
      document.getElementById("Form").reset();
    }
  }

  return (
    <>
      <div className="container">
        <div className="jumbotron intro jumbotron-fluid mt-5 justify-content-center text-white">
          <div className="container text-center">
            <h1 className="display-4">Contact Us</h1>
          </div>
        </div>

        <div id="mail">
          <div className="row">
            <div className="col-12 col-md-8 ">
              <div className="border p-5">
                <h3>Contact Us</h3>
                <h6 className="muted">We are here to help</h6>

                <form id="Form" onSubmit={messageUs}>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" placeholder="Hi there, I`m reaching out because i think we can collaborate" id="exampleFormControlTextarea1" onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>
                  </div>
                  <button className="btn btn-lg btn-info offset-4">Submit</button>
                </form>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <h5>Working Hours</h5>
              <h6 className="text-muted">1PM - 2PM, Mon to Fri</h6>

              <h5>Contact</h5>
              <h6>
                <a href="mailto:puranjaycorporations@gmail.com" className="text-muted">
                  puranjaycorporations@gmail.com
                </a>
              </h6>

              <h6>
                <a href="tel:+1(603) 741-0640" className="text-muted">
                  (603) 741-0640
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div className=" text-center pt-5 mt-5 pb-5">
          <h6>WHAT WE ARE BEST AT</h6>
          <h2>Our Services</h2>

          <div className="row">
            <div className="col-12  col-md-4">
              <img src="https://via.placeholder.com/350x150" className="img-thumbnail" alt="" />
              <h4>Amanda Peterson</h4>
              <h6>CEO</h6>
              <hr />
              <h6>
                <a className="text-muted" href="mailto:ceo@business.com">
                  ceo@business.com
                </a>
              </h6>
              <h6>
                <a href="tel:+12564587458" className="text-muted">
                  123456789
                </a>
              </h6>
            </div>

            <div className="col-12  col-md-4">
              <img src="https://via.placeholder.com/350x150" className="img-thumbnail" alt="" />
              <h4>Amanda Peterson</h4>
              <h6>CEO</h6>
              <hr />
              <h6>
                <a className="text-muted" href="mailto:ceo@business.com">
                  ceo@business.com
                </a>
              </h6>
              <h6>
                <a href="tel:+12564587458" className="text-muted">
                  123456789
                </a>
              </h6>
            </div>

            <div className="col-12  col-md-4">
              <img src="https://via.placeholder.com/350x150" className="img-thumbnail" alt="" />
              <h4>Amanda Peterson</h4>
              <h6>CEO</h6>
              <hr />
              <h6>
                <a className="text-muted" href="mailto:ceo@business.com">
                  ceo@business.com
                </a>
              </h6>
              <h6>
                <a href="tel:+12564587458" className="text-muted">
                  123456789
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
