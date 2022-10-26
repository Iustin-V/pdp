import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ReviewSection.styles.css";
import { Navigation } from "swiper";
import { colors } from "../../generalStyle";
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
import { SectionContainer } from "../Styles";
import reviewIcon from "../images/icons8-chat-100.webp";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";
import { CreateButton } from "../CreateButton";

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
  console.log("contentText", contentText);
  const ReviewsSection = contentText.content?.map((review, index) => {
    return (
      <SwiperSlide key={index}>
        <InsideSlideWrapper>
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
        <StyledTitleContainer>
          <StyledReviewIcon
            src={reviewIcon}
            alt="reviewIcon"
          ></StyledReviewIcon>
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
      <CreateButton
        createFunction={contextLocal?.editFunction}
        sectionText={contentText}
        createType="createReview"
      />
      <EditButton
        editFunction={contextLocal?.editFunction}
        sectionText={contentText}
      />
    </StyledReviewSection>
  );
};
