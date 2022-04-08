import React, { useState } from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  CardHeader,
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

export default function CardPage({liste }) {
  const classes = useStyles();
  ;

  

  return (
    <React.Fragment>
    <CardActionArea component={ReactRouteLink} to={`/DetailProduit/${liste.id}`}>
      <Card className={classes.root} >
        <div className={classes.content}>
          <CardHeader
            className={classes.p5}
            title={
              <Typography variant="h5" color="textSecondary" component="h5">
                {liste.title} {liste.nom}
              </Typography>
            }
          />
           <Typography variant="h5" color="textSecondary" component="h5">
                
              </Typography>
          <CardContent className={classes.description}>
            <Typography variant="body2" color="textSecondary" component="p">
              {liste.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="h3">
              {formatMoney(liste.price)} GNF
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.media}
          image={liste.photo}
          title={liste.nom}
        />
        
      </Card>
  
    </CardActionArea>
    
    </React.Fragment>
  );
}
