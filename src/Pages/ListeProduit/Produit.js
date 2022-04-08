import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles} from "@material-ui/core";

import { Link as ReactRouteLink } from "react-router-dom";
import { formatMoney } from "../../utils/common";
const useStyles = makeStyles((theme) => ({
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden"
 },
}));
const Produit = ({ cotegorie }) => {
  const classes = useStyles();

  return (
    <Card style={{ width: "100%",height:"100%"}}>
      <CardActionArea style={{ display: "flex",justifyContent:"space-between" }} component={ReactRouteLink} to={`/DetailProduit/${cotegorie.id}`}>
        <CardMedia
          component="img"
          sx={{ width: "30%",height:"100%" }}
          image={cotegorie.photo}
          alt="Live from space album cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cotegorie.nom}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.description}>
            {cotegorie.description}
          </Typography>
          <Typography style={{ fontWeight: "bold", marginTop: 10 }}>
            {formatMoney(cotegorie.price)} GNF
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Produit;