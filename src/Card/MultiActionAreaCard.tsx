import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import clock from "./Assets/clock-regular.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import linkGenerate from "../generalFunction";
import { useState } from "react";

import { Tooltip } from "../comp/Styles";

const CardMediaStyled = styled.img`
  width: 100%;

  :hover {
    transform: scale(1.15, 1.15);
  }

  transition: transform 1s ease-in-out;
`;
const StyledCard = styled(Card)`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  overflow: initial;
  :hover {
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
  }
  transition: box-shadow 1s ease-in-out;
`;

interface DetailedAboutCard {
  item: object;
  image: any;
  price: string;
  time: string;
  title: string;
  index: number;
  content: object;
  setDeleteModal: any;
  setDeleteMOdalOpen: any;
}

export const MultiActionAreaCard = (props: DetailedAboutCard) => {
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

  const handleDelete = (data: object, index: number) => {
    props.setDeleteModal({ data, index });
    props.setDeleteMOdalOpen(true);
  };

  return (
    <StyledCard sx={{ maxWidth: 250 }}>
      {localStorage.user !== "null" && (
        <button
          className={"delete-button"}
          onClick={() => {
            handleDelete(props.content, props.index);
          }}
        >
          <Tooltip>Delete this course</Tooltip>X
        </button>
      )}
      <CardActionArea>
        <CardMediaStyled src={props.image} alt="courses" />
        <CardContent>
          <Typography
            variant="h2"
            color="text.secondary"
            style={{
              color: "#002366",
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
              style={{ color: "#002366", fontSize: "20px" }}
            >
              <img src={clock} alt="clock" height={"15px"} /> {props.time}
            </Typography>
            <Typography
              variant="h2"
              color="text.secondary"
              style={{ color: "#002366", fontSize: "20px" }}
            >
              Pret:{props.price}
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
              style={{ color: "#002366", fontSize: "20px" }}
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
