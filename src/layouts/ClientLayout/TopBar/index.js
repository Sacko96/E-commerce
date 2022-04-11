import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Recherche from "./Recherche";
import Menu from "./Menu";
import { Box, Hidden } from "@mui/material";
import Panier from "./Panier";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1px",
    marginBottom: "1px",
  },
  title: {
    // flexGrow: 1,
    // marginRight: theme.spacing(2),
    // padding:"30px"
  },
  appBar: {
    backgroundColor: "#0073a6",
  },
  titre: {
    marginLeft: "2rem",
    marginRight: "2rem",
    color: "white",
    paddingTop: "10px",
    // backgroundColor: "white",
    height: "42px",
  },
  ligne: {
    borderLeft: "2px solid white",
    height: "40px",
    display: "inline-block",
  },
  //   nb: j'ai utiliser padding pour augmenter le height si on
  // trouve un logo plus grang on dimunie
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden smDown>
            <Menu />
            <Box ml={2} />
          </Hidden>

          <Typography variant="h6" edge="start" aria-label="menu">
            <Logo />
          </Typography>
          <Box ml={2} flexGrow={1} />
          <Hidden smDown>
            <Recherche />
          </Hidden>

          
          <Hidden mdDown>
            <Link
              to="/login"
              className={classes.titre}
              variant="contained"
              //color="primary"
            >
              Se connecter / S'enregistrer
            </Link>
            <Box className={classes.ligne}></Box>
          </Hidden>

          <Hidden mdUp>
            <Box ml={3}>
              <Link className="iconLogin" href="/login">
                <FaUserAlt
                  style={{
                    height: "30px",
                    width: "25px",
                    color: "white",
                    marginTop: "5px",
                  }}
                />
              </Link>
            </Box>
          </Hidden>

          <Box>
            <Panier />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
