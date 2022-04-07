import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Slider from "./Slider";
import ListeCategorie from "./ListeCategorie";
import Card1 from "./Card1";
import Card2 from "./Card2";
import axios from "axios";

const data2 = [
  {
    img: "https://bestphones.tn/images/anti-casse-superedge-iphone-12.jpg",
    nom: "Ecouteur",
    slug:"1",

  },
  {
    img: "https://media.adeo.com/marketplace/MKP/89195240/bac61437e517bf66042d576cc8d06fa0.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds",
    nom: "Telephone",
    slug:"2",

  },
  {
    img: "https://www.presse-citron.net/app/uploads/2018/11/meilleure-banque-image.jpg",
    nom: "Pochette",
    slug:"3",

  },
  {
    img: "https://progsm.tn/wp-content/uploads/2020/06/ipx.jpg",
    nom: "Anti-casse",
    slug:"4",

  },

];

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


  return (
    <>
      <Slider />
      <Container maxWidth="lg">
        <Typography style={{textAlign:"center" ,fontSize:"30px"}}>Promotion</Typography>
      <Grid container spacing={3}>
          {data2.map((liste) => (
            <Grid item md={3} sm={3} xs={12}>
              <Card2 liste={liste} />
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
