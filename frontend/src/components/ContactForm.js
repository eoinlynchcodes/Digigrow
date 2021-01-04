import React, { useState } from "react";
import '../index.css';
import axios from 'axios';

function ContactForm() {
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_DATABASE_URL}/contactform`, formdata)
      .then(response => {
          setFormData(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }

  return (
    <div className="contact-div">
      <form onSubmit={event => handleSubmit(event)} className="contact-form">
        <h3>CONTACT US</h3>
        <input
          name="name"
          placeholder="Name:"
          onChange={(event) => handleChange(event)}
        />
        <input
          name="phone"
          placeholder="Phone:"
          onChange={(event) => handleChange(event)}
        />
        <input
          name="email"
          placeholder="Email:"
          onChange={(event) => handleChange(event)}
        />
        <button className="orangeButton" type="submit">
          Submit
        </button>
      </form>
      <div class="vl"></div>
        <div>
            <h3>CONTACT INFO</h3>      
            <p><b>Email:</b><br/>
            email@email.com</p>
            <p><b>Phone:</b><br/>
            00 086 087</p>
            <p><b>Address:</b><br/>
            Address goes here:</p>
        </div>
    </div>
  );
}

export default ContactForm;
