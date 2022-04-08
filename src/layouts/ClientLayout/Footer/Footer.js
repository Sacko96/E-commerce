import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  Container,
  Box,
  Link,
} from "@material-ui/core";


import { Link as ReactRouteLink } from "react-router-dom";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundColor:"#eeeeee"
  },
  
  
  
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box width={"100%"}>
      <Box px={2} py={10} className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography style={{fontSize:"30px", fontWeight:"bold"}}>produits</Typography>
              <Typography>Ecouteur</Typography>
              <Typography>Chargeur</Typography>
              <Typography>pieces</Typography>
              <Typography>Phone</Typography>
              <Typography>produits</Typography>
              <Typography>produits</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography style={{fontSize:"30px", fontWeight:"bold"}}>Apropos</Typography>
              <Typography>produits</Typography>
              <Typography>Ecouteur</Typography>
              <Typography>Chargeur</Typography>
              <Typography>pieces</Typography>
              <Typography>Phone</Typography>
              <Typography>produits</Typography>
              <Typography>produits</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography style={{fontSize:"30px", fontWeight:"bold"}}>contact</Typography>
              <Typography>produits</Typography>
              <Typography>Ecouteur</Typography>
              <Typography>Chargeur</Typography>
              <Typography>pieces</Typography>
              <Typography>Phone</Typography>
              <Typography>produits</Typography>
              <Typography>produits</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography style={{fontSize:"30px", fontWeight:"bold"}}>Job</Typography>
              <Typography>produits</Typography>
              <Typography>Ecouteur</Typography>
              <Typography>Chargeur</Typography>
              <Typography>pieces</Typography>
              <Typography>Phone</Typography>
              <Typography>produits</Typography>
              <Typography>produits</Typography>
            </Grid>
          </Grid>
         
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
