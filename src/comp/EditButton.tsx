import React from "react";

import { StyledEditButton } from "./Styles";

interface EditButtonProps {
  editFunction: any;
  sectionText: any;
  object?: object;
}
export const EditButton = (props: EditButtonProps) => {
  if (
    localStorage.user.includes('"633fc7c57debf1918eb52792"') &&
    window.screen.width >= 1200
  ) {
    return (
      <StyledEditButton
        onClick={() =>
          props.editFunction(props.sectionText, "edit", props.object)
        }
      >
        EDIT "{props.sectionText.title}"
      </StyledEditButton>
    );
  }
  return <></>;
};
