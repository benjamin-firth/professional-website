import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronsDown } from '@styled-icons/boxicons-solid/ChevronsDown';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Paperclip } from '@styled-icons/foundation/Paperclip';


import backgroundImage from '../../ui/images/mountain-background.jpg';
import resume from '../../ui/images/BenjaminFirth_DevResume.pdf';


const Intro = () => {
  const [hasScrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(true);
    };

    window.addEventListener("scroll", handleScroll);

    const cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
    };

    return cleanup;
  });

  return (
    <StyledIntro>
      <h1>Welcome, my name is Benjamin Firth.</h1>
      <StyledLowerContent>
        <h2>I am a software engineer.</h2>
        <p>I'm a motivated software engineer with solid knowledge and experience in Javascript, React, HTML/CSS/Sass, Node.js, geospatial and temporal data analysis, TDD, and UX/UI styling. Outside of work I'm an avid rock climber, and can frequently be found wandering around outside in search of a new climbing area. If you'd like to talk to me about web development, land conservation, or climbing don't hesitate to reach out! </p>
        <div>
          <a 
            target="_blank"
            aria-label="Link to my email" 
            rel="noopener noreferrer"
            href="mailto:firth.benjamin.a@gmail.com">
            <EmailOutline 
              size="50" 
              title="Email"/>
          </a>
          <a 
            target="_blank"
            aria-label="Link to my LinkedIn profile" 
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ben-firth">
            <LinkedinSquare 
              size="50" 
              title="LinkedIn"/>
          </a>
          <a 
            target="_blank"
            aria-label="Link to my Github" 
            rel="noopener noreferrer"
            href="https://github.com/benjamin-firth">
            <Github 
              size="50" 
              title="Github"/>
          </a>
          <a 
            target="_blank"
            aria-label="Link to download my resume" 
            rel="noopener noreferrer"
            href={resume} 
            download>
            <Paperclip 
              size="50" 
              title="Resume"/>
          </a>
        </div>
      </StyledLowerContent>
      {!hasScrolled ? <StyledScroll /> : <StyledSpaceHolder />}
    </StyledIntro>
  );
};

const StyledLowerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 35%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: 65%;
  }
`;

const StyledSpaceHolder = styled(ChevronsDown)`
  height: 55px;
  visibility: hidden;
`;

const StyledScroll = styled(ChevronsDown)`
  animation: bounce 1s ease infinite;
  color: #074A9B;
  height: 55px;
  
  @keyframes bounce {
    50% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 1200px) {
    @keyframes bounce {
      50% {
        transform: translateY(-30%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const StyledIntro = styled.section`
  align-items: center;
  background: fixed;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 25%), url(${backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  padding: 10px 75px 10px 75px;

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
    text-align: center;
    margin-top: -10px;
  }

  p {
    font-size: 1.4em;
  }

  @media (max-width: 1200px) {
    background-repeat: no-repeat;
    height: 100vh;
    padding: 10px 55px 10px 55px;

    h1 {
      font-size: 1.8em;
    }
  
    h2 {
      font-size: 1.5em;
      text-align: center;
    }
  
    p {
      font-size: 1.4em;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 700px) {
    background-repeat: no-repeat;
    height: 100vh;
    padding: 10px 55px 10px 55px;

    h1 {
      font-size: 1.45em;
    }
  
    h2 {
      font-size: 1.3em;
      text-align: center;
      margin-top: -10px;
    }
  
    p {
      font-size: 1em;
    }
  }

  @media (max-width: 330px) {
    h1 {
      font-size: 1.1em;
    }
  
    h2 {
      font-size: 1em;
      text-align: center;
      margin-top: -10px;
    }

    p {
      font-size: 0.8em;
    }
  }
`;

export default Intro;