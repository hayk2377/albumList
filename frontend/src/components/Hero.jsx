import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("/piano.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh; /* Adjust height as needed */
  margin: 0 auto;
  text-align: center;
  color: #fff; /* Adjust color based on image contrast */
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 22px 5px 100px 0;
`;

const HeroSubheading = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Organize, Discover, Share</HeroTitle>
      <HeroSubheading>
        Rediscover the joy of music with Album Hits.
      </HeroSubheading>
    </HeroContainer>
  );
};

export default Hero;
