import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutMe = ({ className }) => {
  return (
    <div className={className}>
      <h1 id="aboutMe">About Me:</h1>

      <Container>
        <div id="profilePicture"></div>

        <center className="profiletext">
          <p>
            Mitchell Bielus
            <br />
            Web-Developer and Programmer
          </p>
        </center>

        <h3>
          My name is Mitchell Bielus and I am a web developer and programmer. My
          primary language is JavaScript, but I'm also interested in learning
          new languages outside of my comfort zone
        </h3>
      </Container>
    </div>
  );
};

export default AboutMe;
