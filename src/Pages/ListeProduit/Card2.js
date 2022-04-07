import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";

export default function Card2({ liste }) {
  const theme = useTheme();

  return (
    <Card style={{ height: "150px" }}>
      <CardMedia
        component="img"
        style={{ height: "100%", width : "100%" }}
        image={liste.img}
        alt="Live from space album cover"
      />
    </Card>
  );
}
