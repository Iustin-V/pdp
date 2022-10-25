import React from "react";

import { StyledImageNew, StyledToTopButton } from "./Styles";
import arrow from "./images/arrow.webp";

interface ToTopButtonInterface {
  topRef: React.RefObject<HTMLDivElement>;
  isTopButton: boolean;
}

export const ToTopButton = (props: ToTopButtonInterface) => {
  return (
    <>
      <StyledToTopButton
        bottom={props.isTopButton ? "40px" : "-50px"}
        onClick={() =>
          props.topRef?.current?.scrollIntoView?.({ behavior: "smooth" })
        }
      >
        <StyledImageNew src={arrow} alt="Arrow" />
      </StyledToTopButton>
    </>
  );
};
