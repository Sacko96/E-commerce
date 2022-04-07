import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Slider from "./Slider";
import ListeCategorie from "./ListeCategorie";
import Card1 from "./Card1";
import CardPage from "../../components/Card";
import axios from "axios";
import _ from "lodash";


const HomeView = () => {

    const initialState = []
    const [categorie, setCategorie] = useState(initialState)
    React.useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:8000/categorie`)
          setCategorie(response.data)
          // }
        } catch (err) {}
      }
      fetchData()
    }, [])
    console.log(categorie)



    const [prod, setProd] = useState([])
    React.useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:8000/sousCategorie`)
          setProd(_.filter(response.data,{price:10000}))
          // }
        } catch (err) {}
      }
      fetchData()
    }, [])

  return (
    <>
      <Slider />
      <Container maxWidth="lg">
        <Typography style={{textAlign:"center" ,fontSize:"30px"}}>Promotion</Typography>
      <Grid container spacing={3}>
          {prod.map((liste) => (
            <Grid item md={3} sm={3} xs={12}>
              <CardPage liste={liste} />
            </Grid>
          ))}
        </Grid>

        <Typography style={{textAlign:"center" ,fontSize:"30px"}}>Catégorie</Typography>
         <ListeCategorie liste={categorie} />
      </Container>
      
      <Box mt={4}/>
      <Card1/>
      <Box mt={4}/>
    </>
  );
}
export default HomeView;
