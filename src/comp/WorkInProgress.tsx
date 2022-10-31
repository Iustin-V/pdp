import { colors } from "../generalStyle";
import { StyledImage } from "./Navbar-Style";
import { StyledPageWrapper, TitleSection } from "./Styles";
import construction from "./images/construction.png";

export const WorkInProgress = () => {
  return (
    <StyledPageWrapper>
      <TitleSection color={colors.primary.base}>Work In Progress</TitleSection>
      <StyledImage
        height="300px"
        construction={true}
        src={construction}
        alt="construction"
      />
    </StyledPageWrapper>
  );
};
