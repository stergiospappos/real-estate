import React from "react";
import contactBg from "./assets/contact-bg.jpeg";
import "./contact.css";
function ContactPage() {
  return (
    <>
      <section className="contact--page">
        <div className="contact--page--container">
          <div className="contact--page--container-2">
            <div className="contact--page--container--copy">
              <h1>Meet Our Dedicated Professionals</h1>
              <p>
                Finding your perfect home has never been easier. Contact us now
                for customized real estate solutions and unparalleled support.
              </p>
            </div>
            <div className="contact--page--container--form">
              <div className="contact--page--container--form--form">
                <div className="contact--page--container--form--form--tab-container">
                  <div className="tab active">Email</div>
                  <div className="tab">Messages</div>
                </div>

                <form action="">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Enter Your Message"></textarea>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <img className="contact--page--container--bgimg" src={contactBg} />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
