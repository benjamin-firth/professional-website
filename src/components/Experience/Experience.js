import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <StyledExperiences>
      <h2>EXPERIENCE</h2>
      <StyledExperience>
        <h3>Software Curriculum Developer / Kode With Klossy</h3>
        <p>Worked as part of a team to develop and update the curriculum for the Kode With Klossy camps. Kode With Klossy is a program for young women ages 13-18 to learn software engineering. I worked on updating the current curriculum for both the Javascript and Swift focused camps, as well as creating solutions for instructors to reference.</p>
      </StyledExperience>
      <StyledExperience>
        <h3>Lead E-Commerce and Direct Sales Rep / SCARPA North America</h3>
        <p>Managed and analyzed sales directed from E-Commerce, Pro Groups, and 3rd party purchase programs. Continuously updated and built out the direct to consumer website based on collected data and customer need. Guided website integration updates, AWS setup, and ADA compliance improvements.</p>
      </StyledExperience>
      <StyledExperience>
        <h3>GIS Data Analyst / Earth Treks Climbing</h3>
        <p>Created potential site locations and customer demographics using GIS and data analytics. This data was shown using dashboards, interactive maps, and table data.</p>
      </StyledExperience>
      <StyledExperience>
        <h3>GIS Intern / City of Centennial</h3>
        <p>Performed quantitative analysis of spatial data, automating processes, producing creative cartographic representations of data.</p>
      </StyledExperience>
      <StyledExperience>
        <h3>GIS Intern / Climb-On Maps</h3>
        <p>Performed complex remote sensing analysis using created mosaics of Landsat, Sentinel, and Lidar cloud data on a project based assignment. Worked with creating script to automate cartographic processes that slowed production time.</p>
      </StyledExperience>
      <StyledExperience>
        <h3>Volunteer GIS Analyst / The Access Fund</h3>
        <p>Developed GIS datasets, reports, and cartography for use in a BLM campaign and other government organizations including the Forest Service. This included the use of geoprocessing tools, modeling, ArcPy scripting, and advanced cartography through Adobe Suite software.</p>
      </StyledExperience>
    </StyledExperiences>
  );
};

const StyledExperiences = styled.section`
  background-color: #F9A986;
  padding: 70px;

  h2 {
    font-size: 1.8em;
    margin-bottom: 70px;
  }
`;

const StyledExperience = styled.article`
  margin-bottom: 50px;

  h3 {
    font-size: 1.3em;
    text-align: center;
  }

  p {
    font-size: 1.2em;
  }
`;

export default Experience;