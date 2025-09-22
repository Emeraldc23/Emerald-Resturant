import "../assets/styles/form.css";
import logo from "../assets/images/Restaurant-logo.png";

import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/3QABBbucN";
export default function Form() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [submit, setSubmit] = useState("");
  async function handleSubmit(e) {
    setFormInputs((prev) => prev);
    e.preventDefault();
    setSubmit("sending...");
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formInputs),
      });
      setFormInputs({ name: "", email: "", phoneNumber: "", message: "" });
      setSubmit("Form Submitted");
      console.log("submitted");

      setTimeout(() => {
        setSubmit("");
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <main className="formContent">
      <section className="contactSection">
        <div className="contactForm">
          <form action="" onSubmit={handleSubmit} className="form">
            <h2 className="formTitle">have a message? </h2>
            <input
              type="text"
              placeholder="NAME*"
              value={formInputs.name}
              onChange={(e) =>
                setFormInputs({ ...formInputs, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="EMAIL*"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
              required
            />
            <input
              type="phone"
              placeholder="PHONE NUMBER*"
              value={formInputs.phoneNumber}
              onChange={(e) =>
                setFormInputs({ ...formInputs, phoneNumber: e.target.value })
              }
              required
            />
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="YOUR MESSAGE*"
              value={formInputs.message}
              onChange={(e) =>
                setFormInputs({ ...formInputs, message: e.target.value })
              }
              required
            />
            <div className="submitContainer">
              <button className="submit-btn">Send Inquires</button>
            </div>
          </form>
          <p>{submit}</p>
        </div>

        <div className="contactInfo">
          <h2 className="formTitle">Contact us</h2>
          <ul className="contactItem">
            <p className="address">13 Igboke Avenue Emene, Enugu, Nigeria</p>
            <p className="callText">Call us at:</p>
            <a href="">phone 1: +234 9039131265</a>
            <a href="">phone 2: +234 8158873745</a>
            <a href="">Email 1: maduagwumartins16@gmail.com</a>
            <a href="">Email 2: maduagwuchukwudi16@gmail.com</a>
          </ul>
        </div>
        {/* Quick lines */}
        <div className="quickLines">
          <h2 className="formTitle">Quick lines</h2>
          <ul className="quickItems">
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">Banquet Facility</a>
            <a href="">Gallery</a>
            <a href="">Catering</a>
            <a href="">Events</a>
            <a href="">Contact us</a>
          </ul>
        </div>
        {/* Hours of Operation */}
        <div className="hoursection">
          <h2 className="formTitle">Hours of operation</h2>
          <ul className="activeSections">
            <a href=""> 6 DAYS OPEN</a>
            <a href="">Monday, Wednesday - Friday: 10AM - 3PM</a>
            <a href="">Monday, Wednesday - Friday: 5PM - 9:30PM</a>
            <a href="">Saturday - Sunday: 10AM - 9:30PM</a>
            <a href=""> Tuesday: Closed</a>
          </ul>
        </div>
      </section>
      <section className="footerSection">
        <div className="footerContent">
          <img src={logo} alt="" className="footerLogo" />
          <p className="copyright">
            Copyright &copy; 2007-2019 SHANE-Restaurants. All Rights Reserved.
          </p>
          <p className="designer">
            Website designed by
            <span className="companyName"> Emerald tech hub</span>
          </p>
        </div>
      </section>
    </main>
  );
}
