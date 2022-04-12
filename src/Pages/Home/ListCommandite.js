import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Commandite from "./Commandite";

const ListCommandite = ({listes}) => {

return (
<Grid container spacing={3}>
          {listes.map((liste) => (
            <Grid item md={3} sm={4} xs={12}>
              <Commandite liste={liste}/>
            </Grid>
          ))}
        </Grid>
);


}
export default ListCommandite;