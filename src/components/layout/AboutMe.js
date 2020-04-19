import React from 'react';

const AboutMe = ({ className }) => {
  return (
    <div className={className} id="about-me">
      <div id="profilePicture"></div>

      <center className="profiletext">
        <h1>Mitchell Bielus</h1>
        <h3> Web-Developer and Programmer</h3>
        <h3>
          <a href="/assets/web resume.pdf">Resume</a>
        </h3>
      </center>

      <p>
        My name is Mitchell Bielus and I am a web developer and programmer. My
        primary language is JavaScript, but I'm also interested in learning new
        languages outside of my comfort zone.
      </p>
    </div>
  );
};

export default AboutMe;
