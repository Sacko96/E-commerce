import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function CardPage({ liste }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={liste.photo}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {liste.nom}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {liste.price} Gnf par unité
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {liste.description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
