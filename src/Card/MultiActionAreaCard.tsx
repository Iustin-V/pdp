import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

import { PDPContext } from "../App";
import { Tooltip } from "../comp/Styles";
import linkGenerate from "../generalFunction";
import { colors } from "../generalStyle";
import clock from "./Assets/clock-regular.svg";

const CardMediaStyled = styled.img`
  width: 100%;
  height: 167px;
    object-fit: cover;
  :hover {
    transform: scale(1.15, 1.15);
  }

  transition: transform 1s ease-in-out;
`;
const StyledCard = styled(Card)`
  position: relative;
  width: 250px;
  height: 360px;
  overflow: initial;

  :hover {
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
  }

  transition: box-shadow 1s ease-in-out;
`;
const StyledMediaWrapper = styled.div`
  height: 166px;
  overflow: hidden;
  width: 250px;
`;

interface DetailedAboutCard {
  item: object;
  image: any;
  price: string;
  time: string;
  title: string;
  index: number;
  content: object;
}

export const MultiActionAreaCard = (props: DetailedAboutCard) => {
  const contextLocal: {
    editFunction: (data: any, type: string) => boolean;
    allCategories: any[];
  } = React.useContext(PDPContext);

  const [buttonText, setButtonText] = useState("");

  React.useEffect(() => {
    switch (localStorage.locale) {
      case "ro":
        setButtonText("Detalii curs");
        break;
      case "en":
        setButtonText("Course details");
        break;
      case "fr":
        setButtonText("Détails du cours");
        break;
    }
  }, []);

  return (
    <StyledCard sx={{ maxWidth: 250 }}>
      {localStorage.user.includes('"633fc7c57debf1918eb52792"') && (
        <button
          className={"delete-button"}
          onClick={() => {
            contextLocal?.editFunction(
              { data: props.content, index: props.index },
              "delete"
            );
          }}
        >
          <Tooltip>Delete this course</Tooltip>X
        </button>
      )}
      <CardActionArea>
        <StyledMediaWrapper>
          <CardMediaStyled src={props.image} alt={props.title} />
        </StyledMediaWrapper>
        <CardContent>
          <Typography
            variant="h2"
            color="text.secondary"
            style={{
              color: `${colors.primary.base}`,
              margin: " 10px 0",
              minHeight: "64px",
              fontSize: "20px",
            }}
          >
            {props.title}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h2"
              color="text.secondary"
              style={{ color: `${colors.primary.base}`, fontSize: "20px" }}
            >
              <img src={clock} alt="clock" height={"15px"} /> {props.time}
            </Typography>
            <Typography
              variant="h2"
              color="text.secondary"
              style={{ color: `${colors.primary.base}`, fontSize: "20px" }}
            >
              Pret: {props.price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          justifyContent: "center",
          borderTop: "1px solid #b4a087",
          margin: " 0 10px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={linkGenerate(props.title)}>
          <Button size="small" color="primary" style={{ textAlign: "center" }}>
            <Typography
              style={{ color: `${colors.primary.base}`, fontSize: "20px" }}
              variant="h2"
            >
              {buttonText}
            </Typography>
          </Button>
        </Link>
      </CardActions>
    </StyledCard>
  );
};
