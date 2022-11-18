import React from "react";

import styled from "styled-components";

const StyledIframeContainer = styled.div<{ animated?: boolean }>`
  height: 500px;
  max-width: 1100px;
  margin: 40px auto;

  ${(props) =>
    props.animated &&
    `transform: translateX(70%);
  opacity: 0;
  animation: slide-in-anim-right-text 0.6s ease-out forwards;
  animation-delay: 0.3s;
  width: 100%;

  @keyframes slide-in-anim-right-text {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
}
`};
`;
interface YoutubeEmbedInterface {
  embedId: string;
  animated?: boolean;
}

export const YoutubeEmbed = (props: YoutubeEmbedInterface) => (
  <StyledIframeContainer animated={props.animated}>
    <iframe
      height="100%"
      width="100%"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledIframeContainer>
);
