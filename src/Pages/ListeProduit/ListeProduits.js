import * as React from 'react';
import Produit from './Produit';
import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";

const ListeProduits = ({ cotegories }) => {
  console.log(cotegories);
  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
      {Object.keys(cotegories).map((item) => {
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    textAlign:"center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
                >
                  {item}
                </Typography>
              </Grid>
              {cotegories[item].map((cotegorie) => {
                return (
                  <>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                      <Produit cotegorie={cotegorie} />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </>
        );
      })}
      {/* </Grid> */}
    </Box>
  );
}
export default ListeProduits;