import { StoryBoxPageContainer } from "./StoryBoxStyle";
import { WhatHowAndWhySection } from "./whatHowAndWhy";
import { StoryBoxSection } from "./StoryBoxSection";
export const StoryBoxPage = () => {
  return (
    <StoryBoxPageContainer>
      <WhatHowAndWhySection />
      <StoryBoxSection />
    </StoryBoxPageContainer>
  );
};
