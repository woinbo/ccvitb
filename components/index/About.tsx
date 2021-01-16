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
            Developer Student Clubs is an initiative of Google Developers.
            <LeftAlign>
            Our primary intention is to promote all-round development of students through interactive sessions, events, workshops and projects that help them perceive real-world probems. We strive hard to educate and guide our members by equipping them with technical and management skills, thereby enabling them to make significant contributions towards the community.
              <br />
              <br />
              Our primary intention is to promote all-round development of students through interactive sessions, events, workshops and projects that help them perceive real-world probems. We strive hard to educate and guide our members by equipping them with technical and management skills, thereby enabling them to make significant contributions towards the community.
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
