import React from "react";

import { AboutSection } from "./AboutStoryTeacherSection/AboutSection";
import { MainPage } from "./MainPage/MainPage";
import { Partners } from "./Partners/Partners";
import { PrincipalesLinks } from "./PrincipalesLinksSection/PrincipalesLinks";
import { ReviewSection } from "./ReviewSection/ReviewSection";
import {LogoutImage, StyledHomeWrapper, StyledPageWrapper} from "./Styles";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import { WeekStorySection } from "./WeekStorySection/WeekStorySection";
import logout from "./images/logout-icon.webp";

export const Home = () => {
    const [logoutButton,setLogoutButton]=React.useState(false)
    React.useEffect(()=>{
        const user=localStorage.getItem("user")
        if(user && user.includes("\"633fc7c57debf1918eb52792\"")){
            setLogoutButton(true)
        }
        }
        ,[localStorage.getItem("user")])
  return (
    <StyledHomeWrapper>
        {logoutButton && (
            <LogoutImage
                onClick={() => {
                    localStorage.setItem("user", "");
                    setLogoutButton(false)
                    window.location.reload();
                }}
            >
                <p>Logout</p>
                <img src={logout} alt={"logout"} height={30} />
            </LogoutImage>
        )}
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <PrincipalesLinks />
      <AboutSection />
      <TimeLineSection />
      <WeekStorySection />
      <ReviewSection />
      <Partners />
    </StyledHomeWrapper>
  );
};
