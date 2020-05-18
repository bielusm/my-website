import React from 'react';
import Project from '../modules/Project';
import { Container, Row, Col } from 'reactstrap';

const Projects = ({ className }) => {
  return (
    <Container className={className} id="projects">
      <h1>My Projects:</h1>
      <h2 className="my-4">Web</h2>
      <Container>
        <Row>
          <Col>
            <Project
              name="Stock-Watchlist"
              desc="An app used to monitor stocks"
              skills={[
                'Node',
                'React',
                'Express',
                'Mongoose',
                'Alpha Vantage API',
              ]}
              githubLink="https://github.com/bielusm/Stock-Watchlist"
              siteLink="https://bielusm-stock-watchlist.herokuapp.com/"
              imgUrl="/assets/stock-app.png"
            />
          </Col>
          <Col>
            <Project
              name="TODO-List"
              desc="Add, view and delete your todos"
              skills={['Node', 'React', 'Express', 'Mongoose']}
              githubLink="https://github.com/bielusm/TODO-List"
              siteLink="https://bielusm-todo-list.herokuapp.com/"
              imgUrl="/assets/todo-app.png"
            ></Project>
          </Col>
          <Col>
            <Project
              name="Spotify-Manager"
              desc="Easily mange your spotify playlists"
              skills={['React', 'Spotify API']}
              githubLink="https://github.com/bielusm/Spotify-App"
              siteLink="https://spotify.bielusm.me/"
              imgUrl="/assets/spotify-app.png"
            ></Project>
          </Col>
        </Row>
        <h2 className="my-4">Software</h2>
        <Row>
          <Col>
            <Project
              name="SPH Fluid Simulation"
              desc="A fluid simulation using the Smoothed-Particle Hydrodynamics method"
              skills={['C++', 'SFML']}
              githubLink="https://github.com/bielusm/SPH-Revision"
              imgUrl="/assets/sph-app.png"
            ></Project>
          </Col>
          <Col>
            <Project
              name="Python Pathfinding Program"
              desc="A demonstation of various pathfinding algorithms"
              skills={['Python', 'Pygame']}
              githubLink="https://github.com/bielusm/Path-Finder"
              imgUrl="https://img.youtube.com/vi/yBv3xPY8nXQ/0.jpg"
              videoUrl="https://www.youtube.com/watch?v=yBv3xPY8nXQ"
            ></Project>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
