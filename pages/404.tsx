import React from "react";
import styled from "styled-components";

function NotFound() {
  return <Video src="/videos/404.mp4" autoPlay loop />;
}

export default NotFound;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
