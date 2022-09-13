import React from "react";
// @ts-ignore
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {colors} from "../../generalStyle";
import {BackgroundWrapper, ParagraphItalicStyled, TitleSection} from "../Styles";
import Background from '../images/TimeLine.Background.png'


export const TimeLineSection = () => {
    const timelineElements = ['Cercetătorii au descoperit că atunci când ascultăm povești, la nivelul creierului sunt eliberate mai multe substanțe chimice asociate cu diverse stări emoționale. Astfel, poveștile dau sens și emoție existenței noastre, ne motivează și ne fac să reflectăm la tot ce se întâmplă în jur. De aceea poveștile schimbă comportamente fără să apelăm la sistemul de pedepse și recompense.', 'Avem destule ședințe, conferințe, teme pentru acasă și sarcini de lucru! Poveștile sunt distractive, educative, motivante și stimulează creativitatea, lucru care ne ajută în toate domeniile vieții. Poveștile ne oferă puncta de vedere diferite ale aceleiași realități și ne fac să găsim soluții ingenioase la probleme pe care le credeam, poate, de nerezolvat.', 'Acesta este un spațiu în care eu, Profa de povești, vă ofer siguranță, înțelegere, empatie, inspirație și sprijin. Este o zonă în care vă asigur creștere și conexiune.', 'Și răspunsuri la întrebări nerostite încă.']

    const timeLine = timelineElements.map((element, index) => {
        return (
            <VerticalTimelineElement
                className={`vertical-timeline-element--${index % 2 === 0 ? 'work' : 'education'}`}
                contentStyle={{
                    background: index % 2 === 0 ? '#f8ecd4' : '', color: colors.primary.base
                }}
                contentArrowStyle={{borderRight: `7px solid ${index % 2 === 0 ? '' : '#f8ecd4'} ${'#f8ecd4'}`}}
                iconStyle={{background: '#f8ecd4', color: '#fff'}}
            >
                <ParagraphItalicStyled>{element}</ParagraphItalicStyled>
            </VerticalTimelineElement>
        )

    })

    return (
            <BackgroundWrapper imgUrl={Background}>
                <TitleSection color={colors.primary.base}>Cum și de ce funtioneaza poveștile?</TitleSection>
                <VerticalTimeline lineColor={'#f8ecd4'}>
                    {timeLine}
                </VerticalTimeline>
            </BackgroundWrapper>
    );
};
