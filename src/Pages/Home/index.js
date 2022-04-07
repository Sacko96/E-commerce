import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import Slider from "./Slider";
import ListeCategorie from "./ListeCategorie";
import Card1 from "./Card1";
import Card2 from "./Card2";

import axios from "axios";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import { fontSize } from "@mui/system";


const data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS589TfupGdHO3Iu9js85ouZV8NMXSIFR8PyA&usqp=CAU",
    nom: "Ecouteur",
    slug:"1",

  },
  {
    img: "https://sc04.alicdn.com/kf/Hcb6688aedc7d4b20a02335b4537cdf10W.jpg",
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
  {
    img: "https://st.depositphotos.com/1035350/2983/i/600/depositphotos_29836689-stock-photo-mt-fuji-in-the-autumn.jpg",
    nom: "Chargeur",
    slug:"5",

  },
  {
    img: "https://deep-image.ai/assets/image-realestate.ea3f2c18.webp",
    nom: "Autre",
    slug:"6",

  },
];

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

function HomeView() {


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
        <Grid container spacing={3}>
          {data.map((liste) => (
            <Grid item md={6} sm={6} xs={12}>
              <ListeCategorie liste={liste} />
            </Grid>
          ))}
        </Grid>

      </Container>
      
      <Box mt={4}/>
      <Card1/>
      <Box mt={4}/>
    </>
  );
}
export default HomeView;
