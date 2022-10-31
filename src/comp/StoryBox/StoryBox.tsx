import React, { useState } from "react";

import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { StoryBoxSection } from "./StoryBoxSection";
import { StoryBoxPageContainer } from "./StoryBoxStyle";
import { WhatHowAndWhySection } from "./whatHowAndWhy";

export const StoryBoxPage = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState({
    title: "",
    subTitle: "",
    content: [{ boxSection: "", sectionContent: [""] }],
  });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "StoryBox");
    setContentTexts(textData);
  }, [contextLocal]);

  return (
    <StoryBoxPageContainer>
      <WhatHowAndWhySection
        subTitle={contentText?.subTitle}
        title={contentText?.title}
        sectionContent={contentText.content?.[0].sectionContent}
      />
      <StoryBoxSection boxSection={contentText.content?.[0].boxSection} />
    </StoryBoxPageContainer>
  );
};
