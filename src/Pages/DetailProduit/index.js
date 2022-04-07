import React from "react";
import Page from "../../components/Page";
import {
  Box,
  makeStyles,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import DetailProduit from "./DetailProduit";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"white"
  },
 
}));

export default function BtnHelp() {
  const classes = useStyles();

  return (
    <Page className={classes.root} >
      

      <Container maxWidth="lg">
      <Box pt={4}/>
        <DetailProduit/>
        <Box pt={10}/>
      </Container>
    </Page>
  );
}
