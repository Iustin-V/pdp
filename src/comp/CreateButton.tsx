import React from "react";

import { StyledEditButton } from "./Styles";

interface CreateButtonProps {
  createFunction: any;
  sectionText: any;
  createType: string;
}

export const CreateButton = (props: CreateButtonProps) => {
  if (localStorage.user.includes("\"633fc7c57debf1918eb52792\"")) {
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
