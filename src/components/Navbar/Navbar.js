import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <StyledBar>
      <StyledBarLink>
        <AnchorLink 
          class="link" 
          href="#projects">
          <h3>Projects</h3>
        </AnchorLink>
      </StyledBarLink>
      <StyledBarLink>
        <AnchorLink 
          class="link" 
          offset="100"
          href="#skills">
          <h3>Skills</h3>
        </AnchorLink>
      </StyledBarLink>
      <StyledBarLink>
        <AnchorLink 
          class="link" 
          href="#experience">
          <h3>Experience</h3>
        </AnchorLink>
      </StyledBarLink>
      <StyledBarLink>
        <AnchorLink 
          class="link" 
          href="#education">
          <h3>Education</h3>
        </AnchorLink>
      </StyledBarLink>
      <StyledBarLink>
        <AnchorLink 
          class="link" 
          href="#extra">
          <h3>More</h3>
        </AnchorLink>
      </StyledBarLink>
    </StyledBar>
  );
};

const StyledBar = styled.section`
  background-color: #1d3d63;
  display: flex;
  justify-content: flex-end;
  padding: 2px 40px 2px 2px;
  
  .link {
    color: #DEAD7D;
    text-decoration: none;
  }

  @media (max-width: 470px) {
    flex-flow: column;
  }
`;

const StyledBarLink = styled.section`
  align-items: center;
  color: #DEAD7D;
  cursor: pointer;
  display: flex;
  height: 14px;
  justify-content: center;
  margin: 5px 15px;
  padding: 5px;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Navbar;