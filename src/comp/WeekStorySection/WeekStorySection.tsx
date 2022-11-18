import React, { useState } from "react";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { TextAlignment } from "../../utils/TextAlignment";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import {
  BackgroundWrapper,
  LogoutImage,
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
} from "../Styles";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import Background from "../images/WeekStorySection.webp";
import logout from "../images/logout-icon.webp";

interface weekStorySectionProps {
  separatePage?: boolean;
}

export const WeekStorySection = (props: weekStorySectionProps) => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState({
    title: "",
    content: [],
    video: "",
  });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "WeekStorySection");
    setContentTexts(textData);
  }, [contextLocal]);

  const ParagraphAboutSection = contentText.content?.map((item, key) => {
    return (
      <ParagraphItalicStyled key={key} animated={true}>
        {TextAlignment(item)}
      </ParagraphItalicStyled>
    );
  });
  const [logoutButton, setLogoutButton] = React.useState(false);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user.includes('"633fc7c57debf1918eb52792"')) {
      setLogoutButton(true);
    }
  }, [localStorage.getItem("user")]);
  return (
    <BackgroundWrapper imgUrl={Background} separatePage={props.separatePage}>
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
      <SectionContainer>
        <TitleSection color={colors.primary.base} animated={props.separatePage}>
          {contentText.title}
        </TitleSection>
        <YoutubeEmbed embedId={contentText.video} animated={true} />
        {ParagraphAboutSection}
      </SectionContainer>
      <EditButton
        editFunction={contextLocal?.editFunction}
        sectionText={contentText}
      />
    </BackgroundWrapper>
  );
};
