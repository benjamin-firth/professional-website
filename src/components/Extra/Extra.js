import React from 'react';
import styled from 'styled-components';

const Extra = () => {
  return (
    <StyledExtra>
      <h2>FUN EXTRA INFORMATION!</h2>
      <ul>
        <li>I'm an avid rock climber. You can follow my adventures <a 
          target="_blank"
          alt="Link to my climbing adventures"
          rel="noopener noreferrer"  
          href="https://www.instagram.com/truckbedboulderers/?hl=en"><strong>HERE!
        </strong></a></li>
        <li>If you like listening to me ramble about software, you can check out my blog posts <a 
          target="_blank"
          alt="Link to my blog"
          rel="noopener noreferrer"  
          href="https://medium.com/@bfirth93"><strong>here.
        </strong></a></li>
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
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
    transition: all .2s ease-in-out;
  }

  a:hover {
    font-size: 1.4em;
  }

  @media (max-width: 1200px) {
    padding: 40px;

    h2 {
      text-align: center;
    }
  }
`;

export default Extra;