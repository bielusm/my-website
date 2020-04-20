import React from 'react';
import TopNav from './layout/TopNav';
import Contact from './layout/Contact';
import AboutMe from './layout/AboutMe';
import Projects from './layout/Projects';
import { Scrollspy } from 'reactstrap-scrollspy';

const HomePage = () => {
  return (
    <>
      <div className="bg-img"></div>

      <div className="bg-grey"></div>
      <div className="page">
        <Scrollspy
          bottomOffset="60%"
          topOffset="30%"
          delayMs={400}
          names={['null', 'about-me', 'contact', 'projects']}
        >
          <TopNav />
          <AboutMe className="module" />
          <Contact className="module" />
          <Projects className="module" />
        </Scrollspy>
      </div>
    </>
  );
};

export default HomePage;
