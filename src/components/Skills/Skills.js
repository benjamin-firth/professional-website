import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <section>
      <h2>SKILLS</h2>
      {/* MAP OVER ARRAY OF SKILLS INSTEAD OF WRITING ALL OUT */}
      <ul>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>HTML5 / CSS3</li>
      </ul>
      <StyledUL>
        <li>Sass / SCSS</li>
        <li>jQuery</li>
        <li>Test Driven Development (TDD)</li>
        <li>Jest / Enzyme</li>
      </StyledUL>
      <ul>
        <li>Node.js / Express</li>
        <li>GraphQL</li>
        <li>REST APIs</li>
        <li>Agile</li>
      </ul>
      <ul>
        <li>Git Workflow</li>
        <li>GIS</li>
        <li>ESRI Suite</li>
        <li>E-Commerce</li>
      </ul>
    </section>
  );
};

const StyledUL = styled.ul`
  color: #FFF;
`;

export default Skills;