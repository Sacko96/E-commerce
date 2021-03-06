import React from "react";
import { Link as ReactRouteLink } from "react-router-dom";

import {
  makeStyles,
  CardActionArea,
  Card,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  media: {
    position: "relative",
    height: "20rem",
    width: "100%",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
  content: {
    padding: 1,
  },
  Sbg: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    color: "rgba(255,255,255,0.78)",
    backgroundColor: "rgba(0,0,0,.24)",
    height: "50%",
  },
}));

const Categorie = ({ liste }) => {
  const classes = useStyles();
  console.log(liste);
  return (
    <Card style={{width:"100%",height:"100%" }}>
      <CardActionArea  variant="body2"  component={ReactRouteLink}  to={`/ListeProduit/${liste.slug}`}>
        <CardMedia  className={classes.media} image={liste.photo} />
        <Box className={classes.Sbg}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            <Link variant="body2" style={{ color: "white", fontSize: "25px" }}>
             {liste.title}
            </Link>
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
export default Categorie;
