import React from 'react';
import styled from 'styled-components';

const Projects = name => {
  const createProj = name => {
    return (
      <StyledProject>
        <h3>{name}</h3>
      </StyledProject>
    );
  };

  return (
    <StyledProjects>
      <h2>PROJECTS</h2>
      <StyledProjectContainer>
        {createProj("Project One")}
        {createProj("Project Two")}
        {createProj("Project Three")}
        {createProj("Project Four")}
      </StyledProjectContainer>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  h2 {
    font-size: 1.8em;
    margin: 70px;
  }
`;

const StyledProjectContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const StyledProject = styled.article`
  border: 1px solid;
  cursor: pointer;
  padding: 20px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 40%;
    transform: scale(1.1);
  }
`;



export default Projects;