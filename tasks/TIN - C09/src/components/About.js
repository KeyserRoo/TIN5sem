import React from 'react';
import { useParams } from 'react-router-dom';

function About() {
  let { name } = useParams();

  return <h1>About {name || 'Unknown'}</h1>;
}

export default About;