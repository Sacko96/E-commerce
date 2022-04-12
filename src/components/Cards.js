import React, { useState } from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  Box,
  Card,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { formatMoney } from "../utils/common";
import { Link as ReactRouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10rem",
    display: "flex",
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  media: {
    width: "40%",
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: "18px",
    height: "35px",
    width: "35px",
  },
  description: {
    paddingTop: "5px",
    paddingBottom: "5px",
    height: "55%",
    overflow: "hidden",
  },
  p5: {
    paddingTop: "5px",
    paddingBottom: "5px",

  },

}));



 const Cards = ({ children, image ,links}) => {
  return (
    <React.Fragment>
       <Box>
       <CardActionArea component={ReactRouteLink} to={links}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
         component="img"
         alt="green iguana"
         height="200"
         image={image}
        />
      </Card>
      </CardActionArea>
      {children}
      </Box>
    </React.Fragment>
  );
}
export default Cards;