
import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Box, Container,Typography } from "@material-ui/core";
import ListeProduits from "./ListeProduits";

const ListeProduit = (props) => {
  const initialState = []
  const [listcategorie, setListCategorie] = useState(initialState)
  React.useEffect(() => {
    async function fetchData() {
      const key = props.match.params.key;
      try {
        const response = await axios.get(`http://localhost:8000/sousCategorie?slug=${key}`)
        setListCategorie(response.data)
        // }
      } catch (err) {}
    }
    fetchData()
  }, [])
  // console.log(listcategorie)


  const cotegories = _.groupBy(
    listcategorie.filter((categorie) => {
      return categorie;
    }),
    "title"
  );
  console.log(cotegories);

  return (
    <>
      <Container maxWidth="xlg">
      <Box mt={4} mb={4}>
          <ListeProduits cotegories={cotegories} />
        </Box>
      </Container>
    </>
  );
}
export default ListeProduit;
