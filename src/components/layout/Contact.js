import React from 'react';
import { Container, Card, CardHeader, CardBody } from 'reactstrap';

const Contact = ({ className }) => {
  return (
    <div id="contact" className={className}>
      <h1>Contact Me:</h1>
      <h3>
        Email:
        <a href="mailto:mitchellbielus@gmail.com"> mitchellbielus@gmail.com</a>
      </h3>
      <h2>Other platforms I'm on</h2>
      <h3 styles={{ width: '50%', justifyContent: 'center' }}>
        <a href="https://github.com/bielusm">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mitchell-bielus/">
          <i className="fab fa-linkedin ml-4"></i>
        </a>
      </h3>
    </div>
  );
};

export default Contact;
