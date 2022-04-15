import * as React from "react";
import { Grid } from "@mui/material";
import { makeStyles,Button} from "@material-ui/core";
import { Box } from "@mui/system";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@material-ui/core/Typography";
import ButtonAdd from "../DetailProduit/ButtonAdd";

const useStyles = makeStyles((theme) => ({

  value: {
    padding: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px",
    },
  },
  
}));


const ConfirmationPage = () => {
  const classes = useStyles();

  return (

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Box display="flex">
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: "20%" }}
            image="https://m.media-amazon.com/images/I/51iK1b-dJ2L._AC_SY355_.jpg"
          />
          <Typography style={{ fontSize: 15, marginLeft: 20 }} gutterBottom component="div">
            Danson - Guirlande d’éclairage 20 ampoules à DEL Edison en verre dépoli.
          </Typography>
        </Box>
        <Box display="flex" pb={2} justifyContent="space-between">
          <Typography style={{ fontSize: 15, paddingTop: 10, fontWeight: "bold" }} gutterBottom component="div">
            Prix
          </Typography>
          <Typography style={{ fontSize: 15, paddingTop: 10, fontWeight: "bold" }} gutterBottom component="div">
            5.000 GNF
          </Typography>
        </Box>
        <Box >
          <ButtonAdd conf={true}/>
        </Box>

        <Box display="flex" pt={1} justifyContent="space-between">
          <Typography style={{ fontSize: 15, paddingTop: 10, fontWeight: "bold" }} gutterBottom component="div">
            Total
          </Typography>
          <Typography style={{ fontSize: 15, paddingTop: 10, fontWeight: "bold" }} gutterBottom component="div">
            10.000 GNF
          </Typography>
        </Box>

        <Box pt={2}>
          <Typography  gutterBottom component="div">
          Supprimer
          </Typography>
        </Box>
        <Box mt={1} />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Box border={1} pt={2} pb={2} textAlign="center">
          <Box display="flex" justifyContent="space-around">
          <Typography style={{ fontWeight: "bold", fontSize: 15 }}>Total estimatif</Typography>
          <Typography style={{ fontWeight: "bold", fontSize: 15 }}>10.000 GNF</Typography>
          </Box>
          <Box pt={1} />
          <Typography>Estou aguardando alguém me liberar para entrar na sala.</Typography>
          <Box pt={4} />
          <Button
            style={{ backgroundColor: "green", color: "white", width: "90%" }}
          >
            Passer a la caisse
          </Button>
        </Box>

      </Grid>
    </Grid>
  );
}
export default ConfirmationPage;