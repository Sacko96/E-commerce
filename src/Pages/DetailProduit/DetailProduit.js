import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ButtonAdd from "./ButtonAdd";
import Breadcrumb from "../../components/Breadcrumbs";


export default function DetailProduit() {
  return (
    <>
     <Breadcrumb/>
     <Box mt={2}/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://www.journaldugeek.com/content/uploads/2017/10/fran%C3%A7ais-publicit%C3%A9-smartphone.jpg"
          />
        </Card>
        <Box mt={1}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6}>
        <Box border={1} pt={2} pb={2} textAlign="center">
          <Typography>Delivery Detail</Typography>
          Delivery Earliest Delivery Friday, April 8 Delivery ZIP Code: 98101
          Change Your delivery date is not secured until you complete your
          order. Dates may change based on delivery address, availability and if
          multiple items are shipped.
          <Box pt={2}/>
          <Typography >1 000 GNF</Typography>
          <ButtonAdd/>
        </Box>
        <Box pt={4}/>
        <Button
        style={{backgroundColor:"#0073a6", color:"white", width:"100%"}}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
    </>
  );
}
