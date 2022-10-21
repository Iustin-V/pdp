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

const CardMediaStyled = styled.img`
  width: 100%;

  :hover {
    transform: scale(1.15, 1.15);
  }

  transition: transform 1s ease-in-out;
`;
const StyledCard = styled(Card)`
  margin-top: 40px;
  margin-bottom: 40px;
  :hover {
    -webkit-box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 4px 1px 15px -1px rgba(0, 0, 0, 0.4);
  }
  transition: box-shadow 1s ease-in-out;
`;

interface DetailedAboutCard {
  image: any;
  price: string;
  time: string;
  title: string;
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

  return (
    <StyledCard sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMediaStyled src={props.image} alt="courses" />
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            style={{ color: "#002366", margin: " 10px 0", minHeight: "64px" }}
          >
            {props.title}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ color: "#002366" }}
            >
              <img src={clock} alt="clock" height={"15px"} /> {props.time}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ color: "#002366" }}
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
          margin: " 0px 10px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={linkGenerate(props.title)}>
          <Button size="small" color="primary" style={{ textAlign: "center" }}>
            <Typography style={{ color: "#002366" }} variant="h6">
              {buttonText}
            </Typography>
          </Button>
        </Link>
      </CardActions>
    </StyledCard>
  );
};
