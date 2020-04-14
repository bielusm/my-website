import React from 'react';
import TopNav from './layout/TopNav';
import Contact from './Contact';
import { Container } from 'reactstrap';

const HomePage = () => {
  return (
    <>
      <div className="bg-img"></div>
      <div className="bg-grey">
        <TopNav />
        <Container>
          <Contact />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
