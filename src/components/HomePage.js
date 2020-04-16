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
      <TopNav />
      <div className="bg-grey">
            </div>
            <div className="page">
        <Container>
          <AboutMe className="module" />
          <Contact className="module" />
          <Projects className="module" />
        </Container>
</div>
    </>
  );
};

export default HomePage;
