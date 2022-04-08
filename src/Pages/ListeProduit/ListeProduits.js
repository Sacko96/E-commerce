import * as React from 'react';
import Produit from './Produit';
import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";

const ListeProduits = ({ cotegories }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {Object.keys(cotegories).map((item) => {
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                style={{ color: "#210557",textTransform:"uppercase",fontSize:"25px",marginBottom:"5px",marginTop:"5px" }}
                >
                  {item}
                </Typography>
              </Grid>
              {cotegories[item].map((cotegorie) => {
                return (
                  <>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <Produit cotegorie={cotegorie} />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </>
        );
      })}
    </Box>
  );
}
export default ListeProduits;