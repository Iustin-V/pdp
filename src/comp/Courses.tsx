import {
  ParagraphItalicStyled,
  SectionContainer,
  TitleSection,
  WrapperCard,
} from "./Styles";
import { colors } from "../generalStyle";
import { MultiActionAreaCard } from "../Card/MultiActionAreaCard";
import firstCard from "../Card/Assets/first_image.jpg";
import styled from "styled-components";

export const StyledPageCourses = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Courses = () => {
  const courses = [
    {
      title: "Cum să-mi transform visul în realitate?",
      time: "20:00",
      price: "500 Ron",
      lesson: 4,
      image: firstCard,
    },
    {
      title: "Cum să-mi transform visul în realitate?",
      time: "20:00",
      price: "500 Ron",
      lesson: 4,
      image: firstCard,
    },
    {
      title: "Cum să-mi transform visul în realitate?",
      time: "20:00",
      price: "500 Ron",
      lesson: 4,
      image: firstCard,
    },
    {
      title: "Cum să-mi transform visul în realitate?",
      time: "20:00",
      price: "500 Ron",
      lesson: 4,
      image: firstCard,
    },
  ];

  const showCoursesCard = courses.map((item) => {
    return (
      <MultiActionAreaCard
        title={item.title}
        time={item.time}
        price={item.price}
        lessons={item.lesson}
        image={item.image}
      />
    );
  });

  return (
    <StyledPageCourses>
      <SectionContainer>
        <TitleSection color={colors.primary.base}>
          Cursuri de dezvoltare personala <br /> -pentru copii si adolescenti-{" "}
        </TitleSection>
        <ParagraphItalicStyled>
          Programele pentru copii și adolescenți sunt rezultatul a 25 de ani
          plini de activități realizate cu copiii și adolescenții din România și
          Marea Britanie. Am adunat experiențe minunate din mii de ore petrecute
          în compania copiilor care aveau nevoi și valori total diferite
          provenite din experiențe de viață diverse, de la copiii a căror
          nefericire era aceea că părinții nu le cumpărau ultimul joc video,
          până la aceia care creșteau în alte familii decât cele naturale și
          fericirea lor însemna a primi ghetuțe noi de Crăciun. În sipetul meu
          sunt atât de multe povești, încât copiii vor găsi tot ce au nevoie în
          orice moment al creșterii lor!
        </ParagraphItalicStyled>
        <WrapperCard>{showCoursesCard}</WrapperCard>
      </SectionContainer>
    </StyledPageCourses>
  );
};
