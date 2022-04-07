import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 const Produit = ({cotegorie}) => {
    console.log(cotegorie);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{display:"flex"}}>
        <CardMedia
          component="img"
          height="140"
          image={cotegorie.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {cotegorie.nom}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Produit;