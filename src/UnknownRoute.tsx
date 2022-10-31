import { unknownPageText } from "./Translates/Translates";
import { ContactFormBackground } from "./comp/Contact/Contact-Style";
import { StyledPageWrapper, TitleSection } from "./comp/Styles";
import unknownRouteImage from "./comp/images/unknownPage.webp";
import { colors } from "./generalStyle";

export const UnknownRoute = () => {
  return (
    <ContactFormBackground backgroundImage={unknownRouteImage}>
      <StyledPageWrapper>
        <TitleSection color={colors.primary.base}>
          {
            //@ts-ignore
            unknownPageText[localStorage.locale || "ro"]
          }
        </TitleSection>
      </StyledPageWrapper>
    </ContactFormBackground>
  );
};
