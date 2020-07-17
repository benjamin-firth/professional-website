import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../ui/images/mountain-background.jpg';


const Intro = () => {
  return (
    <StyledIntro>
      <h1>Welcome, my name is Benjamin Firth.</h1>
      <h2>I am a software engineer.</h2>
      <p>I'm a motivated software engineer with solid knowledge and experience in Javascript, React, HTML/CSS/Sass, Node.js, geospatial and temporal data analysis, TDD, and UX/UI styling. Outside of work I'm an avid rock climber, and can frequently be found wandering around outside in search of a new climbing area. If you'd like to talk to me about web development, land conservation, or climbing don't hesitate to reach out! </p>
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  align-items: center;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 75px 10px 75px;

  h1 {
    font-size: 2.5em;
    margin-top: 80px;
  }

  h2 {
    font-size: 1.8em;
  }

  p {
    font-size: 1.4em;
    margin-top: 75px;
  }
`;

export default Intro;