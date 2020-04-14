import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../docs/assets/styles.css';
import HomePage from './components/HomePage';

const jsx = (
  <>
    <HomePage />
  </>
);

ReactDOM.render(jsx, document.getElementById('app'));
