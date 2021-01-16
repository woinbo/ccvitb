import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

// Components
import { Container } from "../components/global";
import MemberCard from "../components/card/TeamMemberCard";
import MemberModal from "../components/modal/TeamMemberModal";

type Memeber = {
  title?: string;
  name?: string;
  link?: string;
  profile?: string;
};

type TeamData = {
  default: {
    team: Memeber[];
  };
};

const Team = () => {
  const [team, setTeam] = useState<Memeber[]>([]);

  const [modalMember, setModalMember] = useState<Memeber | null>(null);

  import("../data/team.json").then((data: TeamData) => {
    setTeam(data.default.team);
  });



  return (
    <ContainerStyled>
      <Head>
        <title>DSC VIT Bhopal - Team</title>
      </Head>
      {modalMember && (
        <MemberModal
          member={modalMember}
          
        />
      )}
      {team.map((member, idx) => (
        <MemberCard
          key={idx}
          member={member}
          
        />
      ))}
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem 0rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    padding: 2.5rem 3rem;
  }
`;

export default Team;
