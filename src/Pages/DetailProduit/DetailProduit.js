import * as React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ButtonAdd from "./ButtonAdd";
import Breadcrumb from "../../components/Breadcrumbs";
import { formatMoney } from "../../utils/common";

 const DetailProduit = ({detail}) => {
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
            image={detail[0]?.photo}
          />
        </Card>
        <Box mt={1}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6}>
        <Box border={1} pt={2} pb={2} textAlign="center">
          <Typography style={{fontWeight:"bold",fontSize:24}}> {detail[0]?.title}</Typography>
          <Typography style={{fontWeight:"bold",fontSize:15}}>{detail[0]?.nom}</Typography>
          <Box pt={1}/>
          <Typography> {detail[0]?.description}</Typography>
          <Box pt={1}/>
          <Typography style={{fontWeight:"bold",fontSize:15}}>{formatMoney(detail[0]?.price)} GNF</Typography>
          <Box pt={1}/>
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
export default DetailProduit;