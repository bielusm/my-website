import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Col,
  Row,
  CardImg,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

const Project = ({ imgUrl, name, desc, skills, githubLink, siteLink }) => {
  return (
    <Card>
      <CardImg src={imgUrl} top />
      <CardHeader>
        {name}
        <p>{desc}</p>
      </CardHeader>
      <CardBody>
        <h4>Skills:</h4>
        <ListGroup>
          {skills.map((skill) => {
            return <ListGroupItem key={skill}>{skill}</ListGroupItem>;
          })}
        </ListGroup>
        <div className="my-3">
          <a href={githubLink}>
            <Button color="success" className="mr-3">
              GitHub
            </Button>
          </a>
          {siteLink && (
            <a href={siteLink}>
              <Button color="success">Site</Button>
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Project;
