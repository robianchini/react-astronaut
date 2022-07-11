import React from 'react';
import ReactDOM from 'react-dom';
import ReactAstronaut from './ReactAstronaut';
import { getRandomAstronaut } from './utils';

ReactDOM.render(
  <ReactAstronaut astronaut={getRandomAstronaut().code} />,
  document.getElementById('app')
);
