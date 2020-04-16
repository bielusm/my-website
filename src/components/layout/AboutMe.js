import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutMe = ({ className }) => {
  return (
    <div className={className}>
      <h1 id="aboutMe">About Me:</h1>

      <Container>
        <Row>
          <Col>
            <Row>
              <div id="profilePicture"></div>
            </Row>
            <Row>
              <center className="profiletext">
                <p>
                  Mitchell Bielus
                  <br />
                  Web-Developer and Programmer
                </p>
              </center>
            </Row>
          </Col>
          <Col>
            <h3>
              My name is Mitchell Bielus and I am a web developer and
              programmer. My primary language is JavaScript, but I'm also
              interested in learning new languages outside of my comfort zone
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
