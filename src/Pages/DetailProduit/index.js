import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
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

const BtnHelp = (props) => {
  const classes = useStyles();
  const initialState = []
  const [detailproduit, setDetailProduit] = useState(initialState)
  React.useEffect(() => {
    async function fetchData() {
      const key = props.match.params.key;
      console.log(key);
      try {
        const response = await axios.get(`http://localhost:8000/sousCategorie?id=${key}`)
        setDetailProduit(response.data)
        // }
      } catch (err) {}
    }
    fetchData()
  }, [])
  return (
    <Page className={classes.root} >
      <Container maxWidth="lg">
      <Box pt={4}/>
        <DetailProduit detail={detailproduit}/>
        <Box pt={10}/>
      </Container>
    </Page>
  );
}
export default BtnHelp;