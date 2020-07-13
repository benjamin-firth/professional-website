import React from 'react';
import styled from 'styled-components';

import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Extra from '../Extra/Extra';

const App = () => {
  return (
    <StyledApp>
      {/* <Navbar /> */}
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

`;

export default App;
