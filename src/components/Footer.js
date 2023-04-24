import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333",
    flexDirection: "inline",
  },
  image: {
    backgroundColor: "white",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.image}>
        <a href="https://github.com/andykb9b13">
          <img alt="gitHub Logo" />
        </a>
      </div>
      <div style={styles.image}>
        <a href="https://www.linkedin.com/in/andy-kleindienst-12283226b/">
          <img alt="linkedIn Logo" />
        </a>
      </div>
      <a href="https://www.facebook.com/andy.kleindienst.1/">FaceBook</a>
    </footer>
  );
};

export default Footer;
