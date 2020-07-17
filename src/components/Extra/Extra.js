import React from 'react';
import styled from 'styled-components';

const Extra = () => {
  return (
    <StyledExtra>
      <h2>FUN EXTRA INFORMATION!</h2>
      <ul>
        <li>I'm an avid rock climber. You can follow my adventures <strong>HERE!</strong></li>
        <li>If you like listening to me ramble about software, you can check out my blog posts <strong>here.</strong></li>
      </ul>
    </StyledExtra>
  );
};

const StyledExtra = styled.section`
  background-color: #F9A986;
  padding: 70px;

  h2 {
    font-size: 1.8em;
    margin-bottom: 50px;
  }

  li {
    font-size: 1.3em;
    margin-bottom: 20px;
  }
`;

export default Extra;