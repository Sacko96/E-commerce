import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ButtonAdd from "./ButtonAdd";
import Breadcrumb from "../../components/Breadcrumbs";
import { formatMoney } from "../../utils/common";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { GrWaypoint } from 'react-icons/gr';
import axios from "axios";




const DetailProduit = ({ detail  }) => {
  const [count, setCount] = useState(1);
  const addToCard = async () => {
    try {
      await axios.post(`http://localhost:8000/panier`,
      {
        souscategorieid: detail[0].id,
        quantite:count,
        user:2,
        ordered:"false",
      }
      );
    } catch (error) {}
  };

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Breadcrumb />
      <Box mt={2} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: "40%" }}
              image={detail[0]?.photo}
            />
          </Card>
          <Box mt={1} />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h4" gutterBottom component="div">
          {detail[0]?.nom}
          </Typography>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography style={{ fontSize: 20, fontWeight: "bold" }} gutterBottom component="div">
              Prix
            </Typography>
            <Typography style={{ fontSize: 24, fontWeight: "bold" }} gutterBottom component="div">
              {formatMoney(detail[0]?.price)} GNF
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom component="div">
              Caractéristiques
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemAvatar>
                  <GrWaypoint style={{ fontSize: 20 }} />
                </ListItemAvatar>
                <Typography variant="h6" gutterBottom component="div">
                  Ampoule dépolie
                </Typography>
                {/* <ListItemText primary="Ampoule dépolie" /> */}
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <GrWaypoint style={{ fontSize: 20 }} />
                </ListItemAvatar>
                <Typography variant="h6" gutterBottom component="div">
                  Longueur totale : 12,8 m (42 pi)
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <GrWaypoint style={{ fontSize: 20 }} />
                </ListItemAvatar>
                <Typography variant="h6" gutterBottom component="div">
                  Incassable
                </Typography>
              </ListItem>
            </List>



          </Box>
          <Box mt={1} />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Box border={1} pt={2} pb={2} textAlign="center">
            <Typography style={{ fontWeight: "bold", fontSize: 24 }}> {detail[0]?.title}</Typography>
            {/* <Typography style={{ fontWeight: "bold", fontSize: 15 }}>{detail[0]?.nom}</Typography> */}
            <Box pt={1} />
            <Typography> {detail[0]?.description}</Typography>
            <Box pt={1} />
            <ButtonAdd count={count} setCount={setCount} />
          </Box>
          <Box pt={4} />
          <Button
            style={{ backgroundColor: "#0073a6", color: "white", width: "100%" }}
            onClick={addToCard}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
export default DetailProduit;