import React from "react";
import styled from "styled-components";


import {  Container } from "../global";

const Header = () => {

  return (
    <Section id="home">
       <Image src="/images/img-home.jpg" /> 
      {/* <Image src="/images/img-1.jpg"/> */}
      <Container>
        <Flex>
          <TextGroup>
            <Title>Code Chef Chapter</Title>
            <SubTitle>Vellore Institute of Technology, Bhopal</SubTitle>
            <Info>Coding Builds, Logal minds</Info>
          </TextGroup>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

const Section = styled.section`
  margin: 0rem 0rem 5rem 0rem;
`;

// const Video = styled.video`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   z-index: -1;
// `;

const Image = styled.img`
  object-fit: cover;
  filter: blur(10px);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

const TextGroup = styled.div`
  margin: 5rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 1rem;
  color:white;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  color:white;
  font-weight: bolder;
  margin-bottom: 3rem;
`;

const Info = styled.div`
  font-size: 25px;
  color:white;
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LotteWrapper = styled.div`
  width: 450px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    width: 360px;
  }
`;
