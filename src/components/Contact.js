import React from "react";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "userName") {
      return setUserName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    } else {
      setSuccessMessage("You message has been sent!");
      setErrorMessage("");
      setUserName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="section">
      <h2>Contact</h2>
      <form action="" className="section text-black">
        <label htmlFor="">Name</label>
        <input
          name="userName"
          value={userName}
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="w-72"
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          value={email}
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          className="w-72"
        />
        <label htmlFor="">Message</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleInputChange}
          cols="100"
          rows="10"
          placeholder="Type message here"
        ></textarea>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
