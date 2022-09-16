import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import clock from "./Assets/clock-regular.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";
import linkGenerate from "../generalFunction";


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
    lessons: number;
    time: string;
    title: string;
}


export const MultiActionAreaCard = (props: DetailedAboutCard) => {
    return (
        <StyledCard sx={{maxWidth: 250}}>
            <CardActionArea>
                <CardMediaStyled src={props.image} alt="courses"/>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.price}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {props.title}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {props.lessons} Lessons
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        <img src={clock} alt="clock" height={"15px"}/> {props.time}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link style={{textDecoration: "none"}} to={linkGenerate(props.title)}>
                    <Button size="small" color="primary">
                        Cumpără
                    </Button>
                </Link>
            </CardActions>
        </StyledCard>
    );
};
