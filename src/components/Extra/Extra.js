import React from 'react';
import styled from 'styled-components';
import { useInstagramFeed } from 'use-instagram-feed';

const Extra = () => {
  let photos = useInstagramFeed({
    userId: "5647382267",
    thumbnailWidth: 640,
    photoCount: 4,
  });

  return (
    <StyledExtra id="extra">
      <h2 data-aos="fade-up-right">FUN EXTRA INFORMATION!</h2>
      <ul>
        <li>If you like listening to me ramble about software, you can check out my blog posts <a 
          target="_blank"
          aria-label="Link to my blog"
          rel="noopener noreferrer"  
          href="https://medium.com/@bfirth93"><strong>here.
        </strong></a></li>
        <li>I'm an avid rock climber, mountain biker, and outdoor enthusiast. You can follow my adventures on Instagram <a 
          target="_blank"
          aria-label="Link to my climbing adventures"
          rel="noopener noreferrer"  
          href="https://www.instagram.com/truckbedboulderers/?hl=en"><strong>HERE!
        </strong></a></li>
        <StyleImageContainer>
          {photos &&
            photos.map(({ id, caption, src, width, height, url }) => (
              <a 
                key={id} 
                href={url} 
                className="insta-image" 
                rel="noopener noreferrer" 
                target="_blank">
                <img src={src} alt={caption} width='200px' />
              </a>
            ))
          }
        </StyleImageContainer>
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

const StyleImageContainer = styled.div`
  display: flex;
  height: 200px;
  margin-top: 40px;

  .insta-image {
    margin-right: 20px;

    img {
      border: 3px solid #f3bda5;
      border-radius: 5px;
      transition: all .2s ease-in-out;
    }
  }

  .insta-image:hover {
    img {
      width: 210px;
    }
  }
`;

export default Extra;