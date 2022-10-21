import { StyledPageWrapper, TitleSection } from "./comp/Styles";
import { colors } from "./generalStyle";
import unknownRouteImage from "./comp/images/unknownPage.jpg";
import { unknownPageText } from "./Translates/Translates";
import { ContactFormBackground } from "./comp/Contact/Contact-Style";

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
