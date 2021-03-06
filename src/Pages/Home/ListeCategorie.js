import React from "react";
import Categorie from "./Categorie";
import { Grid } from "@material-ui/core";

const ListeCategorie = ({ liste }) => {
  console.log(liste);
  return (
    <Grid container spacing={3}>
      {liste.map((liste) => (
        <Grid item md={4} sm={4} xs={12}>
          <Categorie liste={liste} />
        </Grid>
      ))}
    </Grid>
  );
}
export default ListeCategorie;
