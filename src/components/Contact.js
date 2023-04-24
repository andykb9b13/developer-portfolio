import React from "react";

const styles = {
  contact: {
    backgroundColor: "#f5f5f5",
    marginLeft: "20px",
    marginRight: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
};

const Contact = () => {
  return (
    <section>
      <div style={styles.contact}>
        <h2 style={styles.heading}>Contact</h2>
        <form action="" style={styles.form}>
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
