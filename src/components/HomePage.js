import React from 'react';
import TopNav from './layout/TopNav';
import Contact from './layout/Contact';
import { Container } from 'reactstrap';
import AboutMe from './layout/AboutMe';
import Projects from './layout/Projects';

const HomePage = () => {
  return (
    <>
      <div className="bg-img"></div>
      <div className="bg-grey">
        <TopNav />
        <Container>
          <AboutMe />
          <Projects />
          <Contact />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
