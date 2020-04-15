import React from 'react';
import { Container, Card, CardHeader, CardBody } from 'reactstrap';

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Me:</h1>
      <p>
        If you need to reach me I can be easily contacted at my email
        <a href="mailto:mitchellbielus@gmail.com"> mitchellbielus@gmail.com</a>
      </p>
      <h4>Other platforms I'm on</h4>
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
