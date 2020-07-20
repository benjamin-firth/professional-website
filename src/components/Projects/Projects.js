import React from 'react';
import styled from 'styled-components';

import rainierMap from '../../ui/images/Mt_Rainier_Trails.jpg';
import iCan2 from '../../ui/images/iCan2ScreenShot.png';
import palettePicker from '../../ui/images/palettePickerScreenShot.png';
import snackMack from '../../ui/images/snackMackScreenShot.png';

const Projects = name => {
  const createProj = (name, imgUrl, className) => {
    return (
      <StyledProject img={imgUrl}>
        {className ? <h3 className={className}>{name}</h3> : <h3>{name}</h3>}
      </StyledProject>
    );
  };

  return (
    <StyledProjects>
      <h2>PROJECTS</h2>
      <StyledProjectContainer>
        <a 
          target="_blank"
          rel="noopener noreferrer" 
          href="https://github.com/benjamin-firth/ican2_FE">{createProj("Ican2", iCan2)}
        </a>
        <a 
          target="_blank"
          rel="noopener noreferrer"  
          href="https://github.com/benjamin-firth/colorPickerFrontend">{createProj("colorPicker", palettePicker)}
        </a>
        <a 
          target="_blank"
          rel="noopener noreferrer"  
          href="https://github.com/benjamin-firth/snackMACK">{createProj("snackMACK", snackMack)}
        </a>
        <a 
          target="_blank"
          rel="noopener noreferrer"  
          href={rainierMap} 
          download>{createProj("Cartography", rainierMap, "map")}
        </a>
      </StyledProjectContainer>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    font-size: 1.8em;
    margin: 70px;
  }
`;

const StyledProjectContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    display: flex;
    flex-flow: wrap;
    padding: 0px 10px;
    width: 96%;
  }

  @media (max-width: 470px) {
    flex-flow: column;
  }
`;

const StyledProject = styled.article`
  align-items: center;
  background: url(${({ img }) => img}) no-repeat center center;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 200px;
  justify-content: center;
  padding: 20px;
  transition: all .2s ease-in-out;
  width: 310px;

  h3 {
    font-size: 1.6em;
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  &:hover {
    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${({ img }) => img});
    transform: scale(1.2);

    h3 {
      opacity: 100%;
    }
  }

  @media (max-width: 1200px) {
    margin: 0px 10px 40px 10px;

    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${({ img }) => img});
    transform: scale(1.2);

    h3 {
      font-size: 1.3em;
      opacity: 100%;
    }
  }

  @media (max-width: 470px) {
    width: 75%;
  }
`;



export default Projects;