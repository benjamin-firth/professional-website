import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <h2>SKILLS</h2>
      {/* MAP OVER ARRAY OF SKILLS INSTEAD OF WRITING ALL OUT */}
      <StyledSkillContainer>
        <StyledUL>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>HTML5 / CSS3</li>
        </StyledUL>
        <StyledUL>
          <li>Sass / SCSS</li>
          <li>jQuery</li>
          <li>Test Driven Development (TDD)</li>
          <li>Jest / Enzyme</li>
        </StyledUL>
        <StyledUL>
          <li>Node.js / Express</li>
          <li>GraphQL</li>
          <li>REST APIs</li>
          <li>Agile</li>
        </StyledUL>
        <StyledUL>
          <li>Git Workflow</li>
          <li>GIS</li>
          <li>Styled-Components</li>
          <li>E-Commerce</li>
        </StyledUL>
      </StyledSkillContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  h2 {
    font-size: 1.8em;
    margin: 70px;
    margin-bottom: 50px;
  }
`;

const StyledSkillContainer = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  padding: 0px 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledUL = styled.ul`
  font-size: 1.2em;
`;

export default Skills;