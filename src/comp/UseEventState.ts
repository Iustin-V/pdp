import { dispatchEventCardData, EventCardData } from "../App";
import React from "react";

export const useGlobalState = () => [
  React.useContext(EventCardData),
  React.useContext(dispatchEventCardData),
];
