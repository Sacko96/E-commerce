import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Box } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
  
}));

export default function Panier() {
  return (
    <IconButton aria-label="cart" style={{paddingTop:"21px"}}>
      <Badge badgeContent={1} style={{color:"white"}}>
        <ShoppingCartIcon />
      </Badge>
      {/* <Box style={{color:"white", fontSize:"15px"}}>Panier</Box> */}
    </IconButton>
  );
}