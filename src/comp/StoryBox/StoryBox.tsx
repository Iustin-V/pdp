import React, { useState } from "react";

import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { LogoutImage } from "../Styles";
import logout from "../images/logout-icon.webp";
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
  const [logoutButton, setLogoutButton] = React.useState(false);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user.includes('"633fc7c57debf1918eb52792"')) {
      setLogoutButton(true);
    }
  }, [localStorage.getItem("user")]);

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "StoryBox");
    setContentTexts(textData);
  }, [contextLocal]);

  return (
    <StoryBoxPageContainer>
      {logoutButton && (
        <LogoutImage
          onClick={() => {
            localStorage.setItem("user", "");
            setLogoutButton(false);
            window.location.reload();
          }}
        >
          <p>Logout</p>
          <img src={logout} alt={"logout"} height={30} />
        </LogoutImage>
      )}
      <WhatHowAndWhySection
        subTitle={contentText?.subTitle}
        title={contentText?.title}
        sectionContent={contentText.content?.[0].sectionContent}
      />
      <StoryBoxSection boxSection={contentText.content?.[0].boxSection} />
    </StoryBoxPageContainer>
  );
};
