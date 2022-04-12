import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Promotion from "./Promotion";

const ListPromotion = ({listes}) => {

return (
<Grid container spacing={3}>
          {listes.map((liste) => (
            <Grid item md={3} sm={4} xs={12}>
              <Promotion liste={liste}/>
            </Grid>
          ))}
        </Grid>
);
}
export default ListPromotion;