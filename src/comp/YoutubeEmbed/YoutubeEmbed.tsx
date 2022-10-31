import React from "react";

import styled from "styled-components";

const StyledIframeContainer = styled.div`
  height: 500px;
  max-width: 1100px;
  margin: 40px auto;
`;

export const YoutubeEmbed = (props: any) => (
  <StyledIframeContainer>
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
