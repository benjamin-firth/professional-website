import React from 'react';
import styled from 'styled-components';

import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Extra from '../Extra/Extra';

const App = () => {
  const consoleStyle = 'background: darkslateblue; color: darkseagreen; padding: 50px; font-size: 25px';

  console.log("%cWelcome! My name is Benjamin and I'd love to work with you!", `${consoleStyle}`);

  return (
    <StyledApp>
      <Navbar />
      <section>
        <Intro />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Extra />
        {/* <Links /> */}
      </section>
    </StyledApp>
  );
};

const StyledApp = styled.main`
  @media (max-width: 1200px) {
    display: flex:
    flex-direction: column;
    width: 100%;
  }
`;

export default App;
