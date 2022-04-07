import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    backgroundImage:
      "url(https://abcmoteur.fr/wp-content/uploads/2016/01/Pub-Renault-Bob-Sinclar.jpg)",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "100%",
    },
  },
  card: {
    height: "450px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    
    },
  
  },
}));

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        // component="img"
        // alt="green iguana"
        className={classes.img}
        // image="https://abcmoteur.fr/wp-content/uploads/2016/01/Pub-Renault-Bob-Sinclar.jpg"
      />
    </Card>
  );
}
