import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <StyledEducation id="education">
      <h2 data-aos="fade-up-left">EDUCATION</h2>
      <StyledSchool>
        <h3>Software Engineering Certification</h3>
        <p className='school-title'>Turing School of Software and Design</p>
        <p>At Turing I invested over 1600 hours across 8 months to become a job-ready software developer. In the Front-End Engineering program I built skills in HTML5, CSS, Design Fundamentals, core JavaScript, as well as React (class based and using Hooks) and Redux. In the final quarter, I built full stack applications utilizing Node, PostgreSQL, and GraphQL.</p>
      </StyledSchool>
      <StyledSchool>
        <h3>Bachelor's in Geography / GIS</h3>
        <p className='school-title'>Western Washington University</p>
      </StyledSchool>
    </StyledEducation>
  );
};

const StyledEducation = styled.section`
  padding: 70px;

  h2 {
    font-size: 1.8em;
    margin-bottom: 70px;
  }
`;

const StyledSchool = styled.article`
  margin-bottom: 50px;

  h3 {
    font-size: 1.3em;
  }

  p {
    font-size: 1.2em;
  }

  .school-title {
    font-style: italic;
  }
`;

export default Education;