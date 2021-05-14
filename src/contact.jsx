import React, { useState} from "react";
import './index.css';
import { db } from "./firebase.jsx";

const Contact = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    //const date = Date.now;
    

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        phone: phone,
        //date: date,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  return (
      <>
    <form className="form" onSubmit={handleSubmit}>
    <h1>Registration Form 🤳</h1>

    <label>Name<span>*</span></label>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <label>Phone<span>*</span></label>
    <input
      type="text"
      placeholder="Mobile"
      value={phone}
      maxLength="10" 
      onChange={(e) => setPhone(e.target.value)}
      required
    />
    <label>Email<span>*</span></label>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <label>Message<span>*</span></label>
    <textarea
      type="text"
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    ></textarea>

    <button
      type="submit"
      style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
    >
      Submit
    </button>
  </form>
  </>
  );
};

export default Contact;
