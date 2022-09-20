import {Border, ParagraphItalicStyled, SectionContainer, TitleSection, WrapperCard,} from "./Styles";
import {colors} from "../generalStyle";
import {MultiActionAreaCard} from "../Card/MultiActionAreaCard";
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
    const coursesChildren = [
        {
            title: "Cum să-mi transform visul în realitate?",
            time: "20:00",
            price: "500 Ron",
            image: firstCard,
        },
        {
            title: "Cum să ating steaua la care visez",
            time: "20:00",
            price: "500 Ron",
            image: firstCard,
        },
        {
            title: "Cine mă privește din oglindă?",
            time: "20:00",
            price: "500 Ron",
            image: firstCard,
        },

    ];
    const coursesTeachers = [
        {
            title: "Cheia fericirii este la tine în buzunar!",
            time: "20:00",
            price: "800 Ron",
            image: firstCard,
        },
        {
            title: "Ieșirea din matrice",
            time: "20:00",
            price: "800 Ron",
            image: firstCard,
        },
        {
            title: "Dicționarul limbii pe care o vorbim în familie",
            time: "20:00",
            price: "800 Ron",
            image: firstCard,
        },
    ];

    const showCoursesCard = coursesChildren.map((item) => {
        return (
            <MultiActionAreaCard
                title={item.title}
                time={item.time}
                price={item.price}
                image={item.image}
            />
        );
    });

    return (
        <>
            <StyledPageCourses>
                <SectionContainer>
                    <TitleSection color={colors.primary.base}>
                        Cursuri de dezvoltare personală <br/> -pentru părinți și copii-{" "}
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
            <Border/>
            <StyledPageCourses>
                <SectionContainer>
                    <TitleSection color={colors.primary.base}>
                        Consiliere <br/> -pentru părinți și profesori-{" "}
                    </TitleSection>
                    <ParagraphItalicStyled>
                        La finalul zilei, domnișoara cu gene aplicate care are ultimul telefon de fițe are nevoie de
                        același lucru ca băiețelul care merge la culcare flămând: iubirea părinților și acceptarea
                        adulților semnificativi din jurul lor. Cum facem noi, ca părinți și educatori, să le transmitem
                        acest sentiment astfel încât să ajungă la ei? Acestea sunt doar câteva probleme pe care le vom
                        discuta la cursurile Profei de povești. Vă invit să alegeți ce vi se potrivește cel mai bine,
                        iar daca nu găsiți ceea ce căutați, doar spuneți, sunt aici tocmai pentru a personaliza împreună
                        cursurile mele pentru nevoile dumneavoastră!
                    </ParagraphItalicStyled>
                    <WrapperCard>{showCoursesCard}</WrapperCard>
                </SectionContainer>
            </StyledPageCourses>
        </>
    );
};
