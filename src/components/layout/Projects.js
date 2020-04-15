import React from 'react';
import Project from '../modules/Project';

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <Project
        name="Stock Watchlist"
        desc="An app used to monitor stocks"
        skills={['Node', 'React', 'Express', 'Mongoose']}
        githubLink="https://github.com/bielusm/Stock-Watchlist"
        siteLink="https://bielusm-stock-watchlist.herokuapp.com/"
        backgroundClass="stockProject"
      />
      <Project
        name="TODO-List"
        desc="Add, view and delete your todos"
        skills={['Node', 'React', 'Express', 'Mongoose']}
        githubLink="https://github.com/bielusm/TODO-List"
        siteLink="https://bielusm-todo-list.herokuapp.com/"
        backgroundClass="todoProject"
      ></Project>
    </>
  );
};

export default Projects;
