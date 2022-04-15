import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link as ReactRouteLink } from "react-router-dom";
import axios from "axios";
import _ from "lodash";


const Panier = () => {
  const initialState = [];
  const [categorie, setCategorie] = useState(initialState);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/panier`);
        setCategorie(response.data, { ordered: "false" });
        // }
      } catch (err) { }
    }
    fetchData();
  }, []);
  console.log(categorie);
  return (
    <IconButton aria-label="cart" style={{ paddingTop: "21px" }} component={ReactRouteLink} to={`/Confirmation`}>
      <Badge badgeContent={categorie.length} style={{ color: "white" }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
export default Panier;