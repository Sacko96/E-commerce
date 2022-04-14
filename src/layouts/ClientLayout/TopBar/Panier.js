import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link as ReactRouteLink } from "react-router-dom";


const Panier = () => {
  return (
    <IconButton aria-label="cart" style={{ paddingTop: "21px" }} component={ReactRouteLink} to={`/Confirmation`}>
      <Badge badgeContent={1} style={{ color: "white" }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
export default Panier;