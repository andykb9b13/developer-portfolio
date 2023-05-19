import React from "react";
import { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isHover, setIsHover] = useState(false);

  const styles = {
    labels: {
      color: "white",
      fontSize: "2em",
    },
    button: {
      border: "1px solid white",
      borderRadius: "10px",
      fontSize: "2em",
      color: isHover ? "#2b5a7b" : "white",
      backgroundColor: isHover ? "white" : "#2b5a7b",
      padding: "5px",
      margin: "10px",
    },
    inputs: {
      fonSize: "3em",
    },
    messages: {
      fontSize: "1.5em",
      border: "1px solid white",
      borderRadius: "10px",
      margin: "10px",
      padding: "2%",
    },
  };

  // Whenever something is typed in an input, the state of it will be updated
  const handleInputChange = (e) => {
    console.log("this is e in handleInput change", e);
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);

    if (name === "name") {
      return setname(value);
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
    } else if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields");
    } else {
      setSuccessMessage("You message has been sent!");
      setErrorMessage("");
      setname("");
      setEmail("");
      setMessage("");
    }
  };

  //  sets the error message back to '' when the states of name, email, and message change
  useEffect(() => {
    setErrorMessage("");
  }, [name, email, message]);

  //handles when the input loses focus and then checking the state of the input
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" && !validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
    }
    console.log("name in blur", name);
    console.log("value in blur", value);
    if (!value) {
      setErrorMessage(`${name} is a required field`);
    }
    return;
  };

  // handles hover effect of button by changing state of the button
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="section">
      {/* <h2> Contact</h2> */}
      {errorMessage && (
        <div style={styles.messages} className="animate-pulse">
          <p>{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div style={styles.messages}>
          <p>{successMessage}</p>
        </div>
      )}
      <form className="section text-black w-5/6">
        <label style={styles.labels} htmlFor="">
          Name
        </label>
        <input
          name="name"
          value={name}
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          style={styles.inputs}
          className="w-4/6"
          onBlur={handleBlur}
        />
        <label style={styles.labels} htmlFor="">
          Email
        </label>
        <input
          name="email"
          value={email}
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          style={styles.inputs}
          className="w-4/6"
          onBlur={handleBlur}
        />
        <label style={styles.labels} htmlFor="">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleInputChange}
          style={styles.inputs}
          placeholder="Type message here"
          className="w-4/6 h-80"
          onBlur={handleBlur}
        ></textarea>
        <input type="hidden" name="_gotcha"></input>
        <button
          type="submit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={styles.button}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
