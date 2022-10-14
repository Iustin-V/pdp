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
import reviewIcon from "../images/icons8-chat-100.png";
import { PDPContext } from "../../App";
import { getData } from "../../utils/getData";
import { EditButton } from "../EditButton";

export const ReviewSection = () => {
  const contextLocal: {
    editFunction: (data: any) => boolean;
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

  const Reviewers = [
    {
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      name: "John Doe",
      age: "27 ani",
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "John Doe",
      age: "27 ani",
    },
    {
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      name: "John Doe",
      age: "27 ani",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      name: "John Doe",
      age: "27 ani",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      name: "John Doe",
      age: "27 ani",
    },
  ];
  const ReviewsSection = contentText?.content?.map((review, index) => {
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
    <>
      <StyledReviewSection>
        <SectionContainer>
          <StyledTitleContainer>
            <StyledReviewIcon
              src={reviewIcon}
              alt="reviewIcon"
            ></StyledReviewIcon>
            <TitleReviewSection color={colors.primary.base}>
              {contentText?.title}
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
      <EditButton
        editFunction={contextLocal?.editFunction}
        sectionText={contentText}
      />
    </>
  );
};
