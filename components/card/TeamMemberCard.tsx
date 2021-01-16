import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";
const MemberCard = ({ member, handleModalToggle = null }) => {
  return (
    <Card>
     <ImageWrapper>
          <Image src={member.profile} />
        </ImageWrapper>
        <Name>{member.name}</Name>
        <Title>{member.title}</Title>
       
        <Flex>
          {member.social.medium && (
            <a href={member.social.medium} target="_blank">
              <Icon>
                <SiMedium color="#000000" />
              </Icon>
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} target="_blank">
              <Icon>
                <SiGithub color="#333" />
              </Icon>
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank">
              <Icon>
                <SiLinkedin color="#0077b5" />
              </Icon>
            </a>
          )}
        </Flex>
    </Card>
  );
};

const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100px;
    height: 100px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: ${(p) => p.theme.color.subText};
  font-size: 20px;
  text-align: center;
`;


const Flex = styled.div`
  display: flex;
 
  justify-content: space-around;
  margin-top: 3rem;
`;

const Icon = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 50%;
  font-size: 25px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    font-size: 20px;
    margin: 0.6rem;
  }
`;

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

// const Image = styled.img`
//   width: 90px;
//   height: 90px;
//   border-radius: 50%;
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 2em;
// `;

// const Name = styled.div`
//   font-weight: 700;
//   font-size: 18px;
//   text-align: center;
//   margin-bottom: 1rem;
// `;

// const Title = styled.div`
//   color: ${(p) => p.theme.color.subText};
//   font-size: 18px;
//   text-align: center;
// `;

export default MemberCard;
