import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CardPage from "../../components/Card";

const CardListe = ({listes}) => {

return (
<Grid container spacing={3}>
          {listes.map((liste) => (
            <Grid item md={3} sm={3} xs={12}>
              <CardPage liste={liste} />
            </Grid>
          ))}
        </Grid>
);


}
export default CardListe