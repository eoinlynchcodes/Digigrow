import React from "react";
import { Link } from "react-router-dom";
import rochestownpharmacy from "../images/rochestownpharmacy.png";

function Homepage() {
  return (
    <div>
      <header>
        <div className="nav-green-section"></div>
        <div className="nav-white-section">
          <div>
            <h2>Rochestown Pharmacy</h2>
          </div>

          <div className="nav-right-side">
            <h2>+353 21 489 3639</h2>
            <nav>
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/gallery">Services</Link>

              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      <section>
        <img src={rochestownpharmacy} alt="An image of a pharmacy." />
      </section>

      <div className="aboutus-section">
        <h2 className="aboutheading">About</h2>
        <p className="text-alignment">
          A paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text. A
          paragraph of text. A paragraph of text. A paragraph of text.{" "}
        </p>
        <div className="greenbutton">Read More</div>
      </div>

      <section className="openinghours-section">
        <h2 className="centre-this-text">Opening Hours</h2>
        <div className="opening-hours-box-div">
          <div className="hoursbox">
            <h5>Weekdays 9AM - 8PM</h5>
          </div>
          <div className="hoursbox">
            <h5>Saturdays 9AM - 8PM</h5>
          </div>
          <div className="hoursbox">
            <h5>Sundays 11AM - 2PM</h5>
          </div>
        </div>
      </section>

      <section className="contactus-section">
         

      </section>
    </div>
  );
}

export default Homepage;
