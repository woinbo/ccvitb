import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <TextGroup>
          <Title>About</Title>
          <Info>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <LeftAlign>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <br />
              <br />
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </LeftAlign>
          </Info>
        </TextGroup>
      </Container>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.color.background};
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
  padding: 10rem 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
  
`;

const Info = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
`;

const LeftAlign = styled.div`
  text-align: left;
  padding: 2rem 0rem;
`;
