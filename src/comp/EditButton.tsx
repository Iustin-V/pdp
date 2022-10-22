import React from "react";
import { StyledEditButton } from "./Styles";

interface EditButtonProps {
    editFunction: any;
    sectionText: any;
}
export const EditButton = (props: EditButtonProps) => {
    if (localStorage.user !== "null") {
        return (
            <StyledEditButton onClick={() => props.editFunction(props.sectionText)}>
                EDIT "{props.sectionText.title}"
            </StyledEditButton>
        );
    }
    return <></>;

};

