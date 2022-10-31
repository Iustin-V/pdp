import React from "react";

import { StyledEditButton } from "./Styles";

interface CreateButtonProps {
  createFunction: any;
  sectionText: any;
  createType: string;
}

export const CreateButton = (props: CreateButtonProps) => {
  if (localStorage.user !== "null") {
    return (
      <StyledEditButton
        onClick={() =>
          props.createFunction(props.sectionText, props.createType)
        }
      >
        Create
      </StyledEditButton>
    );
  }
  return <></>;
};
