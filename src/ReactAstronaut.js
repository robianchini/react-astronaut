import React from 'react';
import files from './images.json';
import { getAllAstronauts, getAstronauts, getRandomAstronaut } from './utils';

function ReactAstronaut({ astronaut, ...props }) {
  return (
    <img {...props} src={files.filter((i) => i.code === astronaut)[0]?.url} />
  );
}

export { getAllAstronauts, getAstronauts, getRandomAstronaut };
export default ReactAstronaut;
