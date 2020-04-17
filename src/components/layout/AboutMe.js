import React from 'react';

const AboutMe = ({ className }) => {
  return (
    <div className={className}>
      <h1 id="about-me">About Me:</h1>

      <div id="profilePicture"></div>

      <center className="profiletext">
        <h3>Mitchell Bielus</h3>
        <h3> Web-Developer and Programmer</h3>
        <h3>
          <a href="/assets/resume.pdf">Resume</a>
        </h3>
      </center>

      <h4>
        My name is Mitchell Bielus and I am a web developer and programmer. My
        primary language is JavaScript, but I'm also interested in learning new
        languages outside of my comfort zone.
      </h4>
    </div>
  );
};

export default AboutMe;
