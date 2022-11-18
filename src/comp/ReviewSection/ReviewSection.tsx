import React, { useState } from "react";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { PDPContext } from "../../App";
import { colors } from "../../generalStyle";
import { getData } from "../../utils/getData";
import { CreateButton } from "../CreateButton";
import { EditButton } from "../EditButton";
import { AdminButtons, SectionContainer, Tooltip } from "../Styles";
import reviewIcon from "../images/icons8-chat-100.webp";
import {
  InfoReviewer,
  InsideSlideWrapper,
  QuoteReviewSection,
  StyledReviewIcon,
  StyledReviewSection,
  StyledRoundedImage,
  StyledTitleContainer,
  TitleReviewSection,
} from "./ReviewSection.style.style";
import "./ReviewSection.styles.css";

export const ReviewSection = () => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);
  const [contentText, setContentTexts] = useState({
    title: "",
    content: [{ text: "", name: "", age: "", avatar: "" }],
    video: "",
  });

  React.useEffect(() => {
    const textData = getData(contextLocal?.allCategories, "ReviewSection");
    setContentTexts(textData);
  }, [contextLocal]);

  const ReviewsSection = contentText.content?.map((review, index) => {
    return (
      <SwiperSlide key={index}>
        <InsideSlideWrapper>
          {localStorage.user.includes('"633fc7c57debf1918eb52792"') && (
            <button
              className={"delete-button"}
              onClick={() => {
                contextLocal?.editFunction(
                  { data: contentText, index: index },
                  "delete"
                );
              }}
            >
              <Tooltip>Delete this review</Tooltip>X
            </button>
          )}
          <StyledRoundedImage src={review.avatar} alt="Avatar" />
          <QuoteReviewSection>{review.text}</QuoteReviewSection>
          <InfoReviewer>
            {review.name} - {review.age}
          </InfoReviewer>
        </InsideSlideWrapper>
      </SwiperSlide>
    );
  });

  return (
    <StyledReviewSection>
      <SectionContainer>
        {" "}
        <AdminButtons>
          {" "}
          <CreateButton
            createFunction={contextLocal?.editFunction}
            sectionText={contentText}
            createType="createReview"
          />
          <EditButton
            editFunction={contextLocal?.editFunction}
            sectionText={contentText}
          />
        </AdminButtons>
        <StyledTitleContainer>
          <StyledReviewIcon src={reviewIcon} alt="reviewIcon" />
          <TitleReviewSection color={colors.primary.base}>
            {contentText.title}
          </TitleReviewSection>
        </StyledTitleContainer>
        <Swiper
          speed={1000}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {ReviewsSection}
        </Swiper>
      </SectionContainer>
    </StyledReviewSection>
  );
};
