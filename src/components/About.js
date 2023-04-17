import React from "react";
import ProfilePhoto from "../profile-photo-nobg.png";

const About = () => {
  return (
    <section>
      <div>
        <h2>About</h2>
        <img src={ProfilePhoto} alt="Andy Kleindienst profile" />
        <p>
          As a Full-Stack software engineer I have a passion for working
          collaboratively in groups to solve problems and provide creative
          solutions. I recently earned a Full-Stack development certificate from
          UNC Chapel Hill where I had experience implementing MVC architectural
          frameworks, mobile-first development, version control with Git,
          Node.js, Express.js, Sequelize.js, MongoDB, NoSql, MySql, Cloudinary,
          Advanced Javascript, Bootstrap, Handlebars, jQuery, HTML, and CSS. In
          addition, as a full-time professional musician/educator, I hope to
          leverage my strong communication skills and leadership abilities to
          help foster a high-functioning and collaborative environment within a
          production team.
        </p>
      </div>
    </section>
  );
};

export default About;
