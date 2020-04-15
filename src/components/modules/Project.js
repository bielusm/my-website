import React from 'react';
import { Card, CardBody, CardHeader, Container, Col, Row } from 'reactstrap';

const Project = ({
  backgroundClass,
  name,
  desc,
  skills,
  githubLink,
  siteLink,
}) => {
  return (
    <Card className={`project ${backgroundClass}`}>
      <CardBody>
        <h3>{name}</h3>
        <p>{desc}</p>
        <Container>
          <Row>
            <Col>
              <h4>Skills used:</h4>
              <ul className="noDot">
                {skills.map((skill) => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </Col>
            <Col>
              <h4>Find it online:</h4>
              <ul className="noDot">
                <a href={githubLink}>
                  <li>GitHub</li>
                </a>
                <a href={siteLink}>
                  <li>Website</li>
                </a>
              </ul>
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Project;
