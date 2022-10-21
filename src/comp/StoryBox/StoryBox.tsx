import {StoryBoxPageContainer} from "./StoryBoxStyle";
import {WhatHowAndWhySection} from "./whatHowAndWhy";
import {StoryBoxSection} from "./StoryBoxSection";
import React, {useState} from "react";
import {PDPContext} from "../../App";
import {getData} from "../../utils/getData";

export const StoryBoxPage = () => {
    const contextLocal: object = React.useContext(PDPContext);
    const [contentText, setContentTexts] = useState({
        title: "",
        subTitle: '',
        content: [{boxSection: '', sectionContent: ['']}],
    });

    React.useEffect(() => {
        const textData = getData(contextLocal, "StoryBox");
        setContentTexts(textData);
    }, [contextLocal]);

    return (
        <StoryBoxPageContainer>

            <WhatHowAndWhySection subTitle={contentText?.subTitle} title={contentText?.title}
                                  sectionContent={contentText.content?.[0].sectionContent }/>
            <StoryBoxSection boxSection={contentText.content?.[0].boxSection}/>
        </StoryBoxPageContainer>
    );
};
