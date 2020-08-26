import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledBar>
      <StyledBarLink>
        <h3>Nav Element</h3>
      </StyledBarLink>
      <StyledBarLink>
        <h3>Nav Element</h3>
      </StyledBarLink>
      <StyledBarLink>
        <h3>Nav Element</h3>
      </StyledBarLink>
      <StyledBarLink>
        <h3>Nav Element</h3>
      </StyledBarLink>
      <StyledBarLink>
        <h3>Nav Element</h3>
      </StyledBarLink>
    </StyledBar>
  );
};

const StyledBar = styled.section`
  background-color: grey;
  display: flex;
  justify-content: space-around;
`;

const StyledBarLink = styled.section`
  background-color: grey;
  border: 1px solid black;
  height: 40px;
  padding: 10px;
`;

export default Navbar;