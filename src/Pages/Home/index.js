import { Box, Container, Card, Typography ,CardMedia} from "@material-ui/core";
import React, { useState } from "react";
import Slider from "./Slider";
import ListeCategorie from "./ListeCategorie";
import ListPromotion from "./ListPromotion";
import ListCommandite from "./ListCommandite";

import axios from "axios";
import _ from "lodash";

const HomeView = () => {
  const initialState = [];
  const [categorie, setCategorie] = useState(initialState);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/categorie`);
        setCategorie(response.data);
        // }
      } catch (err) { }
    }
    fetchData();
  }, []);
  console.log(categorie);

  const [prod, setProd] = useState([]);
  const [prod1, setProd1] = useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/sousCategorie`);
        setProd(_.slice(response.data, [0], [4]));
        setProd1(_.slice(response.data, [5], [17]));
        // }
      } catch (err) { }
    }
    fetchData();
  }, []);

  return (
    <>
      <Slider />
      <Container maxWidth="lg">
        <Typography style={{ textAlign: "center", fontSize: "30px" }}>
          Promotion
        </Typography>
        <ListPromotion listes={prod} />
      
      
        <Typography style={{ textAlign: "center", fontSize: "30px" }}>
          Catégorie
        </Typography>
        <ListeCategorie liste={categorie} />
        <Box mt={2} />
        <Typography style={{ fontSize: "30px" }}>
          Produits commandités
        </Typography>
        <Box mt={2} />
        <ListCommandite listes={prod1} />
      </Container>
      <Box mt={4} />
    </>
  );
};
export default HomeView;
