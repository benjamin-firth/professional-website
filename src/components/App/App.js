import React from 'react';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

import './App.css';

const App = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <section>
        <Intro />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        {/* <Extra /> */}
        {/* <Links /> */}
      </section>
    </main>
  );
};

export default App;
